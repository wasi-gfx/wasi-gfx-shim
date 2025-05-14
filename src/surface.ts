import { Context, DisplayApi } from './graphics-context';
import { Pollable } from './poll.js';
import { Todo } from './common.js';

export interface CreateDesc {
	height?: number,
	width?: number,
}
export interface ResizeEvent {
	height: number,
	width: number,
}
export interface FrameEvent {
	nothing: boolean,
}
export interface PointerEvent {
	x: number,
	y: number,
}

export type Key = 'backquote' | 'backslash' | 'bracket-left' | 'bracket-right' | 'comma' | 'digit0' | 'digit1' | 'digit2' | 'digit3' | 'digit4' | 'digit5' | 'digit6' | 'digit7' | 'digit8' | 'digit9' | 'equal' | 'intl-backslash' | 'intl-ro' | 'intl-yen' | 'key-a' | 'key-b' | 'key-c' | 'key-d' | 'key-e' | 'key-f' | 'key-g' | 'key-h' | 'key-i' | 'key-j' | 'key-k' | 'key-l' | 'key-m' | 'key-n' | 'key-o' | 'key-p' | 'key-q' | 'key-r' | 'key-s' | 'key-t' | 'key-u' | 'key-v' | 'key-w' | 'key-x' | 'key-y' | 'key-z' | 'minus' | 'period' | 'quote' | 'semicolon' | 'slash' | 'alt-left' | 'alt-right' | 'backspace' | 'caps-lock' | 'context-menu' | 'control-left' | 'control-right' | 'enter' | 'meta-left' | 'meta-right' | 'shift-left' | 'shift-right' | 'space' | 'tab' | 'convert' | 'kana-mode' | 'lang1' | 'lang2' | 'lang3' | 'lang4' | 'lang5' | 'non-convert' | 'delete' | 'end' | 'help' | 'home' | 'insert' | 'page-down' | 'page-up' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'num-lock' | 'numpad0' | 'numpad1' | 'numpad2' | 'numpad3' | 'numpad4' | 'numpad5' | 'numpad6' | 'numpad7' | 'numpad8' | 'numpad9' | 'numpad-add' | 'numpad-backspace' | 'numpad-clear' | 'numpad-clear-entry' | 'numpad-comma' | 'numpad-decimal' | 'numpad-divide' | 'numpad-enter' | 'numpad-equal' | 'numpad-hash' | 'numpad-memory-add' | 'numpad-memory-clear' | 'numpad-memory-recall' | 'numpad-memory-store' | 'numpad-memory-subtract' | 'numpad-multiply' | 'numpad-paren-left' | 'numpad-paren-right' | 'numpad-star' | 'numpad-subtract' | 'escape' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'fn' | 'fn-lock' | 'print-screen' | 'scroll-lock' | 'pause' | 'browser-back' | 'browser-favorites' | 'browser-forward' | 'browser-home' | 'browser-refresh' | 'browser-search' | 'browser-stop' | 'eject' | 'launch-app1' | 'launch-app2' | 'launch-mail' | 'media-play-pause' | 'media-select' | 'media-stop' | 'media-track-next' | 'media-track-previous' | 'power' | 'sleep' | 'audio-volume-down' | 'audio-volume-mute' | 'audio-volume-up' | 'wake-up' | 'hyper' | 'super' | 'turbo' | 'abort' | 'resume' | 'suspend' | 'again' | 'copy' | 'cut' | 'find' | 'open' | 'paste' | 'props' | 'select' | 'undo' | 'hiragana' | 'katakana';
export interface KeyEvent {
	key?: Key,
	text?: string,
	altKey: boolean,
	ctrlKey: boolean,
	metaKey: boolean,
	shiftKey: boolean,
}

export class Surface implements DisplayApi {
	canvas: HTMLCanvasElement;
	pointerUpEvent: PointerEvent | undefined;
	pointerDownEvent: PointerEvent | undefined;
	pointerMoveEvent: PointerEvent | undefined;
	keyUpEvent: KeyEvent | undefined;
	keyDownEvent: KeyEvent | undefined;
	resizeEvent: ResizeEvent | undefined;
	frameEvent: FrameEvent | undefined;

