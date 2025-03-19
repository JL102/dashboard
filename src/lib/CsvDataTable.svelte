<script lang="ts">
	import DataTable, { Head, Row, Cell, Body } from '@smui/data-table';
	import { getScoreCapability2025, type CsvLayout2025Parsed } from './stats';
	import ViewEntryDialog from './ViewEntryDialog.svelte';

	let {
		csvData,
	}: {
		csvData: CsvLayout2025Parsed[];
	} = $props();

	let viewEntryDialog: ViewEntryDialog;
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
		{#each csvData as item}
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
</DataTable>

<ViewEntryDialog bind:this={viewEntryDialog} />
