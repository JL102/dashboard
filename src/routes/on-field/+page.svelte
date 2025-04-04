<script lang="ts">
	import { db } from '$lib/LocalDB';
	import MatchPicker from '$lib/MatchPicker.svelte';
	import QrCodeScanningDialog from '$lib/QrCodeScanningDialog.svelte';
	import { filterByTeam } from '$lib/stats';
	import TeamStats from '$lib/TeamStats.svelte';
	import { getPageLayoutContexts } from '$lib/utils';
	import Radio from '@smui/radio';
	import Checkbox from '@smui/checkbox';
	import { liveQuery } from 'dexie';

	import { downloadCsv2025 } from '$lib/firebase';
	import MatchPickerTba from '$lib/MatchPickerTBA.svelte';
	import FormField from '@smui/form-field';
	import Autocomplete from '@smui-extra/autocomplete';

	const { data } = $props();

	// let parsedData: CsvLayout2025Parsed[] = $state.raw([]);
	let csvData = $derived(
		liveQuery(() => {
			if (queryAllEvents) return db.csv2025.toCollection().toArray();
			return db.csv2025.where('eventkey').equals(data.event.key).toArray();
		})
	);

	const { actionButtons, snackbar, title } = getPageLayoutContexts();

	actionButtons.set([
		{
			icon: 'qr_code',
			tooltip: 'Scan QR code',
			onclick: () => qrScanningDialog.open()
		},
		{
			icon: 'download',
			tooltip: 'Download data from cloud',
			onclick: async () => {
				if (confirm('Download data from the cloud (and potentially overwrite local data)?')) {
					let data = await downloadCsv2025();
					console.log(data);
					await db.transaction('rw', db.csv2025, async () => {
						await db.csv2025.bulkPut(data);
					});
				}
			}
		}
	]);

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
	let indivTeam = $state(undefined);

	let queryAllEvents = $state(false);

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
	<FormField>
		<Checkbox bind:checked={queryAllEvents} />
		{#snippet label()}
			Query data from ALL events instead of just {data.event.name}?
		{/snippet}
	</FormField>
	<h1 class="text-lg">
		Pick a match, either by match number (using TBA) or by entering team numbers manually
	</h1>

	<div class="grid grid-cols-3 justify-items-center">
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
		<FormField>
			<Radio bind:group={pickerMode} value="team" touch />
			{#snippet label()}
				Individual team
			{/snippet}
		</FormField>
	</div>
	{#if pickerMode === 'manual'}
		<MatchPicker {teamList} bind:blue1 bind:blue2 bind:blue3 bind:red1 bind:red2 bind:red3 />
	{:else if pickerMode === 'tba'}
		<MatchPickerTba
			{teamList}
			{matchList}
			bind:blue1
			bind:blue2
			bind:blue3
			bind:red1
			bind:red2
			bind:red3
		/>
	{:else}
		<Autocomplete 
			class='w-full'
			textfield$class='w-full'
			bind:value={indivTeam}
			label='Team number'
			options={teamList}
		/>
	{/if}

	{#if pickerMode == 'team'}
		{#if indivTeam}
			<TeamStats teamNum={indivTeam} data={filterByTeam($csvData, indivTeam)} spot="Team stats" />
		{:else}
			<p>Please enter a team number</p>
		{/if}
	{:else}
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
	{/if}
</div>
