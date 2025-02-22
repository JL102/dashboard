import { getContext } from "svelte";
import type { ButtonOnClickContext, SnackbarContext, TitleContext } from "./types";
import { db, type Match } from "./LocalDB";
import { readable } from "svelte/store";

export function getPageLayoutContexts() {
	const snackbar = getContext('snackbar') as SnackbarContext;
	const qrButtonClick = getContext('qrButtonClick') as ButtonOnClickContext;
	const uploadButtonClick = getContext('uploadButtonClick') as ButtonOnClickContext;
	const downloadButtonClick = getContext('downloadButtonClick') as ButtonOnClickContext;
	const title = getContext('title') as TitleContext;

	return { snackbar, qrButtonClick, uploadButtonClick, downloadButtonClick, title };
}

const tba_api_key = '1yI5jxYxfCLxibPrqLVBAe9kpX4e9nWNGTMGqtU00GUAfqsocqLnH78uL8ouiEhX';

/**
 * fetch data from TBA, respecting last-modified ETag
 * @param url url e.g. /events/2025/simple
 * @param force whether to ignore If-None-Match, i.e. force tba to give latest data
 * @returns false if not modified, json data otherwise
 */
export async function fetchTBA(url: string, force = false) {
	if (!url.startsWith('/')) url = '/' + url;
	const queryURL = `https://www.thebluealliance.com/api/v3${url}`;

	const headers: HeadersInit = {
		'X-TBA-Auth-Key': tba_api_key,
	}

	if (!force) {
		const etagResponse = await db.eTagResponses.where('url').equals(url).first();
		if (etagResponse) {
			headers['If-None-Match'] = etagResponse.etag;
		}
	}

	console.debug(`Requesting TBA @ ${queryURL}`);

	// Create a fetch with X-TBA-Auth-Key header and return JSON response
	const response = await fetch(queryURL, {
		headers
	});

	// if response was 304 Not Modified, don't attempt to get json
	if (response.status === 304) {
		console.debug('Not Modified; not attempting to read data')
		return false; // todo figure out better response
	}

	// Get ETag header of response
	const etag = response.headers.get('ETag');
	const json = response.json();

	// Save etag for later user
	if (etag) {
		await db.eTagResponses.put({
			etag,
			url,
		})
	}

	return json;
}

/**
 * Whether the device is currently connected to the internet. NOTE: deviceOnline is not a perfect indicator of whether
 * the device has a GOOD connection. It's entirely possible for deviceOnline to be true while they have such a poor
 * connection that it's impossible to load any pages or do any AJAX calls, so DON'T do any blocking AJAX/fetch calls
 * unless the user is clicking something that they are aware will do a call.
 * 
 * Example: Hitting 'done' on a scouting form will save the data locally and mark as completed, but if deviceOnline/
 * canAutoSync is true, it will additionally attempt to send the data to the server in the background. But it must be
 * done in a non-blocking way so that the user isn't stuck and confused why nothing is happening.
 */
export const deviceOnline = readable(
	'navigator' in globalThis && 'onLine' in navigator ? navigator.onLine : false,
	(set) => {
		if ('addEventListener' in globalThis) {
			addEventListener('online', (e) => {
				console.log('Online event', e);
				set(true);
			});
			addEventListener('offline', (e) => {
				console.log('Offline event', e);
				set(false);
			});
		} else
			console.warn(
				'Was unable to add an event listener for deviceOnline. If you see this warning while building/deploying sveltekit or in the nodejs console, everything should be ok, but if you see this in the browser console then the app will not be able to be reactive to the device going online/offline.'
			);
	}
);

export function matchToString(match: Match|undefined) {
	if (!match) return '';
	switch (match.comp_level) {
		case 'qm':
			return `Qualifying Match ${String(match.match_number).padStart(2, '0')}`;
		case 'qf':
			return `Quarterfinal ${match.set_number} Match ${match.match_number}`;
		case 'sf':
			return `Semifinal ${match.set_number} Match ${match.match_number}`;
		case 'f':
			return `Final ${match.set_number} Match ${match.match_number}`;
		default:
			return '';
	}
}