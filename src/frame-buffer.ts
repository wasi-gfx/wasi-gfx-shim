import { Todo } from './common.js';
import { Context, AbstractBuffer } from './graphics-context';

export class Buffer {
	static fromGraphicsBuffer(buffer: AbstractBuffer): Buffer {
		throw new Todo;
	}

	get(): Uint8Array {
		throw new Todo;
	}

	set(val: Uint8Array): void {
		throw new Todo;
	}
}

export class Device {
	constructor() {
		throw new Todo;
	}

	connectGraphicsContext(context: Context): void {
		throw new Todo;
	}

	getContext(): Context {
		throw new Todo;
	}
}
