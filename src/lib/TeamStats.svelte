<script lang="ts">
	import Card from "@smui/card";
	import { avgStat, getPreferredPickupMethod2025, modeStat, type CsvLayout2025Parsed } from "./stats";

	let { teamNum, data, spot }: { teamNum: number|undefined, data: CsvLayout2025Parsed[], spot: string } = $props();
	
</script>

<Card class='p-2'>
	<h1>{spot}: {teamNum}</h1>
	<ul>
		<!-- <li>Avg cycle time: {avgStat(data, 'avgCycleTime')}</li> -->
		<li>Preferred pickup method: {getPreferredPickupMethod2025(data)}</li>
	</ul>
	<pre>{data.length} items</pre>
</Card>