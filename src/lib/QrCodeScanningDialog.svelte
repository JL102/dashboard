<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import QrCodeScanner from './QrCodeScanner.svelte';
	import { getPageLayoutContexts } from './utils';
	import { parseQr2025 } from './stats';
	import { db } from './LocalDB';

	let isOpen = $state(false);
	
	$effect(() => {
		console.log('isOpen', isOpen)
	})
	
	let { onclose=(action: string) => {} }: { onclose: (action: string) => void } = $props();
	
	export function open() {
		isOpen = true;
	}

	function closeHandler(e: CustomEvent<{ action: string }>) {
		onclose(e.detail.action);
	}
	
	// let lastScanned = ''; // save last scanned data to prevent duplicate scans
	
	const { snackbar } = getPageLayoutContexts();
</script>

<Dialog
	bind:open={isOpen}
	fullscreen
	aria-labelledby="fullscreen-title"
	aria-describedby="fullscreen-content"
	onSMUIDialogClosed={closeHandler}
>
	<!-- <Header>
		<IconButton action="close" class="material-icons">close</IconButton>
	</Header> -->
	<Content id="fullscreen-content">
		{#if isOpen}
			<QrCodeScanner on:data={async (e) => {
				let data = e.detail.text;
				
				// // prevent duplicate scans
				// if (data === lastScanned) {
				// 	console.debug('duplicate scan');
				// 	return;
				// }
				// lastScanned = data;
				
				console.info(data);
				try {
					let csvParsed = parseQr2025(data);
					console.log('parsed', csvParsed);
					await db.transaction('rw', db.csv2025, async () => {
						await db.csv2025.put(csvParsed);
						snackbar.open(`Scanned ${csvParsed.eventkey} Match ${csvParsed.matchNum} Team ${csvParsed.teamNum}, from ${csvParsed.scouterInitials}`, 1000);
					});
				}
				catch (err) {
					console.error(err);
					snackbar.error(String(err));
				}
			}} enabled={true} />
		{/if}
	</Content>
	<Actions>
		<Button action="done">
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>