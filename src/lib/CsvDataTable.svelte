<script lang="ts">
	import DataTable, { Body, Cell, Head, Label, Pagination, Row } from '@smui/data-table';
	import Select, { Option } from '@smui/select';
	import { getScoreCapability2025, type CsvLayout2025Parsed } from './stats';
	import IconButton from '@smui/icon-button';
	import ViewEntryDialog from './ViewEntryDialog.svelte';

	let {
		csvData
	}: {
		csvData: CsvLayout2025Parsed[];
	} = $props();

	let viewEntryDialog: ViewEntryDialog;

	let perPage = $state(10);
	let currentPage = $state(0);

	const start = $derived(currentPage * perPage);
	const end = $derived(Math.min(start + perPage, csvData.length));
	const slice = $derived(csvData.slice(start, end));
	const lastPage = $derived(Math.max(Math.ceil(csvData.length / perPage) - 1, 0));

	$effect(() => {
		if (currentPage > lastPage) {
			currentPage = lastPage;
		}
	});
</script>

<DataTable class="w-full">
	<Head>
		<Row>
			<Cell>Key</Cell>
			<Cell>Team</Cell>
			<Cell>Scouter</Cell>
			<Cell>Total Scored</Cell>
			<Cell>Auto</Cell>
			<Cell>Teleop</Cell>
			<Cell>Scored in</Cell>
			<Cell>Climb</Cell>
			<Cell>Other Info</Cell>
		</Row>
	</Head>
	<Body>
		{#each slice as item (item.key)}
			<Row
				onclick={() => {
					viewEntryDialog.open(item);
				}}
			>
				<Cell>{item.key}</Cell>
				<Cell>{item.teamNum}</Cell>
				<Cell>{item.scouterInitials}</Cell>
				<Cell>{item.totalScored}</Cell>
				<Cell>{item.auto.length} cycles</Cell>
				<Cell>{item.teleop.length} cycles</Cell>
				<Cell>{getScoreCapability2025([item])}</Cell>
				<Cell>{item.climbStatus}</Cell>
				<Cell>{item.otherInfo}</Cell>
			</Row>
		{/each}
	</Body>

	{#snippet paginate()}
		<Pagination>
			{#snippet rowsPerPage()}
				<Label>Rows per page</Label>
				<Select variant="outlined" bind:value={perPage} noLabel>
					<Option value={10}>10</Option>
					<Option value={25}>25</Option>
					<Option value={100}>100</Option>
				</Select>
			{/snippet}
			{#snippet total()}
				{start + 1}-{end} of {csvData.length}
			{/snippet}
			<IconButton
				class="material-icons"
				action="first-page"
				title="First page"
				onclick={() => (currentPage = 0)}
				disabled={currentPage === 0}>first_page</IconButton
			>
			<IconButton
				class="material-icons"
				action="prev-page"
				title="Prev page"
				onclick={() => currentPage--}
				disabled={currentPage === 0}>chevron_left</IconButton
			>
			<IconButton
				class="material-icons"
				action="next-page"
				title="Next page"
				onclick={() => currentPage++}
				disabled={currentPage === lastPage}>chevron_right</IconButton
			>
			<IconButton
				class="material-icons"
				action="last-page"
				title="Last page"
				onclick={() => (currentPage = lastPage)}
				disabled={currentPage === lastPage}>last_page</IconButton
			>
		</Pagination>
	{/snippet}
</DataTable>

<ViewEntryDialog bind:this={viewEntryDialog} />
