<script lang="ts">
	import SimpleSnackbar from '$lib/SimpleSnackbar.svelte';
	import type { ButtonOnClickContext, SnackbarContext, TitleContext } from '$lib/types';
	import IconButton from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Drawer, {
		AppContent,
		Content,
		Header,
		Title as DTitle,
		Subtitle,
		Scrim
	} from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text } from '@smui/list';
	import { page } from '$app/state';
	import '../app.css';
	import { liveQuery } from 'dexie';
	import { db } from '$lib/LocalDB';
	import { classMap } from '@smui/common/internal';
	import { deviceOnline } from '$lib/utils';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let topAppBar: TopAppBar | null = $state(null);

	let snackbar: SimpleSnackbar;
	let snackbarContext: SnackbarContext = {
		open: (...args) => {
			if (!snackbar) throw new Error('Snackbar not defined');
			return snackbar.open(...args);
		},
		error: (...args) => {
			if (!snackbar) throw new Error('Snackbar not defined');
			return snackbar.error(...args);
		},
		close: (...args) => {
			if (!snackbar) throw new Error('Snackbar not defined');
			return snackbar.close(...args);
		}
	};
	
	afterNavigate(() => (drawerOpen = false));

	let qrButtonClick: ButtonOnClickContext = writable(undefined);
	setContext('qrButtonClick', qrButtonClick);

	let downloadButtonClick: ButtonOnClickContext = writable(undefined);
	setContext('downloadButtonClick', downloadButtonClick);

	let uploadButtonClick: ButtonOnClickContext = writable(undefined);
	setContext('uploadButtonClick', uploadButtonClick);

	let title: TitleContext = writable('');
	setContext('title', title);

	// get current event title
	let subtitle = $derived(
		liveQuery(async () => {
			let current = await db.current_event.toCollection().first();
			if (current) return current.name;
			return '';
		})
	);

	let transferInProgress = $state(false); // disable when running function, enable when done
	let syncButtonsDisabled = $derived(transferInProgress || !$deviceOnline);

	setContext('snackbar', snackbarContext);

	let drawerOpen = $state(false);
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<IconButton
				onclick={() => {
					drawerOpen = !drawerOpen;
				}}
				class="material-icons">menu</IconButton
			>
			<Title>
				<p class="title">{$title}</p>
				{#if $subtitle}
					<p class="subtitle">
						{$subtitle}
					</p>
				{/if}
			</Title>
		</Section>
		<Section align="end" toolbar>
			{#if $qrButtonClick}
				<IconButton onclick={$qrButtonClick} class="material-icons">qr_code</IconButton>
			{/if}
			{#if $uploadButtonClick}
				<IconButton
					onclick={async () => {
						transferInProgress = true;
						await $uploadButtonClick();
						transferInProgress = false;
					}}
					disabled={syncButtonsDisabled}
					class={classMap({
						'material-icons': true,
						'opacity-50': syncButtonsDisabled
					})}
					>upload
				</IconButton>
			{/if}
			{#if $downloadButtonClick}
				<IconButton
					onclick={async () => {
						transferInProgress = true;
						await $downloadButtonClick();
						transferInProgress = false;
					}}
					disabled={syncButtonsDisabled}
					class={classMap({
						'material-icons': true,
						'opacity-50': syncButtonsDisabled
					})}
				>
					download
				</IconButton>
			{/if}
		</Section>
	</Row>
</TopAppBar>

<SimpleSnackbar bind:this={snackbar} />

<Drawer variant="modal" bind:open={drawerOpen} fixed={true}>
	<!-- <Drawer variant="dismissible" bind:open={drawerOpen}> -->
	<Header>
		<DTitle>AEMBOT Dashboard</DTitle>
		<Subtitle>Select a page</Subtitle>
	</Header>
	<Content>
		<List>
			<Item href="/setup" activated={page.route.id === '/setup'}>
				<Text>Setup</Text>
			</Item>
			<Item href="/" activated={page.route.id === '/'}>
				<Text>Laptop In Stands</Text>
			</Item>
			<Item href="/on-field" activated={page.route.id === '/on-field'}>
				<Text>Phone On Field</Text>
			</Item>
		</List>
	</Content>
</Drawer>

<Scrim />

<AutoAdjust {topAppBar} class="main-content prose prose-invert prose-slate max-w-none">
	<div class="pt-2">
		{@render children()}
	</div>
</AutoAdjust>

<style>
	.title {
		line-height: 1.625rem;
	}
	.subtitle {
		font-size: 0.8rem;
		opacity: 0.7;
		line-height: 1.125rem;
	}
</style>
