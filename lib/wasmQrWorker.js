// @ts-nocheck
let initialized = false;
let koder;


// Listen for messages from JS main thread containing raw image data
self.addEventListener('message', async (event) => {
	if ('base' in event.data && !initialized) {
		let base = event.data.base;
		console.log(`Initializing with url base ${base}`);
		importScripts(`${base}/lib/zbar.js`);
		importScripts(`${base}/lib/koder-browser.js`);
		initialized = true;
		koder = await new Koder().initialize({ wasmDirectory: `${base}/lib` });
		return;
	}
	if (!initialized) return console.error('Non-initialization message retrieved without having been initialized!');
	if ('width' in event.data && 'height' in event.data) {
		this.width = event.data.width;
		this.height = event.data.height;
	}

	const { data } = event.data;
	if (!data) return;

	const t0 = new Date().getTime();
	const scanResult = koder.decode(data, this.width, this.height);
	const t1 = new Date().getTime();
	if (scanResult) {
		postMessage({
			data: scanResult.code,
			type: scanResult.type,
			ms: t1 - t0
		});
	} else {
		if (event.data.alwaysRespond) {
			postMessage({
				ms: t1 - t0
			});
		}
	}
});