	constructor(desc: CreateDesc) {
		this.canvas = document.createElement('canvas');
		this.canvas.style.width = '100svw';
		this.canvas.style.height = '100svh';
		Promise.resolve().then(() => {
			const styles = getComputedStyle(this.canvas);
			this.canvas.width = parseInt(styles.getPropertyValue('width'));
			this.canvas.height = parseInt(styles.getPropertyValue('height'));
		});
		document.body.appendChild(this.canvas);
	}

	connectGraphicsContext(context: Context): void {
		context.__connectDisplayApi(this);
	}

	subscribeResize(): Pollable {
		// TODO: not sure this is correct
		const pollable = new Pollable();
		new ResizeObserver(entries => {
			for (const entry of entries) {
				if (entry.contentBoxSize) {
					pollable.resolve();
				}
			}
		}).observe(this.canvas);
		return pollable;
	}

	getResize(): ResizeEvent | undefined {
		const event = this.resizeEvent;
		this.resizeEvent = undefined;
		return event;
	}

	subscribeFrame(): Pollable {
		const pollable = new Pollable();
		const onFrame = () => {
			this.frameEvent = {
				nothing: false,
			};
			pollable.resolve();
			requestAnimationFrame(onFrame);
		};
		requestAnimationFrame(onFrame);
		return pollable;
	}

	getFrame(): FrameEvent | undefined {
		const event = this.frameEvent;
		this.frameEvent = undefined;
		return event;
	}

	subscribePointerUp(): Pollable {
		const pollable = new Pollable();
		this.canvas.addEventListener('pointerup', event => {
			this.pointerUpEvent = {
				x: event.clientX,
				y: event.clientY,
			};
			pollable.resolve();
		});
		return pollable;
	}

	getPointerUp(): PointerEvent | undefined {
		const event = this.pointerUpEvent;
		this.pointerUpEvent = undefined;
		return event;
	}

	subscribePointerDown(): Pollable {
		const pollable = new Pollable();
		this.canvas.addEventListener('pointerdown', event => {
			this.pointerDownEvent = {
				x: event.clientX,
				y: event.clientY,
			};
			pollable.resolve();
		});
		return pollable;
	}

	getPointerDown(): PointerEvent | undefined {
		const event = this.pointerDownEvent;
		this.pointerDownEvent = undefined;
		return event;
	}

	subscribePointerMove(): Pollable {
		const pollable = new Pollable();
		this.canvas.addEventListener('pointermove', event => {
			this.pointerMoveEvent = {
				x: event.clientX,
				y: event.clientY,
			};
			pollable.resolve();
		});
		return pollable;
	}

	getPointerMove(): PointerEvent | undefined {
		const event = this.pointerMoveEvent;
		this.pointerMoveEvent = undefined;
		return event;
	}

	subscribeKeyUp(): Pollable {
		const pollable = new Pollable();
		this.canvas.addEventListener('keyup', event => {
			throw new Todo;
		});
		return pollable;
	}

	getKeyUp(): KeyEvent | undefined {
		throw new Todo;
	}

	subscribeKeyDown(): Pollable {
		const pollable = new Pollable();
		this.canvas.addEventListener('keydown', event => {
			throw new Todo;
		});
		return pollable;
	}

	getKeyDown(): KeyEvent | undefined {
		throw new Todo;
	}

	handlePointerUp(event: PointerEvent): void {
		throw new Todo;
	}

	handlePointerDown(event: PointerEvent): void {
		throw new Todo;
	}

	handlePointerMove(event: PointerEvent): void {
		throw new Todo;
	}

	handleKeyUp(event: KeyEvent): void {
		throw new Todo;
	}

	handleKeyDown(event: KeyEvent): void {
		throw new Todo;
	}

	getContext(contextId: 'bitmaprenderer', options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
	getContext(contextId: 'webgpu'): GPUCanvasContext | null;
	getContext(contextId: 'bitmaprenderer' | 'webgpu', options?: unknown): ImageBitmapRenderingContext | GPUCanvasContext | null {
		return this.canvas.getContext(contextId, options) as ImageBitmapRenderingContext | GPUCanvasContext | null;
	}

	height(): number {
		throw new Todo;
	}

	width(): number {
		throw new Todo;
	}

	requestSetSize(newHeight: number | undefined, newWidth: number | undefined): void {
		throw new Todo;
	}
}
