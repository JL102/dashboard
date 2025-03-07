<script lang="ts">
	import { uploadCsv2025 } from '$lib/firebase';
	import { db } from '$lib/LocalDB';
	import QrCodeScanningDialog from '$lib/QrCodeScanningDialog.svelte';
	import { parseCsvLayout2024, type CsvLayout2024Raw } from '$lib/stats';
	import { getPageLayoutContexts } from '$lib/utils';
	import { parse } from 'csv-parse/browser/esm/sync';
	import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
	import { liveQuery } from 'dexie';
	import ViewEntryDialog from '$lib/ViewEntryDialog.svelte';

	const { data } = $props();
	
	let files: FileList | undefined = $state(undefined);
	let rawData: CsvLayout2024Raw[] = $state([]);
	// let parsedData: CsvLayout2024Parsed[] = $state.raw([]);
	let csvData = $derived(liveQuery(() => db.csv2025.where('eventkey').equals(data.event.key).sortBy('matchNum')));
	
	const { snackbar, qrButtonClick, title, downloadButtonClick, uploadButtonClick } = getPageLayoutContexts();
	qrButtonClick.set(() => {
		qrScanningDialog.open();
	});
	downloadButtonClick.set(undefined);
	uploadButtonClick.set(async () => {
		if ($csvData) {
			// await uploadCsv2024($csvData);
			await uploadCsv2025($csvData);
		}
	});
	title.set('Laptop In Stands dashboard');
	
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
	let viewEntryDialog: ViewEntryDialog;

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

<QrCodeScanningDialog bind:this={qrScanningDialog} onclose={(action) => {console.log(action)}} />
<ViewEntryDialog bind:this={viewEntryDialog} />

<div class='container mx-auto not-prose'>
	<!-- <input type="file" bind:files />
	
	<Button onclick={() => {qrScanningDialog.open();}} >Press me</Button>

	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
	{/if} -->
	
	<DataTable class="w-full">
		<Head>
			<Row>
				<Cell>Key</Cell>
				<Cell>Scouter</Cell>
				<Cell>Total Scored</Cell>
				<Cell>Auto</Cell>
				<Cell>Teleop</Cell>
				<Cell>Other Info</Cell>
			</Row>
		</Head>
		<Body>
			{#each $csvData as item}
				<Row onclick={() => {viewEntryDialog.open(item)}}>
					<Cell>{item.key}</Cell>
					<Cell>{item.scouterInitials}</Cell>
					<Cell>{item.totalScored}</Cell>
					<Cell>{item.auto.length} cycles</Cell>
					<Cell>{item.teleop.length} cycles</Cell>
					<Cell>{item.otherInfo}</Cell>
				</Row>
			{/each}
		</Body>
	</DataTable>
</div>
