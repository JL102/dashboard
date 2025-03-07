<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { type Match } from './LocalDB';
	import { matchToString } from './utils';
	import type { Readable } from 'svelte/store';
	import type { Observable } from 'dexie';

	let {
		blue1 = $bindable(),
		blue2 = $bindable(),
		blue3 = $bindable(),
		red1 = $bindable(),
		red2 = $bindable(),
		red3 = $bindable(),
		teamList,
		matchList,
	}: {
		blue1: number|undefined,
		blue2: number|undefined,
		blue3: number|undefined,
		red1: number|undefined,
		red2: number|undefined,
		red3: number|undefined,
		teamList: number[],
		matchList: Observable<Match[]|undefined>,
	} = $props();
	
	let matchListState: Match[]|undefined = $state();
	matchList.subscribe(value => {
		matchListState = value;
	})
	let selectedMatch: Match|undefined = $state();
	
	$effect(() => {
		if (selectedMatch && teamList) {
			let [blue1Key, blue2Key, blue3Key] = selectedMatch.alliances.blue.team_keys;
			let [red1Key, red2Key, red3Key] = selectedMatch.alliances.red.team_keys;
			blue1 = parseInt(blue1Key.substring(3));
			blue2 = parseInt(blue2Key.substring(3));
			blue3 = parseInt(blue3Key.substring(3));
			red1 = parseInt(red1Key.substring(3));
			red2 = parseInt(red2Key.substring(3));
			red3 = parseInt(red3Key.substring(3));
		}
		else {
			blue1 = undefined;
			blue2 = undefined;
			blue3 = undefined;
			red1 = undefined;
			red2 = undefined;
			red3 = undefined;
		}
	})

</script>

<div class="not-prose grid grid-cols-1 gap-4 m-2">
	<Autocomplete
		class="not-prose"
		style="width: 100%;"
		textfield$style="width: 100%;"
		options={matchListState}
		getOptionLabel={matchToString}
		label='Pick a match'
		bind:value={selectedMatch}
	/>
</div>
