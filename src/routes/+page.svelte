<script lang="ts">
	import { uploadCsv2024 } from '$lib/firebase';
	import { db } from '$lib/LocalDB';
	import MatchPicker from '$lib/MatchPicker.svelte';
	import QrCodeScanningDialog from '$lib/QrCodeScanningDialog.svelte';
	import { filterByTeam, parseCsvLayout2024, type CsvLayout2024Parsed, type CsvLayout2024Raw } from '$lib/stats';
	import TeamStats from '$lib/TeamStats.svelte';
	import { getPageLayoutContexts } from '$lib/utils';
	import Button, { Label } from '@smui/button';
	import { parse } from 'csv-parse/browser/esm/sync'; // Import the synchronous parser for browser
	import { liveQuery } from 'dexie';
	import { onMount } from 'svelte';

	let files: FileList | undefined = $state(undefined);
	let rawData: CsvLayout2024Raw[] = $state([]);
	// let parsedData: CsvLayout2024Parsed[] = $state.raw([]);
	let csvData = $derived(liveQuery(() => db.csv2024.toCollection().toArray()));
	
	const { snackbar, qrButtonClick, title, downloadButtonClick, uploadButtonClick } = getPageLayoutContexts();
	
	qrButtonClick.set(() => {
		qrScanningDialog.open();
	});
	downloadButtonClick.set(undefined);
	uploadButtonClick.set(async () => {
		if ($csvData) {
			await uploadCsv2024($csvData);
		}
	});
	
	title.set('Laptop In Stands dashboard');
	
	// List of unique teams
	let teamList = $derived.by(() => {
		if (!$csvData) return [];
		let st = performance.now();
		let set = new Set();
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
		console.log('handleFile enter)')
		const reader = new FileReader();

		reader.onload = (event) => {
			const text = event.target?.result as string;
			rawData = parse(text, {
				columns: true, // Assuming the CSV has headers
				skip_empty_lines: true
			});
			console.log(rawData);
			let parsedData = parseCsvLayout2024(rawData);
			console.log('Inserting data into csv2024 col');
			db.csv2024.bulkPut(parsedData);
		};

		reader.onerror = (event) => {
			console.error('File could not be read: ' + event.target?.error);
		};

		reader.readAsText(file);
	}
	
	let qrScanningDialog: QrCodeScanningDialog;

	$effect(() => {
		if (files && files[0]) {
			let file = files[0];
			if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
				console.log('parsing thingy', file);
				handleFile(file);
			}
			else {
				console.error('Incorrect file.type or file.name does not end with csv', file.type, file.name);
				console.log(file);
			}
		}
	});
</script>

<QrCodeScanningDialog bind:this={qrScanningDialog} onclose={(action) => {console.log(action)}} />

<div class='container mx-auto'>
	<h1 class="text-lg">Welcome to SvelteKit</h1>
	<input type="file" bind:files />
	
	<Button onclick={() => {qrScanningDialog.open();}} >Press me</Button>

	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
	{/if}
	
	<MatchPicker {teamList} bind:blue1 bind:blue2 bind:blue3 bind:red1 bind:red2 bind:red3/>
	
	<div class='grid grid-cols-1 md:grid-cols-3 gap-2'>
		{#if $csvData?.length > 0}
			<TeamStats teamNum={blue1} data={filterByTeam($csvData, blue1)} spot='Blue 1' />
			<TeamStats teamNum={blue2} data={filterByTeam($csvData, blue2)} spot='Blue 2' />
			<TeamStats teamNum={blue3} data={filterByTeam($csvData, blue3)} spot='Blue 3' />
			<TeamStats teamNum={red1} data={filterByTeam($csvData, red1)} spot='Red 1' />
			<TeamStats teamNum={red2} data={filterByTeam($csvData, red2)} spot='Red 2' />
			<TeamStats teamNum={red3} data={filterByTeam($csvData, red3)} spot='Red 3' />
		{/if}
	</div>

	<!-- {#if rawData.length > 0}
		<h2 class="text-xs">Parsed Data</h2>
		<ul>
			{#each rawData as row, i}
				<li><pre>{JSON.stringify(row)}<br/>{JSON.stringify($csvData[i])}</pre></li>
			{/each}
		</ul>
	{/if} -->
</div>
