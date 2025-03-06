<script lang='ts'>
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { db } from "$lib/LocalDB";
	import { authenticated, getPageLayoutContexts } from "$lib/utils";
	import Button from "@smui/button";
	import Textfield from "@smui/textfield";

	let password = $state('');
	
	const { snackbar } = getPageLayoutContexts();
	
	async function onclick() {
		if (!password) return;
		if (password === `robotsdon'tquit1`) {
			await db.authenticated.put({
				authenticated: true
			});
			goto(base);
		}
		else {
			snackbar.error('Incorrect password.');
		}
	}
</script>

<section class="center m-auto md:max-w-3xl">
	<h2>Please authenticate to continue.</h2>
	<div class="not-prose grid md:grid-cols-2 gap-2 sm:grid-cols-1">
		<Textfield bind:value={password} class="w-full" input$class="w-full" label="Password" />
		<Button class="w-full" variant="raised" {onclick}>Submit</Button>
	</div>
</section>