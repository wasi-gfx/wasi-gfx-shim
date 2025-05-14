import { Todo } from "./common.js";

export class AbstractBuffer {
	buffer: GPUTexture;
	constructor(buffer: GPUTexture) {
		this.buffer = buffer;
	}
}

export interface DrawApi {
	displayApiReady(displayApi: DisplayApi): void;
	getCurrentBuffer(): AbstractBuffer;
}

export interface DisplayApi {
	getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
	getContext(contextId: "webgpu"): GPUCanvasContext | null;
	height(): number;
	width(): number;
	requestSetSize(width: number | undefined, height: number | undefined): void;
}


export class Context {
	displayApi: DisplayApi | undefined;
	drawApi: DrawApi | undefined;

	getCurrentBuffer(): AbstractBuffer {
		if (!this.displayApi || !this.drawApi)
			throw new Error("Graphics context not fully connected");
		return this.drawApi.getCurrentBuffer();
	}

	present(): void {
		// noop on web
	}

	setCurrentBuffer(buffer: AbstractBuffer): void {
		throw new Todo;
	}

	__connectDisplayApi(displayApi: DisplayApi) {
		this.displayApi = displayApi;
		if (this.drawApi) {
			this.drawApi.displayApiReady(displayApi);
		}
	}

	__connectDrawApi(drawApi: DrawApi) {
		this.drawApi = drawApi;
		if (this.displayApi) {
			this.drawApi.displayApiReady(this.displayApi);
		}
	}
}
