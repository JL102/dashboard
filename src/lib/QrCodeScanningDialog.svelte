<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import QrCodeScanner from './QrCodeScanner.svelte';
	import { getPageLayoutContexts } from './utils';

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
			<QrCodeScanner on:data={(e) => {
				snackbar.open(e.detail.text);
			}} enabled={isOpen} />
		{/if}
	</Content>
	<Actions>
		<Button action="done">
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>