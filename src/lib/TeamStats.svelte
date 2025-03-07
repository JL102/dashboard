<script lang="ts">
	import Card from "@smui/card";
	import { avgStat, getClimbCapability2025, getAvgMissedTotal2025, getMinNonZeroCoral2025, getPreferredPickupMethod2025, maxStat, modeStat, orStat, type CsvLayout2025Parsed, getClimbSuccessRate2025, getScoreCapability2025 } from "./stats";
	import { max } from "mathjs";

	let { teamNum, data, spot }: { teamNum: number|undefined, data: CsvLayout2025Parsed[], spot: string } = $props();
	
</script>

<Card class='p-2 flex'>
	<h1>{spot}: {teamNum}</h1>
	{#if teamNum && data.length > 0}
		<ul>
			<li>Avg algae scored: <b>{avgStat(data, 'algaeScoredAuto') + avgStat(data, 'algaeScoredTeleop')}</b> total, <b>{avgStat(data, 'algaeScoredAuto')}</b> auto</li>
			<li>Avg coral scored: <b>{avgStat(data, 'coralScoredAuto') + avgStat(data, 'algaeScoredTeleop')}</b> total, <b>{avgStat(data, 'coralScoredAuto')}</b> auto</li>
			<li> Can score in: <b>{getScoreCapability2025(data)}</b> </li>
			<li> Max scored in a match: <b>{maxStat(data, 'totalScored')}</b> </li>
			<li> Smallest # coral: <b>{getMinNonZeroCoral2025(data)}</b> </li>
			<li> Avg. game pieces missed: <b>{getAvgMissedTotal2025(data)}</b> </li>
			<li> Can climb... <b>{getClimbCapability2025(data)}</b> </li>
			<li> Climb success rate: <b>{getClimbSuccessRate2025(data)}</b> </li>
			<!-- <li>Avg cycle time: {avgStat(data, 'avgCycleTime')}</li> -->
			<!-- <li>Preferred pickup method: {getPreferredPickupMethod2025(data)}</li> -->
		</ul>
		<pre>{data.length} items</pre>
	{:else}
		<ul class="grow">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<pre>&nbsp;</pre>
	{/if}
</Card>