<script lang="ts">
	import { db, type Event } from '$lib/LocalDB';
	import { getPageLayoutContexts, fetchTBA } from '$lib/utils';
	// import Autocomplete from '@smui-extra/autocomplete';
	import Select, { Option } from '@smui/select';
	import Button from '@smui/button';
	import { liveQuery } from 'dexie';

	const { title } = getPageLayoutContexts();
	
	const { data } = $props();

	const year = 2024; //

	// const currentEvent = $derived(liveQuery(() => db.current_event.toCollection().first()));

	async function downloadEvents() {
		const tbaEvents = await fetchTBA(`/events/${year}/simple`);
		if (Array.isArray(tbaEvents)) {
			db.events.bulkPut(tbaEvents);
		}
	}

	// let selectedEvent: Event | undefined = $state(data.selectedEvent);
	let selectedEventKey: string | undefined = $state(data.selectedEvent?.key);
	
	async function downloadEventMatches() {
		if (!selectedEventKey) return;
		const tbaMatches = await fetchTBA(`/event/${selectedEventKey}/matches/simple`);
		if (Array.isArray(tbaMatches)) {
			db.matches.bulkPut(tbaMatches);
		}
	}

	const events = $derived(
		liveQuery(async () => {
			console.time('events load');
			let events = await db.events.where({ year }).toArray();

			let ret = events.sort((a, b) => a.name.localeCompare(b.name));
			console.timeEnd('events load')
			return ret;
		})
	);
	
	const matchesCount = $derived(
		liveQuery(async () => {
			if (!selectedEventKey) return 0;
			return db.matches.where('event_key').equals(selectedEventKey).count()
		})
	);
	
	let selectedEvent = $derived($events?.find(event => event.key === selectedEventKey));
	
	$effect(() => {
		if (selectedEvent) {
			db.current_event.clear()
			.then(() => {
				console.log('Setting selected event', selectedEvent)
				if (selectedEvent) db.current_event.put($state.snapshot(selectedEvent));
			})
		}
	})

	$inspect(selectedEvent, selectedEventKey);

	title.set('Setup');
</script>

<section class="center not-prose m-auto grid grid-cols-2 gap-2 md:max-w-3xl">
	{#if $events}
	<Select class="w-full" anchor$class='w-full' bind:value={selectedEventKey}>
		<Option value={undefined}>Select event</Option>
		{#each $events as event}
			<Option value={event.key}>{event.name}</Option>
		{/each}
	</Select>
	{/if}
	<!-- <Autocomplete
	bind:value={selectedEvent} 
	getOptionLabel={(event: Event) => event?.name || ''}
	options={$events}
	label='Event'
	></Autocomplete> -->

	<Button class="w-max" variant="raised" onclick={downloadEvents}>Download Events for {year}</Button>
	{#if selectedEvent}
		<div>
			{$matchesCount} matches downloaded for event {selectedEvent.name}
		</div>
		<Button class="w-max" variant="raised" onclick={downloadEventMatches}>Download Matches for {selectedEvent.name}</Button>
	{/if}
</section>
