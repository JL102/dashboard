<script lang="ts">
	import CsvDataTable from '$lib/CsvDataTable.svelte';
	import { uploadCsv2025 } from '$lib/firebase';
	import { db } from '$lib/LocalDB';
	import QrCodeScanningDialog from '$lib/QrCodeScanningDialog.svelte';
	import { exportCsv2025, parseCsvLayout2024, type CsvLayout2024Raw } from '$lib/stats';
	import { getPageLayoutContexts } from '$lib/utils';
	import { parse } from 'csv-parse/browser/esm/sync';
	import { liveQuery } from 'dexie';
	import FormField from '@smui/form-field';
	import Checkbox from '@smui/checkbox';

	const { data } = $props();

	let queryAllEvents = $state(false);

	let files: FileList | undefined = $state(undefined);
	let rawData: CsvLayout2024Raw[] = $state([]);
	// let parsedData: CsvLayout2024Parsed[] = $state.raw([]);
	
	$inspect(queryAllEvents);
	// let csvData = $derived(
	// 	queryAllEvents ? liveQuery(() => db.csv2025.toCollection().sortBy('matchNum')) :
	// 		liveQuery(() => db.csv2025.where('eventkey').equals(data.event.key).sortBy('matchNum'))
	// );
	// let csvData = $derived.by(async () => {
	// 	if (queryAllEvents) return await db.csv2025.toCollection().sortBy('matchNum');
	// 	else return await db.csv2025.where('eventkey').equals(data.event.key).sortBy('matchNum');
	// })
	let csvData = $derived.by(() => {
		queryAllEvents; // change in Svelte behavior leads to the variables used inside liveQuery() to not be listed as a dependency, so this forces it
		return liveQuery(() => {
			if (queryAllEvents) return db.csv2025.toCollection().sortBy('matchNum');
			else return db.csv2025.where('eventkey').equals(data.event.key).sortBy('matchNum')
		})
	})

	const { actionButtons, title, } = getPageLayoutContexts();

	actionButtons.set([
		{
			icon: 'table_view',
			tooltip: 'Download CSV',
			onclick: async () => {
				let link = document.createElement('a');
				let name = queryAllEvents ? 'AllEvents' : data.event.name.replace(/ /g, '_');
				link.download = `2025_${name}.csv`;
				link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(await exportCsv2025($csvData))}`;
				link.click();
			}
		},
		{
			icon: 'qr_code',
			tooltip: 'Scan QR code',
			onclick: () => qrScanningDialog.open()
		},
		{
			icon: 'upload',
			tooltip: 'Upload data to cloud',
			onclick: async () => {
				if ($csvData) {
					if (
						confirm(`${$csvData.length} entries are stored locally. Upload them all to the cloud?`)
					) {
						await uploadCsv2025($csvData);
					}
				}
			}
		}
	]);

	title.set('Laptop In Stands dashboard');

	// Function to handle file reading and parsing
	async function handleFile(file: File) {
		console.log('handleFile enter)');
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
	
	// $effect(() => {
	// 	if (files && files[0]) {
	// 		let file = files[0];
	// 		if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
	// 			console.log('parsing thingy', file);
	// 			handleFile(file);
	// 		}
	// 		else {
	// 			console.error('Incorrect file.type or file.name does not end with csv', file.type, file.name);
	// 			console.log(file);
	// 		}
	// 	}
	// });
</script>

<QrCodeScanningDialog
	bind:this={qrScanningDialog}
	onclose={(action) => {
		console.log(action);
	}}
/>

<div class="not-prose container mx-auto">
	<FormField>
		<Checkbox bind:checked={queryAllEvents} />
		{#snippet label()}
			Query data from ALL events instead of just {data.event.name}?
		{/snippet}
	</FormField>
	<!-- <input type="file" bind:files />

	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
	{/if} -->
	{#if $csvData}
		<CsvDataTable csvData={$csvData} />
	{/if}
</div>
