<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { db } from '$lib/LocalDB';
	import SimpleSnackbar from '$lib/SimpleSnackbar.svelte';
	import type {
		ActionButtonsContext,
		ButtonOnClickContext,
		SnackbarContext,
		TitleContext
	} from '$lib/types';
	import { deviceOnline } from '$lib/utils';
	import { classMap } from '@smui/common/internal';
	import Drawer, { Content, Title as DTitle, Header, Scrim, Subtitle } from '@smui/drawer';
	import IconButton from '@smui/icon-button';
	import List, { Item, Text } from '@smui/list';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar';
	import { liveQuery } from 'dexie';
	import { onMount, setContext } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { writable } from 'svelte/store';
	import '../app.css';

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

	let actionButtons: ActionButtonsContext = writable([]);
	setContext('actionButtons', actionButtons);

	let disabledButtons = new SvelteSet<string>([]);
	$inspect(disabledButtons);

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

	let updateAvailable = $state(false);
	let updateInstalling = $state(false);
	let waitingWorker: ServiceWorker | null = null;

	async function attemptServiceWorkerRegistration() {
		console.debug('Attempting to register serviceworker');
		navigator.serviceWorker.addEventListener('message', (event) => {
			if (!event.data) return;
			// Only reload the page if we've marked an update as being available
			if (event.data.msg === 'UPDATE_DONE') {
				let newVersion = String(event.data.version);
				console.warn(`Update done! Version=${newVersion}`);
				updateInstalling = false;
				// Save the version of the newly installed service worker
				localStorage.setItem('serviceWorkerVersion', newVersion);
				if (!updateAvailable) return;
				sessionStorage.setItem('justUpdated', 'true'); // store a flag for a message to show once the page reloads
				location.reload();
			}
			if (event.data.msg === 'RETURN_VERSION') {
				let lastKnownVersion = localStorage.getItem('serviceWorkerVersion');
				let currentVersion = String(event.data.version);
				console.debug(
					`Received service worker version: ${currentVersion} - Last known worker version: ${lastKnownVersion}`
				);
				if (lastKnownVersion !== currentVersion) {
					console.info('Version mismatch found! Notifying user and saving version...');
					localStorage.setItem('serviceWorkerVersion', currentVersion);
					snackbar.open('PWA has been updated');
				}
			}
		});
		const registration = await navigator.serviceWorker.register(`${base}/service-worker.js`, {
			type: 'module'
		});

		if (registration.installing) {
			updateInstalling = true;
		}

		// If we have a currently active service worker AND one that's waiting for activation, then we can say that an update is available
		if (registration.waiting && registration.active) {
			waitingWorker = registration.waiting;
			updateAvailable = true;
		}

		if (registration.active && !registration.waiting && !registration.installing) {
			console.warn(
				'There is an active worker and none that are installing or waiting. Requesting current version...'
			);
			if (registration.active !== navigator.serviceWorker.controller)
				console.warn('navigator.serviceWorker.controller is not the same as registration.active!');
			registration.active.postMessage({ msg: 'GET_VERSION' });
		}

		registration.onupdatefound = () => {
			console.warn(
				`updatefound event firing! installing=${!!registration.installing}, waiting=${!!registration.waiting}, active=${!!registration.active}`
			);
			// Only show an update available if there's currently a service worker
			if (registration.installing && registration.active) {
				updateInstalling = true;
				let installingWorker = registration.installing;
				installingWorker.onstatechange = () => {
					if (installingWorker.state === 'installed') {
						console.warn('New worker is waiting to be activated!');
						updateAvailable = true;
						updateInstalling = false;
						waitingWorker = installingWorker;
					}
					if (installingWorker.state === 'activated') {
						updateInstalling = false;
					}
				};
			}
		};
		console.trace('Done with attemptServiceWorkerRegistration');
	}

	async function handleInstallButtonClick() {
		if (!waitingWorker) return snackbar.error('waitingWorker not defined!');
		// let result = await dialogContext.show()
		console.info('Posting SKIP_WAITING message to service worker!');
		waitingWorker.postMessage({ msg: 'SKIP_WAITING' });
	}

	onMount(async () => {
		if ('serviceWorker' in navigator) {
			if ($deviceOnline) {
				console.log('Device online; attempting to register serviceWorker');
				attemptServiceWorkerRegistration().catch((err) => console.error(err));
			} else {
				console.log('Device not online; Waiting for that to change');
				let unsub = deviceOnline.subscribe((online) => {
					if (online) {
						attemptServiceWorkerRegistration()
							.then(unsub)
							.catch((err) => console.error(err));
					}
				});
			}
		} else console.error('serviceWorker not found!');

		// show a snackbar if we just got an update
		if (sessionStorage.getItem('justUpdated') === 'true') {
			snackbar.open('PWA has been updated');
			sessionStorage.removeItem('justUpdated');
		}
	});
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
			{#if updateAvailable}
				<Wrapper class="header-tooltip-wrapper" rich>
					<IconButton class="material-icons" onclick={handleInstallButtonClick}
						>system_update</IconButton
					>
					<Tooltip surface$class="header-tooltip" xPos="start"
						>An update is available. Click to restart.</Tooltip
					>
				</Wrapper>
			{/if}
			{#if updateInstalling}
				<Wrapper class="header-tooltip-wrapper" rich>
					<IconButton class="material-icons hourglass">hourglass_empty</IconButton>
					<Tooltip surface$class="header-tooltip" xPos="start"
						>An update is downloading in the background.</Tooltip
					>
				</Wrapper>
			{/if}
			{#each $actionButtons as button}
				<Wrapper class="header-tooltip-wrapper" rich>
					<IconButton
						disabled={disabledButtons.has(button.icon)}
						onclick={async () => {
							disabledButtons.add(button.icon);
							await button.onclick();
							disabledButtons.delete(button.icon);
						}}
						class="material-icons"
					>
						{button.icon}
					</IconButton>
					{#if button.tooltip}
						<Tooltip surface$class="header-tooltip" xPos="start">{button.tooltip}</Tooltip>
					{/if}
				</Wrapper>
			{/each}
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
			<Item href={`${base}/setup`} activated={page.route.id === '/setup'}>
				<Text>Setup</Text>
			</Item>
			<Item href={`${base}/`} activated={page.route.id === '/'}>
				<Text>Laptop In Stands</Text>
			</Item>
			<Item href={`${base}/on-field`} activated={page.route.id === '/on-field'}>
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
	:global(.header-tooltip) {
		position: relative;
		left: -48px;
		width: calc(100% + 48px);
	}
	.title {
		line-height: 1.625rem;
	}
	.subtitle {
		font-size: 0.8rem;
		opacity: 0.7;
		line-height: 1.125rem;
	}
</style>
