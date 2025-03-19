import type { Writable } from 'svelte/store';
import type SimpleSnackbar from './SimpleSnackbar.svelte';
import type Button from '@smui/button';

export type SnackbarContext = {
	open: (...args: Parameters<SimpleSnackbar['open']>) => ReturnType<SimpleSnackbar['open']>,
	error: (...args: Parameters<SimpleSnackbar['error']>) => ReturnType<SimpleSnackbar['error']>,
	close: (...args: Parameters<SimpleSnackbar['close']>) => ReturnType<SimpleSnackbar['close']>,
}

export type ButtonOnClickContext = Writable<(() => void) | undefined>;
export type ActionButtonsContext = Writable<Array<{
	icon: string;
	onclick: () => any;
	tooltip?: string;
}>>;
export type TitleContext = Writable<string>;