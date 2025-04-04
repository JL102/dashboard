export default function assert(condition: unknown, message?: string|Error): asserts condition {
	if (!condition) {
		if (message instanceof Error) {
			throw message;
		}
		throw new Error(message || 'Assertion failure');
	}
}