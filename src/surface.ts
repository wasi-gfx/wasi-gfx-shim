import { Todo } from "./common.js";
import * as wit from "../types/interfaces/wasi-gfx-surface-surface";

function keyWebToWasi(key: string): wit.Key | undefined {
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

export class Surface implements wit.Surface {
    canvas: HTMLCanvasElement;

    constructor(desc: wit.CreateDesc) {
        this.canvas = document.createElement("canvas");
        this.canvas.style.width = "100svw";
        this.canvas.style.height = "100svh";
        this.canvas.tabIndex = 0;
        Promise.resolve().then(() => {
            const styles = getComputedStyle(this.canvas);
            this.canvas.width = parseInt(styles.getPropertyValue("width"));
            this.canvas.height = parseInt(styles.getPropertyValue("height"));
        });
        document.body.appendChild(this.canvas);
    }
    onResize(): ReadableStream<wit.ResizeEvent> {
        let canvas = this.canvas;
        let observer: ResizeObserver;
        return new ReadableStream({
            start(controller) {
                observer = new ResizeObserver((entries) => {
                    controller.enqueue({
                        width: entries[0]!.contentBoxSize[0]!.inlineSize,
                        height: entries[0]!.contentBoxSize[0]!.blockSize,
                    });
                });

                observer.observe(canvas);
            },
            cancel() {
                observer.disconnect();
            },
        });
    }
    onFrame(): ReadableStream<wit.FrameEvent> {
        let handle: number;
        return new ReadableStream({
            start(controller) {
                const onFrame = () => {
                    controller.enqueue({ nothing: false });
                    handle = globalThis.requestAnimationFrame(onFrame);
                };
                handle = globalThis.requestAnimationFrame(onFrame);
            },
            cancel() {
                globalThis.cancelAnimationFrame(handle);
            },
        });
    }
    onPointerUp(): ReadableStream<wit.PointerEvent> {
        return streamFromEvent<PointerEvent, wit.PointerEvent>(
            this.canvas,
            "pointerup",
            (event) => ({
                x: event.clientX,
                y: event.clientY,
            }),
        );
    }
    onPointerDown(): ReadableStream<wit.PointerEvent> {
        return streamFromEvent<PointerEvent, wit.PointerEvent>(
            this.canvas,
            "pointerdown",
            (event) => ({
                x: event.clientX,
                y: event.clientY,
            }),
        );
    }
    onPointerMove(): ReadableStream<wit.PointerEvent> {
        return streamFromEvent<PointerEvent, wit.PointerEvent>(
            this.canvas,
            "pointermove",
            (event) => ({
                x: event.clientX,
                y: event.clientY,
            }),
        );
    }
    onKeyUp(): ReadableStream<wit.KeyEvent> {
        return streamFromEvent<KeyboardEvent, wit.KeyEvent>(
            this.canvas,
            "keyup",
            (event) => ({
                key: keyWebToWasi(event.key),
                text: event.key,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                metaKey: event.metaKey,
                shiftKey: event.shiftKey,
            }),
        );
    }
    onKeyDown(): ReadableStream<wit.KeyEvent> {
        return streamFromEvent<KeyboardEvent, wit.KeyEvent>(
            this.canvas,
            "keydown",
            (event) => ({
                key: keyWebToWasi(event.key),
                text: event.key,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                metaKey: event.metaKey,
                shiftKey: event.shiftKey,
            }),
        );
    }

    height(): number {
        throw new Todo();
    }

    width(): number {
        throw new Todo();
    }

    requestSetSize(
        newHeight: number | undefined,
        newWidth: number | undefined,
    ): void {
        throw new Todo();
    }
}

function streamFromEvent<Evt extends Event, Output>(
    target: EventTarget,
    eventName: string,
    map: (event: Evt) => Output,
): ReadableStream<Output> {
    let eventHandler: (e: Event) => void;

    return new ReadableStream({
        start(controller) {
            eventHandler = (event: Event) => {
                controller.enqueue(map(event as Evt));
            };
            target.addEventListener(eventName, eventHandler);
        },

        cancel() {
            target.removeEventListener(eventName, eventHandler);
        },
    });
}

export default {
    Surface,
} satisfies typeof import("../types/interfaces/wasi-gfx-surface-surface");
