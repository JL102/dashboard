<script lang="ts">

	import Dialog, { Title, Content, Actions, Header } from "@smui/dialog";
	import type { CsvLayout2025Parsed } from "./stats";
	import CsvDataTable from "./CsvDataTable.svelte";
	import Button, {Label} from "@smui/button";
	import ViewEntryDialog from "./ViewEntryDialog.svelte";
	import DataTable, { Body, Cell, Head, Row } from "@smui/data-table";
	
	let dialogOpen = $state(false);
	let items: CsvLayout2025Parsed[] = $state([]);
	let teamNum: number|undefined = $state();
	
	export function open(itemsToShow: CsvLayout2025Parsed[], teamNumToShow: number) {
		items = itemsToShow;
		teamNum = teamNumToShow;
		dialogOpen = true;
	}
	let viewEntryDialog: ViewEntryDialog|undefined = $state();
</script>

<Dialog bind:open={dialogOpen} fullscreen class="not-prose">
	<Header>
		<Title>Team {teamNum}</Title>
	</Header>
	<Content>
		<DataTable class="w-full">
			<Head>
				<Row>
					<Cell>Auto</Cell>
					<Cell>Teleop</Cell>
					<Cell>Other Info</Cell>
				</Row>
			</Head>
			<Body>
				{#each items as item}
					<Row
						onclick={() => {
							viewEntryDialog?.open(item);
						}}
					>
						<Cell>{item.auto.length}</Cell>
						<Cell>{item.teleop.length}</Cell>
						<Cell>{item.otherInfo}</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</Content>
	<Actions>
		<Button action="done">
			<Label>Close</Label>
		</Button>
	</Actions>
	{#snippet over()}
		<ViewEntryDialog bind:this={viewEntryDialog} />
	{/snippet}
</Dialog>