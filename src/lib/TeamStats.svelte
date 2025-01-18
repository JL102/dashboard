<script lang="ts">
	import Card from "@smui/card";
	import { avgStat, getPreferredPickupMethod2024, modeStat, type CsvLayout2024Parsed } from "./stats";

	let { teamNum, data, spot }: { teamNum: number|undefined, data: CsvLayout2024Parsed[], spot: string } = $props();
	
</script>

<Card class='p-2'>
	<h1>{spot}: {teamNum}</h1>
	<ul>
		<li>Avg cycle time: {avgStat(data, 'avgCycleTime')}</li>
		<li>Preferred pickup method: {getPreferredPickupMethod2024(data)}</li>
	</ul>
	<pre>{data.length} items</pre>
</Card>