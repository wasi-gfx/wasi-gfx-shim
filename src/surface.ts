import { Context, DisplayApi } from './graphics-context';
import { Pollable } from './poll.js';
import { Todo } from './common.js';

function keyWebToWasi(key: string): Key | undefined {
	switch (key) {
		case "Backquote":
			return "backquote";
		case "Backslash":
			return "backslash";
		case "BracketLeft":
			return "bracket-left";
		case "BracketRight":
			return "bracket-right";
		case "Comma":
			return "comma";
		case "Digit0":
			return "digit0";
		case "Digit1":
			return "digit1";
		case "Digit2":
			return "digit2";
		case "Digit3":
			return "digit3";
		case "Digit4":
			return "digit4";
		case "Digit5":
			return "digit5";
		case "Digit6":
			return "digit6";
		case "Digit7":
			return "digit7";
		case "Digit8":
			return "digit8";
		case "Digit9":
			return "digit9";
		case "Equal":
			return "equal";
		case "IntlBackslash":
			return "intl-backslash";
		case "IntlRo":
			return "intl-ro";
		case "IntlYen":
			return "intl-yen";
		case "KeyA":
			return "key-a";
		case "KeyB":
			return "key-b";
		case "KeyC":
			return "key-c";
		case "KeyD":
			return "key-d";
		case "KeyE":
			return "key-e";
		case "KeyF":
			return "key-f";
		case "KeyG":
			return "key-g";
		case "KeyH":
			return "key-h";
		case "KeyI":
			return "key-i";
		case "KeyJ":
			return "key-j";
		case "KeyK":
			return "key-k";
		case "KeyL":
			return "key-l";
		case "KeyM":
			return "key-m";
		case "KeyN":
			return "key-n";
		case "KeyO":
			return "key-o";
		case "KeyP":
			return "key-p";
		case "KeyQ":
			return "key-q";
		case "KeyR":
			return "key-r";
		case "KeyS":
			return "key-s";
		case "KeyT":
			return "key-t";
		case "KeyU":
			return "key-u";
		case "KeyV":
			return "key-v";
		case "KeyW":
			return "key-w";
		case "KeyX":
			return "key-x";
		case "KeyY":
			return "key-y";
		case "KeyZ":
			return "key-z";
		case "Minus":
			return "minus";
		case "Period":
			return "period";
		case "Quote":
			return "quote";
		case "Semicolon":
			return "semicolon";
		case "Slash":
			return "slash";
		case "AltLeft":
			return "alt-left";
		case "AltRight":
			return "alt-right";
		case "Backspace":
			return "backspace";
		case "CapsLock":
			return "caps-lock";
		case "ContextMenu":
			return "context-menu";
		case "ControlLeft":
			return "control-left";
		case "ControlRight":
			return "control-right";
		case "Enter":
			return "enter";
		case "MetaLeft":
			return "meta-left";
		case "MetaRight":
			return "meta-right";
		case "ShiftLeft":
			return "shift-left";
		case "ShiftRight":
			return "shift-right";
		case "Space":
			return "space";
		case "Tab":
			return "tab";
		case "Convert":
			return "convert";
		case "KanaMode":
			return "kana-mode";
		case "Lang1":
			return "lang1";
		case "Lang2":
			return "lang2";
		case "Lang3":
			return "lang3";
		case "Lang4":
			return "lang4";
		case "Lang5":
			return "lang5";
		case "NonConvert":
			return "non-convert";
		case "Delete":
			return "delete";
		case "End":
			return "end";
		case "Help":
			return "help";
		case "Home":
			return "home";
		case "Insert":
			return "insert";
		case "PageDown":
			return "page-down";
		case "PageUp":
			return "page-up";
		case "ArrowDown":
			return "arrow-down";
		case "ArrowLeft":
			return "arrow-left";
		case "ArrowRight":
			return "arrow-right";
		case "ArrowUp":
			return "arrow-up";
		case "NumLock":
			return "num-lock";
		case "Numpad0":
			return "numpad0";
		case "Numpad1":
			return "numpad1";
		case "Numpad2":
			return "numpad2";
		case "Numpad3":
			return "numpad3";
		case "Numpad4":
			return "numpad4";
		case "Numpad5":
			return "numpad5";
		case "Numpad6":
			return "numpad6";
		case "Numpad7":
			return "numpad7";
		case "Numpad8":
			return "numpad8";
		case "Numpad9":
			return "numpad9";
		case "NumpadAdd":
			return "numpad-add";
		case "NumpadBackspace":
			return "numpad-backspace";
		case "NumpadClear":
			return "numpad-clear";
		case "NumpadClearEntry":
			return "numpad-clear-entry";
		case "NumpadComma":
			return "numpad-comma";
		case "NumpadDecimal":
			return "numpad-decimal";
		case "NumpadDivide":
			return "numpad-divide";
		case "NumpadEnter":
			return "numpad-enter";
		case "NumpadEqual":
			return "numpad-equal";
		case "NumpadHash":
			return "numpad-hash";
		case "NumpadMemoryAdd":
			return "numpad-memory-add";
		case "NumpadMemoryClear":
			return "numpad-memory-clear";
		case "NumpadMemoryRecall":
			return "numpad-memory-recall";
		case "NumpadMemoryStore":
			return "numpad-memory-store";
		case "NumpadMemorySubtract":
			return "numpad-memory-subtract";
		case "NumpadMultiply":
			return "numpad-multiply";
		case "NumpadParenLeft":
			return "numpad-paren-left";
		case "NumpadParenRight":
			return "numpad-paren-right";
		case "NumpadStar":
			return "numpad-star";
		case "Escape":
			return "escape";
		case "F1":
			return "f1";
		case "F2":
			return "f2";
		case "F3":
			return "f3";
		case "F4":
			return "f4";
		case "F5":
			return "f5";
		case "F6":
			return "f6";
		case "F7":
			return "f7";
		case "F8":
			return "f8";
		case "F9":
			return "f9";
		case "F10":
			return "f10";
		case "F11":
			return "f11";
		case "F12":
			return "f12";
		case "Fn":
			return "fn";
		case "FnLock":
			return "fn-lock";
		case "PrintScreen":
			return "print-screen";
		case "ScrollLock":
			return "scroll-lock";
		case "Pause":
			return "pause";
		case "BrowserBack":
			return "browser-back";
		case "BrowserFavorites":
			return "browser-favorites";
		case "BrowserForward":
			return "browser-forward";
		case "BrowserHome":
			return "browser-home";
		case "BrowserRefresh":
			return "browser-refresh";
		case "BrowserSearch":
			return "browser-search";
		case "BrowserStop":
			return "browser-stop";
		case "Eject":
			return "eject";
		case "LaunchApp1":
			return "launch-app1";
		case "LaunchApp2":
			return "launch-app2";
		case "LaunchMail":
			return "launch-mail";
		case "MediaPlayPause":
			return "media-play-pause";
		case "MediaSelect":
			return "media-select";
		case "MediaStop":
			return "media-stop";
		case "MediaTrackNext":
			return "media-track-next";
		case "MediaTrackPrevious":
			return "media-track-previous";
		case "Power":
			return "power";
		case "Sleep":
			return "sleep";
		case "AudioVolumeDown":
			return "audio-volume-down";
		case "AudioVolumeMute":
			return "audio-volume-mute";
		case "AudioVolumeUp":
			return "audio-volume-up";
		case "WakeUp":
			return "wake-up";
		case "Hyper":
			return "hyper";
		case "Super":
			return "super";
		case "Turbo":
			return "turbo";
		case "Abort":
			return "abort";
		case "Resume":
			return "resume";
		case "Suspend":
			return "suspend";
		case "Again":
			return "again";
		case "Copy":
			return "copy";
		case "Cut":
			return "cut";
		case "Find":
			return "find";
		case "Open":
			return "open";
		case "Paste":
			return "paste";
		case "Props":
			return "props";
		case "Select":
			return "select";
		case "Undo":
			return "undo";
		case "Hiragana":
			return "hiragana";
		case "Katakana":
			return "katakana";
		case "Unidentified":
		default:
			return undefined;
	}
}

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
		this.canvas.tabIndex = 0;
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
			this.resizeEvent = {
				width: entries[0]!.contentBoxSize[0]!.inlineSize,
				height: entries[0]!.contentBoxSize[0]!.blockSize,
			};
			pollable.resolve();
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
			this.keyUpEvent = {
				key: keyWebToWasi(event.key),
				text: event.key,
				altKey: event.altKey,
				ctrlKey: event.ctrlKey,
				metaKey: event.metaKey,
				shiftKey: event.shiftKey,
			};
			pollable.resolve();
		});
		return pollable;
	}

	getKeyUp(): KeyEvent | undefined {
		const event = this.keyUpEvent;
		this.keyUpEvent = undefined;
		return event;
	}

	subscribeKeyDown(): Pollable {
		const pollable = new Pollable();
		this.canvas.addEventListener('keydown', event => {
			this.keyDownEvent = {
				key: keyWebToWasi(event.key),
				text: event.key,
				altKey: event.altKey,
				ctrlKey: event.ctrlKey,
				metaKey: event.metaKey,
				shiftKey: event.shiftKey,
			};
			pollable.resolve();
		});
		return pollable;
	}

	getKeyDown(): KeyEvent | undefined {
		const event = this.keyDownEvent;
		this.keyDownEvent = undefined;
		return event;
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
