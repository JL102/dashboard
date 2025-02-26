<script lang="ts">
	import { db } from '$lib/LocalDB';
	import MatchPicker from '$lib/MatchPicker.svelte';
	import QrCodeScanningDialog from '$lib/QrCodeScanningDialog.svelte';
	import {
		filterByTeam,
		parseCsvLayout2024,
		type CsvLayout2024Raw
	} from '$lib/stats';
	import TeamStats from '$lib/TeamStats.svelte';
	import { getPageLayoutContexts } from '$lib/utils';
	import { parse } from 'csv-parse/browser/esm/sync';
// Import the synchronous parser for browser
	import Radio from '@smui/radio';
	import { liveQuery } from 'dexie';

	import MatchPickerTba from '$lib/MatchPickerTBA.svelte';
	import FormField from '@smui/form-field';
	import { downloadCsv2024 } from '$lib/firebase';

	let files: FileList | undefined = $state(undefined);
	let rawData: CsvLayout2024Raw[] = $state([]);
	// let parsedData: CsvLayout2024Parsed[] = $state.raw([]);
	let csvData = $derived(liveQuery(() => db.csv2024.toCollection().toArray()));

	const { snackbar, qrButtonClick, title, downloadButtonClick, uploadButtonClick } =
		getPageLayoutContexts();

	qrButtonClick.set(() => {
		qrScanningDialog.open();
	});
	downloadButtonClick.set(async () => {
		let data = await downloadCsv2024();
		console.log(data);
		await db.transaction('rw', db.csv2024, async () => {
			await db.csv2024.bulkPut(data);
		})
	});
	uploadButtonClick.set(undefined);

	title.set('Phone on Field dashboard');

	// List of unique teams
	let teamList = $derived.by(() => {
		if (!$csvData) return [];
		let st = performance.now();
		let set = new Set<number>();
		for (let item of $csvData) {
			set.add(item.teamNum);
		}
		let list = Array.from(set);
		console.log('teamlist', performance.now() - st);
		return list;
	});

	let blue1 = $state(undefined);
	let blue2 = $state(undefined);
	let blue3 = $state(undefined);
	let red1 = $state(undefined);
	let red2 = $state(undefined);
	let red3 = $state(undefined);

	// Function to handle file reading and parsing
	async function handleFile(file: File) {
		const reader = new FileReader();

		reader.onload = (event) => {
			const text = event.target?.result as string;
			rawData = parse(text, {
				columns: true, // Assuming the CSV has headers
				skip_empty_lines: true
			});
			console.log(rawData);
			let parsedData = parseCsvLayout2024(rawData);
			db.csv2024.bulkPut(parsedData);
		};

		reader.onerror = (event) => {
			console.error('File could not be read: ' + event.target?.error);
		};

		reader.readAsText(file);
	}
	let matchList = $derived(
		liveQuery(async () => {
			const currentEvent = await db.current_event.toCollection().first();
			if (!currentEvent) return [];
			let matches = await db.matches.where('event_key').equals(currentEvent.key).sortBy('time');
			return matches;
		})
	);

	let qrScanningDialog: QrCodeScanningDialog;

	let pickerMode = $state('tba');
</script>

<QrCodeScanningDialog
	bind:this={qrScanningDialog}
	onclose={(action) => {
		console.log(action);
	}}
/>

<div class="container mx-auto">
	<h1 class="text-lg">Pick a match, either by match number (using TBA) or by entering team numbers manually</h1>

	<div class='grid grid-cols-2 justify-items-center'>
		<FormField>
			<Radio bind:group={pickerMode} value="tba" touch />
			{#snippet label()}
				The Blue Alliance
			{/snippet}
		</FormField>
		<FormField>
			<Radio bind:group={pickerMode} value="manual" touch />
			{#snippet label()}
				Manual entry
			{/snippet}
		</FormField>
	</div>
	{#if pickerMode === 'manual'}
		<MatchPicker {teamList} bind:blue1 bind:blue2 bind:blue3 bind:red1 bind:red2 bind:red3 />
	{:else}
		<MatchPickerTba {teamList} matchList={matchList} bind:blue1 bind:blue2 bind:blue3 bind:red1 bind:red2 bind:red3 />
	{/if}

	<div class="grid grid-cols-1 gap-2 md:grid-cols-3">
		{#if $csvData?.length > 0}
			<TeamStats teamNum={blue1} data={filterByTeam($csvData, blue1)} spot="Blue 1" />
			<TeamStats teamNum={blue2} data={filterByTeam($csvData, blue2)} spot="Blue 2" />
			<TeamStats teamNum={blue3} data={filterByTeam($csvData, blue3)} spot="Blue 3" />
			<TeamStats teamNum={red1} data={filterByTeam($csvData, red1)} spot="Red 1" />
			<TeamStats teamNum={red2} data={filterByTeam($csvData, red2)} spot="Red 2" />
			<TeamStats teamNum={red3} data={filterByTeam($csvData, red3)} spot="Red 3" />
		{/if}
	</div>
</div>
