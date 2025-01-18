import { getContext } from "svelte";
import type { SnackbarContext } from "./types";

export function getPageLayoutContexts() {
	const snackbar = getContext('snackbar') as SnackbarContext;

	return { snackbar, };
}