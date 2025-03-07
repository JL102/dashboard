import { base } from "$app/paths";
import { db } from "$lib/LocalDB";
import { redirect } from "@sveltejs/kit";

export async function load() {
	let authenticated = await db.authenticated.toCollection().first();
	if (!authenticated) redirect(307, `${base}/login`);
	
	let event = await db.current_event.toCollection().first();
	if (!event) redirect(307, `${base}/setup`);
	return {
		event
	};
}