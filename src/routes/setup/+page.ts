import { db } from "$lib/LocalDB";

export async function load() {
	const selectedEvent = await db.current_event.toCollection().first();
	return {
		selectedEvent,
	}
}