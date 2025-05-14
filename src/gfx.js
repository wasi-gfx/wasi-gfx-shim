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
// @ts-ignore
window.Pollable = Pollable;
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
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    pollable.resolve();
                }
            }
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
            throw new Todo;
        });
        return pollable;
    }
    getKeyUp() {
        throw new Todo;
    }
    subscribeKeyDown() {
        const pollable = new Pollable();
        this.canvas.addEventListener('keydown', event => {
            throw new Todo;
        });
        return pollable;
    }
    getKeyDown() {
        throw new Todo;
    }
    handlePointerUp(event) {
        throw new Todo;
    }
    handlePointerDown(event) {
        throw new Todo;
    }
    handlePointerMove(event) {
        throw new Todo;
    }
    handleKeyUp(event) {
        throw new Todo;
    }
    handleKeyDown(event) {
        throw new Todo;
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
    if (name === "texture-compression-astc-sliced3d" || name === "float32-blendable")
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
function convertTextureViewDimensionWasiToWeb(name) {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "3d";
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
const inner = Symbol("inner");
const key = Symbol("key");
function privateConstructorCalled(k) {
    if (k !== key)
        throw new TypeError("Illegal constructor.");
}
class Gpu {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    async requestAdapter(options) {
        const adapter = await this[inner].requestAdapter(options);
        if (adapter)
            return new GpuAdapter(key, adapter);
        return undefined;
    }
    getPreferredCanvasFormat() {
        return convertTextureFormatWebToWasi(navigator.gpu.getPreferredCanvasFormat());
    }
    wgslLanguageFeatures() {
        throw new Todo;
    }
}
class GpuAdapter {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    features() {
        throw new Todo;
    }
    limits() {
        throw new Todo;
    }
    info() {
        throw new Todo;
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
        return new GpuDevice(key, device);
    }
}
class GpuDevice {
    [inner];
    #context;
    constructor(k, i) {
        privateConstructorCalled(k);
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
        throw new Todo;
    }
    limits() {
        throw new Todo;
    }
    adapterInfo() {
        throw new Todo;
    }
    queue() {
        return new GpuQueue(key, this[inner].queue);
    }
    destroy() {
        throw new Todo;
    }
    createBuffer(descriptor) {
        throw new Todo;
    }
    createTexture(descriptor) {
        throw new Todo;
    }
    createSampler(descriptor) {
        throw new Todo;
    }
    createBindGroupLayout(descriptor) {
        throw new Todo;
    }
    createPipelineLayout(descriptor) {
        return new GpuPipelineLayout(key, this[inner].createPipelineLayout({
            ...descriptor,
            bindGroupLayouts: descriptor.bindGroupLayouts.map(bindGroupLayout => {
                if (bindGroupLayout)
                    return bindGroupLayout[inner];
                return undefined;
            }),
        }));
    }
    createBindGroup(descriptor) {
        throw new Todo;
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
        return new GpuShaderModule(key, this[inner].createShaderModule({
            ...descriptor,
            compilationHints,
        }));
    }
    createComputePipeline(descriptor) {
        throw new Todo;
    }
    createRenderPipeline(descriptor) {
        let buffers = undefined;
        if (descriptor.vertex.buffers) {
            buffers = descriptor.vertex.buffers.map(vbl => {
                if (vbl) {
                    return {
                        ...vbl,
                        arrayStride: Number(vbl.arrayStride),
                        attributes: Array.from(vbl.attributes).map(attribute => {
                            return {
                                ...attribute,
                                offset: Number(attribute.offset),
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
        return new GpuRenderPipeline(key, this[inner].createRenderPipeline({
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
        return new GpuCommandEncoder(key, this[inner].createCommandEncoder({
            ...descriptor,
        }));
    }
    createRenderBundleEncoder(descriptor) {
        throw new Todo;
    }
    createQuerySet(descriptor) {
        throw new Todo;
    }
    lost() {
        throw new Todo;
    }
    pushErrorScope(filter) {
        throw new Todo;
    }
    popErrorScope() {
        throw new Todo;
    }
    onuncapturederrorSubscribe() {
        throw new Todo;
    }
    connectGraphicsContext(context) {
        context.__connectDrawApi(this);
    }
}
class GpuAdapterInfo {
    vendor() {
        throw new Todo;
    }
    architecture() {
        throw new Todo;
    }
    device() {
        throw new Todo;
    }
    description() {
        throw new Todo;
    }
    subgroupMinSize() {
        throw new Todo;
    }
    subgroupMaxSize() {
        throw new Todo;
    }
}
class GpuBindGroup {
}
class GpuBindGroupLayout {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
}
class GpuBuffer {
    size() {
        throw new Todo;
    }
    usage() {
        throw new Todo;
    }
    mapState() {
        throw new Todo;
    }
    mapAsync(mode, offset, size) {
        throw new Todo;
    }
    getMappedRangeGetWithCopy(offset, size) {
        throw new Todo;
    }
    unmap() {
        throw new Todo;
    }
    destroy() {
        throw new Todo;
    }
    getMappedRangeSetWithCopy(data, offset, size) {
        throw new Todo;
    }
}
class GpuBufferUsage {
    static mapRead() {
        throw new Todo;
    }
    static mapWrite() {
        throw new Todo;
    }
    static copySrc() {
        throw new Todo;
    }
    static copyDst() {
        throw new Todo;
    }
    static index() {
        throw new Todo;
    }
    static vertex() {
        throw new Todo;
    }
    static uniform() {
        throw new Todo;
    }
    static storage() {
        throw new Todo;
    }
    static indirect() {
        throw new Todo;
    }
    static queryResolve() {
        throw new Todo;
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
        throw new Todo;
    }
    static green() {
        throw new Todo;
    }
    static blue() {
        throw new Todo;
    }
    static alpha() {
        throw new Todo;
    }
    static all() {
        throw new Todo;
    }
}
class GpuCommandBuffer {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
}
class GpuCommandEncoder {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    beginRenderPass(descriptor) {
        let colorAttachments = Array.from(descriptor.colorAttachments).map(colorAttachment => {
            let resolveTarget;
            if (colorAttachment?.resolveTarget)
                resolveTarget = colorAttachment.resolveTarget[inner];
            if (colorAttachment) {
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
        return new GpuRenderPassEncoder(key, this[inner].beginRenderPass({
            colorAttachments
        }));
    }
    beginComputePass(descriptor) {
        throw new Todo;
    }
    copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size) {
        throw new Todo;
    }
    copyBufferToTexture(source, destination, copySize) {
        throw new Todo;
    }
    copyTextureToBuffer(source, destination, copySize) {
        throw new Todo;
    }
    copyTextureToTexture(source, destination, copySize) {
        throw new Todo;
    }
    clearBuffer(buffer, offset, size) {
        throw new Todo;
    }
    resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset) {
        throw new Todo;
    }
    finish(descriptor) {
        return new GpuCommandBuffer(key, this[inner].finish({
            ...descriptor
        }));
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
}
class GpuCompilationInfo {
    messages() { throw new Todo; }
}
class GpuCompilationMessage {
    message() {
        throw new Todo;
    }
    type() {
        throw new Todo;
    }
    lineNum() {
        throw new Todo;
    }
    linePos() {
        throw new Todo;
    }
    offset() {
        throw new Todo;
    }
    length() {
        throw new Todo;
    }
}
class GpuComputePassEncoder {
    setPipeline(pipeline) {
        throw new Todo;
    }
    dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ) {
        throw new Todo;
    }
    dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
    end() {
        throw new Todo;
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        throw new Todo;
    }
}
class GpuComputePipeline {
    getBindGroupLayout(index) {
        throw new Todo;
    }
}
class GpuMapMode {
    static read() {
        throw new Todo;
    }
    static write() {
        throw new Todo;
    }
}
class GpuPipelineLayout {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
}
class GpuQuerySet {
    destroy() {
        throw new Todo;
    }
    type() {
        throw new Todo;
    }
    count() {
        throw new Todo;
    }
}
class GpuQueue {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    submit(commandBuffers) {
        return this[inner].submit(commandBuffers.map(c => c[inner]));
    }
    onSubmittedWorkDone() {
        throw new Todo;
    }
    writeBufferWithCopy(buffer, bufferOffset, data, dataOffset, size) {
        throw new Todo;
    }
    writeTextureWithCopy(destination, data, dataLayout, size) {
        throw new Todo;
    }
}
class GpuRenderBundle {
}
class GpuRenderBundleEncoder {
    finish(descriptor) {
        throw new Todo;
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        throw new Todo;
    }
    setPipeline(pipeline) {
        throw new Todo;
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        throw new Todo;
    }
    setVertexBuffer(slot, buffer, offset, size) {
        throw new Todo;
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        throw new Todo;
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        throw new Todo;
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
}
class GpuRenderPassEncoder {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    setViewport(x, y, width, height, minDepth, maxDepth) {
        throw new Todo;
    }
    setScissorRect(x, y, width, height) {
        throw new Todo;
    }
    setBlendConstant(color) {
        throw new Todo;
    }
    setStencilReference(reference) {
        throw new Todo;
    }
    beginOcclusionQuery(queryIndex) {
        throw new Todo;
    }
    endOcclusionQuery() {
        throw new Todo;
    }
    executeBundles(bundles) {
        throw new Todo;
    }
    end() {
        return this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        throw new Todo;
    }
    setPipeline(pipeline) {
        return this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        throw new Todo;
    }
    setVertexBuffer(slot, buffer, offset, size) {
        throw new Todo;
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        return this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        throw new Todo;
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
}
class GpuRenderPipeline {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    getBindGroupLayout(index) {
        throw new Todo;
    }
}
class GpuSampler {
}
class GpuShaderModule {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    getCompilationInfo() {
        throw new Todo;
    }
}
class GpuShaderStage {
    static vertex() {
        throw new Todo;
    }
    static fragment() {
        throw new Todo;
    }
    static compute() {
        throw new Todo;
    }
}
class GpuSupportedFeatures {
    has(value) {
        throw new Todo;
    }
}
class GpuSupportedLimits {
    maxTextureDimension1D() {
        throw new Todo;
    }
    maxTextureDimension2D() {
        throw new Todo;
    }
    maxTextureDimension3D() {
        throw new Todo;
    }
    maxTextureArrayLayers() {
        throw new Todo;
    }
    maxBindGroups() {
        throw new Todo;
    }
    maxBindGroupsPlusVertexBuffers() {
        throw new Todo;
    }
    maxBindingsPerBindGroup() {
        throw new Todo;
    }
    maxDynamicUniformBuffersPerPipelineLayout() {
        throw new Todo;
    }
    maxDynamicStorageBuffersPerPipelineLayout() {
        throw new Todo;
    }
    maxSampledTexturesPerShaderStage() {
        throw new Todo;
    }
    maxSamplersPerShaderStage() {
        throw new Todo;
    }
    maxStorageBuffersPerShaderStage() {
        throw new Todo;
    }
    maxStorageTexturesPerShaderStage() {
        throw new Todo;
    }
    maxUniformBuffersPerShaderStage() {
        throw new Todo;
    }
    maxUniformBufferBindingSize() {
        throw new Todo;
    }
    maxStorageBufferBindingSize() {
        throw new Todo;
    }
    minUniformBufferOffsetAlignment() {
        throw new Todo;
    }
    minStorageBufferOffsetAlignment() {
        throw new Todo;
    }
    maxVertexBuffers() {
        throw new Todo;
    }
    maxBufferSize() {
        throw new Todo;
    }
    maxVertexAttributes() {
        throw new Todo;
    }
    maxVertexBufferArrayStride() {
        throw new Todo;
    }
    maxInterStageShaderVariables() {
        throw new Todo;
    }
    maxColorAttachments() {
        throw new Todo;
    }
    maxColorAttachmentBytesPerSample() {
        throw new Todo;
    }
    maxComputeWorkgroupStorageSize() {
        throw new Todo;
    }
    maxComputeInvocationsPerWorkgroup() {
        throw new Todo;
    }
    maxComputeWorkgroupSizeX() {
        throw new Todo;
    }
    maxComputeWorkgroupSizeY() {
        throw new Todo;
    }
    maxComputeWorkgroupSizeZ() {
        throw new Todo;
    }
    maxComputeWorkgroupsPerDimension() {
        throw new Todo;
    }
}
class GpuTexture {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    createView(descriptor) {
        let format;
        if (descriptor?.format)
            format = convertTextureFormatWasiToWeb(descriptor.format);
        let dimension;
        if (descriptor?.dimension)
            dimension = convertTextureViewDimensionWasiToWeb(descriptor.dimension);
        return new GpuTextureView(key, this[inner].createView({
            ...descriptor,
            dimension,
            format,
        }));
    }
    destroy() {
        throw new Todo;
    }
    width() {
        throw new Todo;
    }
    height() {
        throw new Todo;
    }
    depthOrArrayLayers() {
        throw new Todo;
    }
    mipLevelCount() {
        throw new Todo;
    }
    sampleCount() {
        throw new Todo;
    }
    dimension() {
        throw new Todo;
    }
    format() {
        throw new Todo;
    }
    usage() {
        throw new Todo;
    }
    static fromGraphicsBuffer(buffer) {
        return new GpuTexture(key, buffer.buffer);
    }
}
class GpuTextureUsage {
    static copySrc() {
        throw new Todo;
    }
    static copyDst() {
        throw new Todo;
    }
    static textureBinding() {
        throw new Todo;
    }
    static storageBinding() {
        throw new Todo;
    }
    static renderAttachment() {
        throw new Todo;
    }
}
class GpuTextureView {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
}
class GpuUncapturedErrorEvent {
    error() {
        throw new Todo;
    }
}
class RecordGpuPipelineConstantValue {
    map = new Map();
    add(key, value) {
        throw new Todo;
    }
    get(key) {
        throw new Todo;
    }
    has(key) {
        throw new Todo;
    }
    remove(key) {
        throw new Todo;
    }
    keys() {
        throw new Todo;
    }
    values() {
        throw new Todo;
    }
    entries() {
        throw new Todo;
    }
}
class RecordOptionGpuSize64 {
    map = new Map();
    add(key, value) {
        throw new Todo;
    }
    get(key) {
        throw new Todo;
    }
    has(key) {
        throw new Todo;
    }
    remove(key) {
        throw new Todo;
    }
    keys() {
        throw new Todo;
    }
    values() {
        throw new Todo;
    }
    entries() {
        throw new Todo;
    }
}
class WgslLanguageFeatures {
    has(value) {
        throw new Todo;
    }
}
class GpuDeviceLostInfo {
    constructor() { }
    reason() {
        throw new Todo;
    }
    message() {
        throw new Todo;
    }
}
class GpuError {
    constructor() { }
    message() {
        throw new Todo;
    }
    kind() {
        throw new Todo;
    }
}
function getGpu() {
    return new Gpu(key, navigator.gpu);
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
