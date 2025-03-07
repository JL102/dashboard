<script lang="ts">
	import Card from "@smui/card";
	import { avgStat, getClimbCapability2025, getAvgMissedTotal2025, getMinNonZeroCoral2025, getPreferredPickupMethod2025, maxStat, modeStat, orStat, type CsvLayout2025Parsed, getClimbSuccessRate2025 } from "./stats";
	import { max } from "mathjs";

	let { teamNum, data, spot }: { teamNum: number|undefined, data: CsvLayout2025Parsed[], spot: string } = $props();
	
</script>

<Card class='p-2 flex'>
	<h1>{spot}: {teamNum}</h1>
	{#if teamNum && data.length > 0}
		<ul>
			<li>Avg algae scored: {avgStat(data, 'algaeScoredAuto') + avgStat(data, 'algaeScoredTeleop')} total, {avgStat(data, 'algaeScoredAuto')} auto</li>
			<li>Avg coral scored: {avgStat(data, 'coralScoredAuto') + avgStat(data, 'algaeScoredTeleop')} total, {avgStat(data, 'coralScoredAuto')} auto</li>
			<li>
				Can score... L1: {orStat(data, 'canScoreInL1')}, L2: {orStat(data, 'canScoreInL2')}, L3: {orStat(data, 'canScoreInL3')}
			</li>
			<li>
				Max scored in a match: {maxStat(data, 'totalScored')}
			</li>
			<li>
				Smallest non-zero # coral: {getMinNonZeroCoral2025(data)}
			</li>
			<li>
				Avg. game pieces missed: {getAvgMissedTotal2025(data)}
			</li>
			<li>
				Can climb... {getClimbCapability2025(data)}
			</li>
			<li>
				Climb success rate: {getClimbSuccessRate2025(data)}
			</li>
			<!-- <li>Avg cycle time: {avgStat(data, 'avgCycleTime')}</li> -->
			<!-- <li>Preferred pickup method: {getPreferredPickupMethod2025(data)}</li> -->
		</ul>
		<pre>{data.length} items</pre>
	{:else}
		<ul class="grow">
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<pre>&nbsp;</pre>
	{/if}
</Card>