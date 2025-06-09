class Pollable {
    promiseResolver;
    preResolvedCount = 0;
    resolve() {
        if (this.promiseResolver) {
            this.promiseResolver();
            this.promiseResolver = undefined;
        }
        else {
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
        }
        else {
            await new Promise(res => {
                this.promiseResolver = res;
            });
        }
    }
}
const poll = {
    poll: async (inList) => {
        let finished = [];
        await Promise.race(inList.map((pollable, i) => pollable.block().finally(() => finished.push(i))));
        return new Uint32Array(finished);
    },
    Pollable,
};

class Todo extends Error {
    constructor() {
        super("TODO: not yet implemented");
    }
}
class Unreachable extends Error {
    constructor() {
        super("Unreachable code reached.");
    }
}

function keyWebToWasi(key) {
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
class Surface {
    canvas;
    pointerUpEvent;
    pointerDownEvent;
    pointerMoveEvent;
    keyUpEvent;
    keyDownEvent;
    resizeEvent;
    frameEvent;
    constructor(desc) {
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
    connectGraphicsContext(context) {
        context.__connectDisplayApi(this);
    }
    subscribeResize() {
        // TODO: not sure this is correct
        const pollable = new Pollable();
        new ResizeObserver(entries => {
            this.resizeEvent = {
                width: entries[0].contentBoxSize[0].inlineSize,
                height: entries[0].contentBoxSize[0].blockSize,
            };
            pollable.resolve();
        }).observe(this.canvas);
        return pollable;
    }
    getResize() {
        const event = this.resizeEvent;
        this.resizeEvent = undefined;
        return event;
    }
    subscribeFrame() {
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
    getFrame() {
        const event = this.frameEvent;
        this.frameEvent = undefined;
        return event;
    }
    subscribePointerUp() {
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
    getPointerUp() {
        const event = this.pointerUpEvent;
        this.pointerUpEvent = undefined;
        return event;
    }
    subscribePointerDown() {
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
    getPointerDown() {
        const event = this.pointerDownEvent;
        this.pointerDownEvent = undefined;
        return event;
    }
    subscribePointerMove() {
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
    getPointerMove() {
        const event = this.pointerMoveEvent;
        this.pointerMoveEvent = undefined;
        return event;
    }
    subscribeKeyUp() {
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
    getKeyUp() {
        const event = this.keyUpEvent;
        this.keyUpEvent = undefined;
        return event;
    }
    subscribeKeyDown() {
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
    getKeyDown() {
        const event = this.keyDownEvent;
        this.keyDownEvent = undefined;
        return event;
    }
    getContext(contextId, options) {
        return this.canvas.getContext(contextId, options);
    }
    height() {
        throw new Todo;
    }
    width() {
        throw new Todo;
    }
    requestSetSize(newHeight, newWidth) {
        throw new Todo;
    }
}

class AbstractBuffer {
    buffer;
    constructor(buffer) {
        this.buffer = buffer;
    }
}
class Context {
    displayApi;
    drawApi;
    getCurrentBuffer() {
        if (!this.displayApi || !this.drawApi)
            throw new Error("Graphics context not fully connected");
        return this.drawApi.getCurrentBuffer();
    }
    present() {
        // noop on web
    }
    setCurrentBuffer(buffer) {
        throw new Todo;
    }
    __connectDisplayApi(displayApi) {
        this.displayApi = displayApi;
        if (this.drawApi) {
            this.drawApi.displayApiReady(displayApi);
        }
    }
    __connectDrawApi(drawApi) {
        this.drawApi = drawApi;
        if (this.displayApi) {
            this.drawApi.displayApiReady(this.displayApi);
        }
    }
}

function convertFeatureNameWasiToWeb(name) {
    if (name === "texture-compression-bc-sliced3d")
        return "texture-compression-bc-sliced-3d";
    if (name === "texture-compression-astc-sliced3d")
        throw new Todo;
    return name;
}
function convertTextureFormatWebToWasi(name) {
    switch (name) {
        case "astc-4x4-unorm":
            return "astc4x4-unorm";
        case "astc-4x4-unorm-srgb":
            return "astc4x4-unorm-srgb";
        case "astc-5x4-unorm":
            return "astc5x4-unorm";
        case "astc-5x4-unorm-srgb":
            return "astc5x4-unorm-srgb";
        case "astc-5x5-unorm":
            return "astc5x5-unorm";
        case "astc-5x5-unorm-srgb":
            return "astc5x5-unorm-srgb";
        case "astc-6x5-unorm":
            return "astc6x5-unorm";
        case "astc-6x5-unorm-srgb":
            return "astc6x5-unorm-srgb";
        case "astc-6x6-unorm":
            return "astc6x6-unorm";
        case "astc-6x6-unorm-srgb":
            return "astc6x6-unorm-srgb";
        case "astc-8x5-unorm":
            return "astc8x5-unorm";
        case "astc-8x5-unorm-srgb":
            return "astc8x5-unorm-srgb";
        case "astc-8x6-unorm":
            return "astc8x6-unorm";
        case "astc-8x6-unorm-srgb":
            return "astc8x6-unorm-srgb";
        case "astc-8x8-unorm":
            return "astc8x8-unorm";
        case "astc-8x8-unorm-srgb":
            return "astc8x8-unorm-srgb";
        case "astc-10x5-unorm":
            return "astc10x5-unorm";
        case "astc-10x5-unorm-srgb":
            return "astc10x5-unorm-srgb";
        case "astc-10x6-unorm":
            return "astc10x6-unorm";
        case "astc-10x6-unorm-srgb":
            return "astc10x6-unorm-srgb";
        case "astc-10x8-unorm":
            return "astc10x8-unorm";
        case "astc-10x8-unorm-srgb":
            return "astc10x8-unorm-srgb";
        case "astc-10x10-unorm":
            return "astc10x10-unorm";
        case "astc-10x10-unorm-srgb":
            return "astc10x10-unorm-srgb";
        case "astc-12x10-unorm":
            return "astc12x10-unorm";
        case "astc-12x10-unorm-srgb":
            return "astc12x10-unorm-srgb";
        case "astc-12x12-unorm":
            return "astc12x12-unorm";
        case "astc-12x12-unorm-srgb":
            return "astc12x12-unorm-srgb";
        default:
            return name;
    }
}
function convertTextureFormatWasiToWeb(name) {
    switch (name) {
        case "astc4x4-unorm":
            return "astc-4x4-unorm";
        case "astc4x4-unorm-srgb":
            return "astc-4x4-unorm-srgb";
        case "astc5x4-unorm":
            return "astc-5x4-unorm";
        case "astc5x4-unorm-srgb":
            return "astc-5x4-unorm-srgb";
        case "astc5x5-unorm":
            return "astc-5x5-unorm";
        case "astc5x5-unorm-srgb":
            return "astc-5x5-unorm-srgb";
        case "astc6x5-unorm":
            return "astc-6x5-unorm";
        case "astc6x5-unorm-srgb":
            return "astc-6x5-unorm-srgb";
        case "astc6x6-unorm":
            return "astc-6x6-unorm";
        case "astc6x6-unorm-srgb":
            return "astc-6x6-unorm-srgb";
        case "astc8x5-unorm":
            return "astc-8x5-unorm";
        case "astc8x5-unorm-srgb":
            return "astc-8x5-unorm-srgb";
        case "astc8x6-unorm":
            return "astc-8x6-unorm";
        case "astc8x6-unorm-srgb":
            return "astc-8x6-unorm-srgb";
        case "astc8x8-unorm":
            return "astc-8x8-unorm";
        case "astc8x8-unorm-srgb":
            return "astc-8x8-unorm-srgb";
        case "astc10x5-unorm":
            return "astc-10x5-unorm";
        case "astc10x5-unorm-srgb":
            return "astc-10x5-unorm-srgb";
        case "astc10x6-unorm":
            return "astc-10x6-unorm";
        case "astc10x6-unorm-srgb":
            return "astc-10x6-unorm-srgb";
        case "astc10x8-unorm":
            return "astc-10x8-unorm";
        case "astc10x8-unorm-srgb":
            return "astc-10x8-unorm-srgb";
        case "astc10x10-unorm":
            return "astc-10x10-unorm";
        case "astc10x10-unorm-srgb":
            return "astc-10x10-unorm-srgb";
        case "astc12x10-unorm":
            return "astc-12x10-unorm";
        case "astc12x10-unorm-srgb":
            return "astc-12x10-unorm-srgb";
        case "astc12x12-unorm":
            return "astc-12x12-unorm";
        case "astc12x12-unorm-srgb":
            return "astc-12x12-unorm-srgb";
        default:
            return name;
    }
}
function convertVertexFormatWasiToWeb(name) {
    switch (name) {
        case "unorm1010102":
            return "unorm10-10-10-2";
        default:
            return name;
    }
}
function convertTextureDimensionWebToWasi(name) {
    name = name.toLowerCase();
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d2";
        case "3d":
            return "d3";
    }
}
function convertTextureDimensionWasiToWeb(name) {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "2d";
        case "d3":
            return "3d";
    }
}
function convertTextureViewDimensionWasiToWeb(name) {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "2d";
        case "d3":
            return "3d";
        case "d2-array":
            return "2d-array";
        default:
            return name;
    }
}
function convertGpuLayoutWasiToWeb(layout) {
    switch (layout.tag) {
        case 'specific':
            return layout.val[inner];
        case 'auto':
            return 'auto';
    }
}
function bigIntToNumber(bigInt) {
    return Number(bigInt);
}
function numberToBigInt(number) {
    return BigInt(number);
}
const inner = Symbol("inner");
class Gpu {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    async requestAdapter(options) {
        const adapter = await this[inner].requestAdapter(options);
        if (adapter)
            return new GpuAdapter(adapter);
        return undefined;
    }
    getPreferredCanvasFormat() {
        return convertTextureFormatWebToWasi(navigator.gpu.getPreferredCanvasFormat());
    }
    wgslLanguageFeatures() {
        return new WgslLanguageFeatures(this[inner].wgslLanguageFeatures);
    }
}
class GpuAdapter {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    features() {
        return new GpuSupportedFeatures(this[inner].features);
    }
    limits() {
        return new GpuSupportedLimits(this[inner].limits);
    }
    info() {
        return new GpuAdapterInfo(this[inner].info);
    }
    isFallbackAdapter() {
        throw new Todo;
    }
    async requestDevice(descriptor) {
        if (!descriptor)
            descriptor = {};
        let requiredFeatures;
        if (descriptor.requiredFeatures)
            requiredFeatures = Array.from(descriptor.requiredFeatures).map(convertFeatureNameWasiToWeb);
        const device = await this[inner].requestDevice({
            ...descriptor,
            requiredFeatures,
            requiredLimits: undefined, // TODO:
        });
        return new GpuDevice(device);
    }
}
class GpuDevice {
    [inner];
    #context;
    constructor(i) {
        this[inner] = i;
    }
    displayApiReady(displayApi) {
        this.#context = displayApi.getContext("webgpu") ?? undefined;
        this.#context?.configure({
            device: this[inner],
            format: navigator.gpu.getPreferredCanvasFormat(),
        });
    }
    getCurrentBuffer() {
        if (!this.#context)
            throw new Unreachable;
        return new AbstractBuffer(this.#context.getCurrentTexture());
    }
    features() {
        return new GpuSupportedFeatures(this[inner].features);
    }
    limits() {
        return new GpuSupportedLimits(this[inner].limits);
    }
    adapterInfo() {
        return new GpuAdapterInfo(this[inner].adapterInfo);
    }
    queue() {
        return new GpuQueue(this[inner].queue);
    }
    destroy() {
        return this[inner].destroy();
    }
    createBuffer(descriptor) {
        return new GpuBuffer(this[inner].createBuffer({
            ...descriptor,
            size: bigIntToNumber(descriptor.size),
        }));
    }
    createTexture(descriptor) {
        let dimension;
        if (descriptor.dimension) {
            dimension = convertTextureDimensionWasiToWeb(descriptor.dimension);
        }
        if (descriptor.format) {
            convertTextureFormatWasiToWeb(descriptor.format);
        }
        let viewFormats;
        if (descriptor.viewFormats) {
            viewFormats = descriptor.viewFormats.map(convertTextureFormatWasiToWeb);
        }
        return new GpuTexture(this[inner].createTexture({
            ...descriptor,
            dimension,
            format: convertTextureFormatWasiToWeb(descriptor.format),
            viewFormats,
        }));
    }
    createSampler(descriptor) {
        return new GpuSampler(this[inner].createSampler(descriptor));
    }
    createBindGroupLayout(descriptor) {
        return new GpuBindGroupLayout(this[inner].createBindGroupLayout({
            ...descriptor,
            entries: descriptor.entries.map(entry => {
                let buffer;
                if (entry.buffer) {
                    let minBindingSize;
                    if (entry.buffer.minBindingSize) {
                        minBindingSize = bigIntToNumber(entry.buffer.minBindingSize);
                    }
                    buffer = {
                        ...entry.buffer,
                        minBindingSize,
                    };
                }
                let sampler;
                if (entry.sampler) {
                    sampler = {
                        ...entry.sampler,
                    };
                }
                let texture;
                if (entry.texture) {
                    let viewDimension;
                    if (entry.texture.viewDimension) {
                        viewDimension = convertTextureViewDimensionWasiToWeb(entry.texture.viewDimension);
                    }
                    texture = {
                        ...entry.texture,
                        viewDimension,
                    };
                }
                let storageTexture;
                if (entry.storageTexture) {
                    let viewDimension;
                    if (entry.storageTexture.viewDimension) {
                        viewDimension = convertTextureViewDimensionWasiToWeb(entry.storageTexture.viewDimension);
                    }
                    storageTexture = {
                        ...entry.storageTexture,
                        format: convertTextureFormatWasiToWeb(entry.storageTexture.format),
                        viewDimension,
                    };
                }
                return {
                    ...entry,
                    buffer,
                    sampler,
                    texture,
                    storageTexture,
                };
            }),
        }));
    }
    createPipelineLayout(descriptor) {
        return new GpuPipelineLayout(this[inner].createPipelineLayout({
            ...descriptor,
            bindGroupLayouts: descriptor.bindGroupLayouts.map(bindGroupLayout => {
                if (bindGroupLayout)
                    return bindGroupLayout[inner];
                return undefined;
            }),
        }));
    }
    createBindGroup(descriptor) {
        return new GpuBindGroup(this[inner].createBindGroup({
            ...descriptor,
            layout: descriptor.layout[inner],
            entries: descriptor.entries.map(entry => {
                let resource;
                switch (entry.resource.tag) {
                    case 'gpu-buffer-binding':
                        let offset;
                        if (entry.resource.val.offset) {
                            offset = bigIntToNumber(entry.resource.val.offset);
                        }
                        let size;
                        if (entry.resource.val.size) {
                            size = bigIntToNumber(entry.resource.val.size);
                        }
                        resource = {
                            ...entry.resource.val,
                            buffer: entry.resource.val.buffer[inner],
                            offset,
                            size,
                        };
                        break;
                    case 'gpu-sampler':
                        resource = entry.resource.val[inner];
                        break;
                    case 'gpu-texture-view':
                        resource = entry.resource.val[inner];
                        break;
                    default:
                        throw new Unreachable;
                }
                return {
                    ...entry,
                    resource,
                };
            }),
        }));
    }
    createShaderModule(descriptor) {
        let compilationHints;
        if (descriptor.compilationHints) {
            compilationHints = descriptor.compilationHints.map(hint => {
                let layout;
                if (hint.layout) {
                    layout = convertGpuLayoutWasiToWeb(hint.layout);
                }
                return {
                    ...hint,
                    layout,
                };
            });
        }
        return new GpuShaderModule(this[inner].createShaderModule({
            ...descriptor,
            compilationHints,
        }));
    }
    createComputePipeline(descriptor) {
        return new GpuComputePipeline(this[inner].createComputePipeline({
            ...descriptor,
            compute: {
                ...descriptor.compute,
                module: descriptor.compute.module[inner],
                constants: undefined, // TODO:
            },
            layout: convertGpuLayoutWasiToWeb(descriptor.layout),
        }));
    }
    createRenderPipeline(descriptor) {
        let buffers = undefined;
        if (descriptor.vertex.buffers) {
            buffers = descriptor.vertex.buffers.map(vbl => {
                if (vbl) {
                    return {
                        ...vbl,
                        arrayStride: bigIntToNumber(vbl.arrayStride),
                        attributes: Array.from(vbl.attributes).map(attribute => {
                            return {
                                ...attribute,
                                offset: bigIntToNumber(attribute.offset),
                                format: convertVertexFormatWasiToWeb(attribute.format),
                            };
                        }),
                    };
                }
                else {
                    return undefined;
                }
            });
        }
        const vertex = {
            ...descriptor.vertex,
            constants: undefined, // TODO:
            module: descriptor.vertex.module[inner],
            buffers,
        };
        let depthStencil;
        if (descriptor.depthStencil) {
            depthStencil = {
                ...descriptor.depthStencil,
                format: convertTextureFormatWasiToWeb(descriptor.depthStencil.format),
            };
        }
        let fragment;
        if (descriptor.fragment) {
            fragment = {
                ...descriptor.fragment,
                constants: undefined, // TODO:
                module: descriptor.fragment.module[inner],
                targets: Array.from(descriptor.fragment.targets).map(target => {
                    if (target) {
                        return {
                            ...target,
                            format: convertTextureFormatWasiToWeb(target.format),
                        };
                    }
                    else {
                        return undefined;
                    }
                }),
            };
        }
        return new GpuRenderPipeline(this[inner].createRenderPipeline({
            ...descriptor,
            vertex,
            depthStencil,
            fragment,
            layout: convertGpuLayoutWasiToWeb(descriptor.layout),
        }));
    }
    async createComputePipelineAsync(descriptor) {
        throw new Todo;
    }
    async createRenderPipelineAsync(descriptor) {
        throw new Todo;
    }
    createCommandEncoder(descriptor) {
        return new GpuCommandEncoder(this[inner].createCommandEncoder({
            ...descriptor,
        }));
    }
    createRenderBundleEncoder(descriptor) {
        return new GpuRenderBundleEncoder(this[inner].createRenderBundleEncoder({
            colorFormats: descriptor.colorFormats.map(colorFormat => {
                let colorFormatWeb;
                if (colorFormat)
                    colorFormatWeb = convertTextureFormatWasiToWeb(colorFormat);
                return colorFormatWeb;
            }),
        }));
    }
    createQuerySet(descriptor) {
        return new GpuQuerySet(this[inner].createQuerySet({
            ...descriptor,
        }));
    }
    lost() {
        throw new Todo;
    }
    pushErrorScope(filter) {
        return this[inner].pushErrorScope(filter);
    }
    async popErrorScope() {
        let output;
        let error = await this[inner].popErrorScope();
        if (error) {
            output = new GpuError(error);
        }
        return output;
    }
    onuncapturederrorSubscribe() {
        throw new Todo;
    }
    connectGraphicsContext(context) {
        context.__connectDrawApi(this);
    }
}
class GpuAdapterInfo {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    vendor() {
        return this[inner].vendor;
    }
    architecture() {
        return this[inner].architecture;
    }
    device() {
        return this[inner].device;
    }
    description() {
        return this[inner].description;
    }
    subgroupMinSize() {
        throw new Todo;
    }
    subgroupMaxSize() {
        throw new Todo;
    }
}
class GpuBindGroup {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuBindGroupLayout {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuBuffer {
    [inner];
    #mappedRange;
    constructor(i) {
        this[inner] = i;
    }
    size() {
        return numberToBigInt(this[inner].size);
    }
    usage() {
        return this[inner].usage;
    }
    mapState() {
        return this[inner].mapState;
    }
    async mapAsync(mode, offset, size) {
        return await this[inner].mapAsync(mode);
    }
    getMappedRangeGetWithCopy(offset, size) {
        // TODO: letting getMappedRange be called multiple times until we figure out how to avoid the with-copy behavior
        let offsetNumber;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        if (!this.#mappedRange) {
            this.#mappedRange = new Uint8Array(this[inner].getMappedRange(offsetNumber, sizeNumber));
        }
        return this.#mappedRange;
    }
    unmap() {
        this.#mappedRange = undefined;
        this[inner].unmap();
    }
    destroy() {
        return this[inner].destroy();
    }
    getMappedRangeSetWithCopy(data, offset, size) {
        // TODO: letting getMappedRange be called multiple times until we figure out how to avoid the with-copy behavior
        let offsetNumber;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        if (!this.#mappedRange) {
            this.#mappedRange = new Uint8Array(this[inner].getMappedRange(offsetNumber, sizeNumber));
        }
        this.#mappedRange.set(data);
    }
}
class GpuBufferUsage {
    static mapRead() {
        return 0x0001;
    }
    static mapWrite() {
        return 0x0002;
    }
    static copySrc() {
        return 0x0004;
    }
    static copyDst() {
        return 0x0008;
    }
    static index() {
        return 0x0010;
    }
    static vertex() {
        return 0x0020;
    }
    static uniform() {
        return 0x0040;
    }
    static storage() {
        return 0x0080;
    }
    static indirect() {
        return 0x0100;
    }
    static queryResolve() {
        return 0x0200;
    }
}
class GpuCanvasContext {
    configure(configuration) {
        throw new Todo;
    }
    unconfigure() {
        throw new Todo;
    }
    getConfiguration() {
        throw new Todo;
    }
    getCurrentTexture() {
        throw new Todo;
    }
}
class GpuColorWrite {
    static red() {
        return 0x1;
    }
    static green() {
        return 0x2;
    }
    static blue() {
        return 0x4;
    }
    static alpha() {
        return 0x8;
    }
    static all() {
        return 0xF;
    }
}
class GpuCommandBuffer {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuCommandEncoder {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    beginRenderPass(descriptor) {
        let colorAttachments = descriptor.colorAttachments.map(colorAttachment => {
            if (colorAttachment) {
                let resolveTarget;
                if (colorAttachment?.resolveTarget)
                    resolveTarget = colorAttachment.resolveTarget[inner];
                return {
                    ...colorAttachment,
                    view: colorAttachment.view[inner],
                    resolveTarget,
                };
            }
            else {
                return undefined;
            }
        });
        let occlusionQuerySet;
        if (descriptor?.occlusionQuerySet) {
            occlusionQuerySet = descriptor.occlusionQuerySet[inner];
        }
        let timestampWrites;
        if (descriptor?.timestampWrites) {
            timestampWrites = {
                ...descriptor.timestampWrites,
                querySet: descriptor.timestampWrites.querySet[inner],
            };
        }
        let depthStencilAttachment;
        if (descriptor?.depthStencilAttachment) {
            depthStencilAttachment = {
                ...descriptor.depthStencilAttachment,
                view: descriptor.depthStencilAttachment.view[inner],
            };
        }
        let maxDrawCount;
        if (descriptor?.maxDrawCount) {
            maxDrawCount = bigIntToNumber(descriptor.maxDrawCount);
        }
        return new GpuRenderPassEncoder(this[inner].beginRenderPass({
            ...descriptor,
            colorAttachments,
            depthStencilAttachment,
            occlusionQuerySet,
            timestampWrites,
            maxDrawCount,
        }));
    }
    beginComputePass(descriptor) {
        let descriptorWeb;
        if (descriptor) {
            let timestampWrites;
            if (descriptor.timestampWrites) {
                timestampWrites = {
                    ...descriptor.timestampWrites,
                    querySet: descriptor.timestampWrites.querySet[inner],
                };
            }
            descriptorWeb = {
                ...descriptor,
                timestampWrites,
            };
        }
        return new GpuComputePassEncoder(this[inner].beginComputePass(descriptorWeb));
    }
    copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size) {
        this[inner].copyBufferToBuffer(source[inner], bigIntToNumber(sourceOffset), destination[inner], bigIntToNumber(destinationOffset), bigIntToNumber(size));
    }
    copyBufferToTexture(source, destination, copySize) {
        let sourceOffset;
        if (source.offset)
            sourceOffset = bigIntToNumber(source.offset);
        this[inner].copyBufferToTexture({
            ...source,
            buffer: source.buffer[inner],
            offset: sourceOffset
        }, {
            ...destination,
            texture: destination.texture[inner],
        }, copySize);
    }
    copyTextureToBuffer(source, destination, copySize) {
        let destinationOffset;
        if (destination.offset)
            destinationOffset = bigIntToNumber(destination.offset);
        this[inner].copyTextureToBuffer({
            ...source,
            texture: source.texture[inner],
        }, {
            ...destination,
            buffer: destination.buffer[inner],
            offset: destinationOffset
        }, copySize);
    }
    copyTextureToTexture(source, destination, copySize) {
        this[inner].copyTextureToTexture({
            ...source,
            texture: source.texture[inner],
        }, {
            ...destination,
            texture: destination.texture[inner],
        }, copySize);
    }
    clearBuffer(buffer, offset, size) {
        let offsetNumber;
        if (offset)
            offsetNumber = bigIntToNumber(offset);
        let sizeNumber;
        if (size)
            sizeNumber = bigIntToNumber(size);
        this[inner].clearBuffer(buffer[inner], offsetNumber, sizeNumber);
    }
    resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset) {
        return this[inner].resolveQuerySet(querySet[inner], firstQuery, queryCount, destination[inner], bigIntToNumber(destinationOffset));
    }
    finish(descriptor) {
        return new GpuCommandBuffer(this[inner].finish({
            ...descriptor
        }));
    }
    pushDebugGroup(groupLabel) {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        return this[inner].insertDebugMarker(markerLabel);
    }
    label() {
        return this[inner].label;
    }
    setLabel(label) {
        this[inner].label = label;
    }
}
class GpuCompilationInfo {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    messages() {
        return this[inner].messages.map(message => new GpuCompilationMessage(message));
    }
}
class GpuCompilationMessage {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    message() {
        return this[inner].message;
    }
    type() {
        return this[inner].type;
    }
    lineNum() {
        return numberToBigInt(this[inner].lineNum);
    }
    linePos() {
        return numberToBigInt(this[inner].linePos);
    }
    offset() {
        return numberToBigInt(this[inner].offset);
    }
    length() {
        return numberToBigInt(this[inner].length);
    }
}
class GpuComputePassEncoder {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    setPipeline(pipeline) {
        return this[inner].setPipeline(pipeline[inner]);
    }
    dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ) {
        return this[inner].dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
    }
    dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset) {
        return this[inner].dispatchWorkgroupsIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
    }
    end() {
        return this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        return this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        let bindGroupWeb;
        if (bindGroup) {
            bindGroupWeb = bindGroup[inner];
        }
        if (dynamicOffsetsData === undefined) {
            return this[inner].setBindGroup(index, bindGroupWeb);
        }
        else {
            let dynamicOffsetsDataStartNumber;
            if (dynamicOffsetsDataStart) {
                dynamicOffsetsDataStartNumber = bigIntToNumber(dynamicOffsetsDataStart);
            }
            else {
                dynamicOffsetsDataStartNumber = 0;
            }
            if (dynamicOffsetsDataLength === undefined) {
                dynamicOffsetsDataLength = dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
            }
            return this[inner].setBindGroup(index, bindGroupWeb, dynamicOffsetsData, dynamicOffsetsDataStartNumber, dynamicOffsetsDataLength);
        }
    }
}
class GpuComputePipeline {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    getBindGroupLayout(index) {
        return new GpuBindGroupLayout(this[inner].getBindGroupLayout(index));
    }
}
class GpuMapMode {
    static read() {
        return 0x0001;
    }
    static write() {
        return 0x0002;
    }
}
class GpuPipelineLayout {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuQuerySet {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    destroy() {
        return this[inner].destroy();
    }
    type() {
        return this[inner].type;
    }
    count() {
        return this[inner].count;
    }
}
class GpuQueue {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    submit(commandBuffers) {
        return this[inner].submit(commandBuffers.map(c => c[inner]));
    }
    onSubmittedWorkDone() {
        throw new Todo;
    }
    writeBufferWithCopy(buffer, bufferOffset, data, dataOffset, size) {
        let dataOffsetNumber;
        if (dataOffset) {
            dataOffsetNumber = bigIntToNumber(dataOffset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].writeBuffer(buffer[inner], bigIntToNumber(bufferOffset), data, dataOffsetNumber, sizeNumber);
    }
    writeTextureWithCopy(destination, data, dataLayout, size) {
        let offset;
        if (dataLayout.offset) {
            offset = bigIntToNumber(dataLayout.offset);
        }
        return this[inner].writeTexture({
            ...destination,
            texture: destination.texture[inner],
        }, data, {
            ...dataLayout,
            offset
        }, size);
    }
}
class GpuRenderBundle {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuRenderBundleEncoder {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    finish(descriptor) {
        return new GpuRenderBundle(this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel) {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        return this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        let bindGroupWeb;
        if (bindGroup) {
            bindGroupWeb = bindGroup[inner];
        }
        if (dynamicOffsetsData === undefined) {
            return this[inner].setBindGroup(index, bindGroupWeb);
        }
        else {
            let dynamicOffsetsDataStartNumber;
            if (dynamicOffsetsDataStart) {
                dynamicOffsetsDataStartNumber = bigIntToNumber(dynamicOffsetsDataStart);
            }
            else {
                dynamicOffsetsDataStartNumber = 0;
            }
            if (dynamicOffsetsDataLength === undefined) {
                dynamicOffsetsDataLength = dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
            }
            return this[inner].setBindGroup(index, bindGroupWeb, dynamicOffsetsData, dynamicOffsetsDataStartNumber, dynamicOffsetsDataLength);
        }
    }
    setPipeline(pipeline) {
        return this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        let offsetNumber;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setIndexBuffer(buffer[inner], indexFormat, offsetNumber, sizeNumber);
    }
    setVertexBuffer(slot, buffer, offset, size) {
        let bufferWeb;
        if (buffer) {
            bufferWeb = buffer[inner];
        }
        let offsetNumber;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setVertexBuffer(slot, bufferWeb, offsetNumber, sizeNumber);
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        return this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        return this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        return this[inner].drawIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        return this[inner].drawIndexedIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
    }
}
class GpuRenderPassEncoder {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    setViewport(x, y, width, height, minDepth, maxDepth) {
        return this[inner].setViewport(x, y, width, height, minDepth, maxDepth);
    }
    setScissorRect(x, y, width, height) {
        return this[inner].setScissorRect(x, y, width, height);
    }
    setBlendConstant(color) {
        return this[inner].setBlendConstant(color);
    }
    setStencilReference(reference) {
        return this[inner].setStencilReference(reference);
    }
    beginOcclusionQuery(queryIndex) {
        return this[inner].beginOcclusionQuery(queryIndex);
    }
    endOcclusionQuery() {
        return this[inner].endOcclusionQuery();
    }
    executeBundles(bundles) {
        return this[inner].executeBundles(bundles.map(bundle => bundle[inner]));
    }
    end() {
        return this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        return this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        let bindGroupWeb;
        if (bindGroup) {
            bindGroupWeb = bindGroup[inner];
        }
        if (dynamicOffsetsData === undefined) {
            return this[inner].setBindGroup(index, bindGroupWeb);
        }
        else {
            let dynamicOffsetsDataStartNumber;
            if (dynamicOffsetsDataStart) {
                dynamicOffsetsDataStartNumber = bigIntToNumber(dynamicOffsetsDataStart);
            }
            else {
                dynamicOffsetsDataStartNumber = 0;
            }
            if (dynamicOffsetsDataLength === undefined) {
                dynamicOffsetsDataLength = dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
            }
            return this[inner].setBindGroup(index, bindGroupWeb, dynamicOffsetsData, dynamicOffsetsDataStartNumber, dynamicOffsetsDataLength);
        }
    }
    setPipeline(pipeline) {
        return this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        let offsetNumber;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setIndexBuffer(buffer[inner], indexFormat, offsetNumber, sizeNumber);
    }
    setVertexBuffer(slot, buffer, offset, size) {
        let bufferWeb;
        if (buffer) {
            bufferWeb = buffer[inner];
        }
        let offsetNumber;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setVertexBuffer(slot, bufferWeb, offsetNumber, sizeNumber);
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        return this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        return this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        return this[inner].drawIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        return this[inner].drawIndexedIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
    }
}
class GpuRenderPipeline {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    getBindGroupLayout(index) {
        return new GpuBindGroupLayout(this[inner].getBindGroupLayout(index));
    }
}
class GpuSampler {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuShaderModule {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    async getCompilationInfo() {
        return new GpuCompilationInfo(await this[inner].getCompilationInfo());
    }
}
class GpuShaderStage {
    static vertex() {
        return 0x1;
    }
    static fragment() {
        return 0x2;
    }
    static compute() {
        return 0x4;
    }
}
class GpuSupportedFeatures {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    has(value) {
        return this[inner].has(value);
    }
}
class GpuSupportedLimits {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    maxTextureDimension1D() {
        return this[inner].maxTextureDimension1D;
    }
    maxTextureDimension2D() {
        return this[inner].maxTextureDimension2D;
    }
    maxTextureDimension3D() {
        return this[inner].maxTextureDimension3D;
    }
    maxTextureArrayLayers() {
        return this[inner].maxTextureArrayLayers;
    }
    maxBindGroups() {
        return this[inner].maxBindGroups;
    }
    maxBindGroupsPlusVertexBuffers() {
        return this[inner].maxBindGroupsPlusVertexBuffers;
    }
    maxBindingsPerBindGroup() {
        return this[inner].maxBindingsPerBindGroup;
    }
    maxDynamicUniformBuffersPerPipelineLayout() {
        return this[inner].maxDynamicUniformBuffersPerPipelineLayout;
    }
    maxDynamicStorageBuffersPerPipelineLayout() {
        return this[inner].maxDynamicStorageBuffersPerPipelineLayout;
    }
    maxSampledTexturesPerShaderStage() {
        return this[inner].maxSampledTexturesPerShaderStage;
    }
    maxSamplersPerShaderStage() {
        return this[inner].maxSamplersPerShaderStage;
    }
    maxStorageBuffersPerShaderStage() {
        return this[inner].maxStorageBuffersPerShaderStage;
    }
    maxStorageTexturesPerShaderStage() {
        return this[inner].maxStorageTexturesPerShaderStage;
    }
    maxUniformBuffersPerShaderStage() {
        return this[inner].maxUniformBuffersPerShaderStage;
    }
    maxUniformBufferBindingSize() {
        return BigInt(this[inner].maxUniformBufferBindingSize);
    }
    maxStorageBufferBindingSize() {
        return BigInt(this[inner].maxStorageBufferBindingSize);
    }
    minUniformBufferOffsetAlignment() {
        return this[inner].minUniformBufferOffsetAlignment;
    }
    minStorageBufferOffsetAlignment() {
        return this[inner].minStorageBufferOffsetAlignment;
    }
    maxVertexBuffers() {
        return this[inner].maxVertexBuffers;
    }
    maxBufferSize() {
        return BigInt(this[inner].maxBufferSize);
    }
    maxVertexAttributes() {
        return this[inner].maxVertexAttributes;
    }
    maxVertexBufferArrayStride() {
        return this[inner].maxVertexBufferArrayStride;
    }
    maxInterStageShaderVariables() {
        return this[inner].maxInterStageShaderVariables;
    }
    maxColorAttachments() {
        return this[inner].maxColorAttachments;
    }
    maxColorAttachmentBytesPerSample() {
        return this[inner].maxColorAttachmentBytesPerSample;
    }
    maxComputeWorkgroupStorageSize() {
        return this[inner].maxComputeWorkgroupStorageSize;
    }
    maxComputeInvocationsPerWorkgroup() {
        return this[inner].maxComputeInvocationsPerWorkgroup;
    }
    maxComputeWorkgroupSizeX() {
        return this[inner].maxComputeWorkgroupSizeX;
    }
    maxComputeWorkgroupSizeY() {
        return this[inner].maxComputeWorkgroupSizeY;
    }
    maxComputeWorkgroupSizeZ() {
        return this[inner].maxComputeWorkgroupSizeZ;
    }
    maxComputeWorkgroupsPerDimension() {
        return this[inner].maxComputeWorkgroupsPerDimension;
    }
}
class GpuTexture {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    createView(descriptor) {
        let format;
        if (descriptor?.format)
            format = convertTextureFormatWasiToWeb(descriptor.format);
        let dimension;
        if (descriptor?.dimension)
            dimension = convertTextureViewDimensionWasiToWeb(descriptor.dimension);
        return new GpuTextureView(this[inner].createView({
            ...descriptor,
            dimension,
            format,
        }));
    }
    destroy() {
        return this[inner].destroy();
    }
    width() {
        return this[inner].width;
    }
    height() {
        return this[inner].height;
    }
    depthOrArrayLayers() {
        return this[inner].depthOrArrayLayers;
    }
    mipLevelCount() {
        return this[inner].mipLevelCount;
    }
    sampleCount() {
        return this[inner].sampleCount;
    }
    dimension() {
        return convertTextureDimensionWebToWasi(this[inner].dimension);
    }
    format() {
        return convertTextureFormatWebToWasi(this[inner].format);
    }
    usage() {
        return this[inner].usage;
    }
    static fromGraphicsBuffer(buffer) {
        return new GpuTexture(buffer.buffer);
    }
}
class GpuTextureUsage {
    static copySrc() {
        return 0x01;
    }
    static copyDst() {
        return 0x02;
    }
    static textureBinding() {
        return 0x04;
    }
    static storageBinding() {
        return 0x08;
    }
    static renderAttachment() {
        return 0x10;
    }
}
class GpuTextureView {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
}
class GpuUncapturedErrorEvent {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    error() {
        return new GpuError(this[inner].error);
    }
}
class RecordGpuPipelineConstantValue {
    map = new Map();
    add(key, value) {
        this.map.set(key, value);
    }
    get(key) {
        return this.map.get(key);
    }
    has(key) {
        return this.map.has(key);
    }
    remove(key) {
        this.map.delete(key);
    }
    keys() {
        return Array.from(this.map.keys());
    }
    values() {
        return new Float64Array(this.map.values());
    }
    entries() {
        return Array.from(this.map.entries());
    }
}
class RecordOptionGpuSize64 {
    map = new Map();
    add(key, value) {
        this.map.set(key, value);
    }
    get(key) {
        return this.map.get(key);
    }
    has(key) {
        return this.map.has(key);
    }
    remove(key) {
        this.map.delete(key);
    }
    keys() {
        return Array.from(this.map.keys());
    }
    values() {
        return Array.from(this.map.values());
    }
    entries() {
        return Array.from(this.map.entries());
    }
}
class WgslLanguageFeatures {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    has(value) {
        return this[inner].has(value);
    }
}
class GpuDeviceLostInfo {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    reason() {
        return this[inner].reason;
    }
    message() {
        return this[inner].message;
    }
}
class GpuError {
    [inner];
    constructor(i) {
        this[inner] = i;
    }
    message() {
        return this[inner].message;
    }
    kind() {
        if (this[inner] instanceof GPUValidationError) {
            return {
                tag: "validation-error",
            };
        }
        if (this[inner] instanceof GPUOutOfMemoryError) {
            return {
                tag: "out-of-memory-error",
            };
        }
        if (this[inner] instanceof GPUInternalError) {
            return {
                tag: "internal-error",
            };
        }
        throw new Unreachable;
    }
}
function getGpu() {
    return new Gpu(navigator.gpu);
}

class Buffer {
    static fromGraphicsBuffer(buffer) {
        throw new Todo;
    }
    get() {
        throw new Todo;
    }
    set(val) {
        throw new Todo;
    }
}
class Device {
    constructor() {
        throw new Todo;
    }
    connectGraphicsContext(context) {
        throw new Todo;
    }
    getContext() {
        throw new Todo;
    }
}

export { AbstractBuffer, Buffer, Context, Device, Gpu, GpuAdapter, GpuAdapterInfo, GpuBindGroup, GpuBindGroupLayout, GpuBuffer, GpuBufferUsage, GpuCanvasContext, GpuColorWrite, GpuCommandBuffer, GpuCommandEncoder, GpuCompilationInfo, GpuCompilationMessage, GpuComputePassEncoder, GpuComputePipeline, GpuDevice, GpuDeviceLostInfo, GpuError, GpuMapMode, GpuPipelineLayout, GpuQuerySet, GpuQueue, GpuRenderBundle, GpuRenderBundleEncoder, GpuRenderPassEncoder, GpuRenderPipeline, GpuSampler, GpuShaderModule, GpuShaderStage, GpuSupportedFeatures, GpuSupportedLimits, GpuTexture, GpuTextureUsage, GpuTextureView, GpuUncapturedErrorEvent, Pollable, RecordGpuPipelineConstantValue, RecordOptionGpuSize64, Surface, WgslLanguageFeatures, getGpu, poll };
