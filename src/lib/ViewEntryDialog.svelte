<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import type { CsvLayout2025Parsed } from './stats';
	import Button, { Label } from '@smui/button';

	let isOpen = $state(false);

	let entry: CsvLayout2025Parsed | undefined = $state();

	export function open(entryToShow: CsvLayout2025Parsed) {
		entry = entryToShow;
		isOpen = true;
	}
</script>

<Dialog bind:open={isOpen} class="not-prose">
	{#if entry}
		<Header>
			<Title>{entry.eventkey} Match {entry.matchNum} Team {entry.teamNum}</Title>
		</Header>
		<Content class="not-prose">
			{#each Object.entries(entry).sort() as [key, value]}
				{#if Array.isArray(value)}
					<div>
						{key}:
						<ul class="indent-5">
							{#each value as item}
								<li>{JSON.stringify(item)}</li>
							{/each}
						</ul>
					</div>
				{:else}
					<p>{key}: <b>{value}</b></p>
				{/if}
			{/each}
		</Content>
		<Actions>
			<Button action="done">
				<Label>Close</Label>
			</Button>
		</Actions>
	{/if}
</Dialog>
