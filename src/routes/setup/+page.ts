import { db } from "$lib/LocalDB";
import { base } from "$app/paths";
import { redirect } from "@sveltejs/kit";

export async function load() {
	let authenticated = await db.authenticated.toCollection().first();
	if (!authenticated) redirect(307, `${base}/login`);
	const selectedEvent = await db.current_event.toCollection().first();
	return {
		selectedEvent,
	}
}