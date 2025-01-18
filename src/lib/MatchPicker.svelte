<script lang="ts">
	import Textfield from '@smui/textfield';
	import Autocomplete from '@smui-extra/autocomplete';
	
	let {
		blue1 = $bindable(),
		blue2 = $bindable(),
		blue3 = $bindable(),
		red1 = $bindable(),
		red2 = $bindable(),
		red3 = $bindable(),
		teamList
	} = $props();
</script>

<div class='grid grid-cols-1 md:grid-cols-3 gap-4 not-prose'>
	<Autocomplete
		class='w-max'
		textfield$class='w-max'
		bind:value={blue1}
		label='Blue 1'
		options={teamList}
	/>
	<Autocomplete
		class='w-max'
		textfield$class='w-max'
		bind:value={blue2}
		label='Blue 2'
		options={teamList}
	/>
	<Autocomplete
		class='w-max'
		textfield$class='w-max'
		bind:value={blue3}
		label='Blue 3'
		options={teamList}
	/>
	<Autocomplete
		class='w-max'
		textfield$class='w-max'
		bind:value={red1}
		label='Red 1'
		options={teamList}
	/>
	<Autocomplete
		class='w-max'
		textfield$class='w-max'
		bind:value={red2}
		label='Red 2'
		options={teamList}
	/>
	<Autocomplete
		class='w-max'
		textfield$class='w-max'
		bind:value={red3}
		label='Red 3'
		options={teamList}
	/>
</div>