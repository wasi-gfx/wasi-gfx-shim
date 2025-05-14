export class Pollable {
	promiseResolver: (() => void) | undefined;
	preResolvedCount = 0;

	resolve() {
		if (this.promiseResolver) {
			this.promiseResolver();
			this.promiseResolver = undefined;
		} else {
			this.preResolvedCount++;
		}
	}

	ready() {
		return false;
	}

	async block() {
		if (this.preResolvedCount > 0) {
			this.preResolvedCount--;
			await Promise.resolve();
		} else {
			await new Promise(res => {
				this.promiseResolver = res as (() => void);
			});
		}
	}
}

// @ts-ignore
window.Pollable = Pollable;

export const poll = {
	poll: async (inList: Pollable[]) => {
		let finished: number[] = [];
		await Promise.race(inList.map((pollable, i) => pollable.block().finally(() => finished.push(i))));
		return new Uint32Array(finished);
	},

	Pollable,
};
