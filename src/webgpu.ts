import type { KebabCase } from "type-fest";

import { NotAllowed, Todo, Unreachable } from "./common.js";

import * as wit from "../types/interfaces/wasi-webgpu-webgpu.js";
import { interfaceKeys, objectKeys } from "./flags-helpers.js";

export function convertLimitWasiToWeb(
    limit: WasiSupportedLimitString,
): keyof GPUSupportedLimits {
    switch (limit) {
        case "max-texture-dimension1-d":
            return "maxTextureDimension1D";
        case "max-texture-dimension2-d":
            return "maxTextureDimension2D";
        case "max-texture-dimension3-d":
            return "maxTextureDimension3D";
        case "max-texture-array-layers":
            return "maxTextureArrayLayers";
        case "max-bind-groups":
            return "maxBindGroups";
        case "max-bind-groups-plus-vertex-buffers":
            return "maxBindGroupsPlusVertexBuffers";
        case "max-immediate-size":
            return "maxImmediateSize";
        case "max-bindings-per-bind-group":
            return "maxBindingsPerBindGroup";
        case "max-dynamic-uniform-buffers-per-pipeline-layout":
            return "maxDynamicUniformBuffersPerPipelineLayout";
        case "max-dynamic-storage-buffers-per-pipeline-layout":
            return "maxDynamicStorageBuffersPerPipelineLayout";
        case "max-sampled-textures-per-shader-stage":
            return "maxSampledTexturesPerShaderStage";
        case "max-samplers-per-shader-stage":
            return "maxSamplersPerShaderStage";
        case "max-storage-buffers-per-shader-stage":
            return "maxStorageBuffersPerShaderStage";
        case "max-storage-buffers-in-vertex-stage":
            return "maxStorageBuffersInVertexStage";
        case "max-storage-buffers-in-fragment-stage":
            return "maxStorageBuffersInFragmentStage";
        case "max-storage-textures-per-shader-stage":
            return "maxStorageTexturesPerShaderStage";
        case "max-storage-textures-in-vertex-stage":
            return "maxStorageTexturesInVertexStage";
        case "max-storage-textures-in-fragment-stage":
            return "maxStorageTexturesInFragmentStage";
        case "max-uniform-buffers-per-shader-stage":
            return "maxUniformBuffersPerShaderStage";
        case "max-uniform-buffer-binding-size":
            return "maxUniformBufferBindingSize";
        case "max-storage-buffer-binding-size":
            return "maxStorageBufferBindingSize";
        case "min-uniform-buffer-offset-alignment":
            return "minUniformBufferOffsetAlignment";
        case "min-storage-buffer-offset-alignment":
            return "minStorageBufferOffsetAlignment";
        case "max-vertex-buffers":
            return "maxVertexBuffers";
        case "max-buffer-size":
            return "maxBufferSize";
        case "max-vertex-attributes":
            return "maxVertexAttributes";
        case "max-vertex-buffer-array-stride":
            return "maxVertexBufferArrayStride";
        case "max-inter-stage-shader-variables":
            return "maxInterStageShaderVariables";
        case "max-color-attachments":
            return "maxColorAttachments";
        case "max-color-attachment-bytes-per-sample":
            return "maxColorAttachmentBytesPerSample";
        case "max-compute-workgroup-storage-size":
            return "maxComputeWorkgroupStorageSize";
        case "max-compute-invocations-per-workgroup":
            return "maxComputeInvocationsPerWorkgroup";
        case "max-compute-workgroup-size-x":
            return "maxComputeWorkgroupSizeX";
        case "max-compute-workgroup-size-y":
            return "maxComputeWorkgroupSizeY";
        case "max-compute-workgroup-size-z":
            return "maxComputeWorkgroupSizeZ";
        case "max-compute-workgroups-per-dimension":
            return "maxComputeWorkgroupsPerDimension";
        default:
            limit satisfies never;
            throw new Unreachable();
    }
}

export function convertFeatureNameWasiToWeb(
    name: wit.GpuFeatureName,
): GPUFeatureName {
    if (name === "texture-compression-bc-sliced3d")
        return "texture-compression-bc-sliced-3d";
    if (name === "texture-compression-astc-sliced3d") throw new Todo();
    return name;
}

export function convertTextureFormatWebToWasi(
    name: GPUTextureFormat,
): wit.GpuTextureFormat {
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

export function convertTextureFormatWasiToWeb(
    name: wit.GpuTextureFormat,
): GPUTextureFormat {
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

export function convertVertexFormatWasiToWeb(
    name: wit.GpuVertexFormat,
): GPUVertexFormat {
    switch (name) {
        case "unorm1010102":
            return "unorm10-10-10-2";
        default:
            return name;
    }
}

export function convertTextureDimensionWebToWasi(
    name: GPUTextureDimension,
): wit.GpuTextureDimension {
    name = name.toLowerCase() as GPUTextureDimension;
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d2";
        case "3d":
            return "d3";
        default:
            name satisfies never;
            throw new Unreachable();
    }
}

export function convertTextureDimensionWasiToWeb(
    name: wit.GpuTextureDimension,
): GPUTextureDimension {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "2d";
        case "d3":
            return "3d";
        default:
            name satisfies never;
            throw new Unreachable();
    }
}

export function convertTextureViewDimensionWebToWasi(
    name: GPUTextureViewDimension,
): wit.GpuTextureViewDimension {
    name = name.toLowerCase() as GPUTextureViewDimension;
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d2";
        case "3d":
            return "d3";
        case "2d-array":
            return "d2-array";
        default:
            return name;
    }
}

export function convertTextureViewDimensionWasiToWeb(
    name: wit.GpuTextureViewDimension,
): GPUTextureViewDimension {
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

export function convertGpuLayoutWasiToWeb(
    layout: wit.GpuLayoutMode,
): GPUAutoLayoutMode | GPUPipelineLayout {
    switch (layout.tag) {
        case "specific":
            return (layout.val as GpuPipelineLayout)[inner];
        case "auto":
            return "auto";
        default:
            layout satisfies never;
            throw new Unreachable();
    }
}

export function convertBufferUsageWasiToWeb(
    usage: wit.GpuBufferUsage,
): GPUBufferUsageFlags {
    const witBufferUsageFlags = interfaceKeys<wit.GpuBufferUsage>([
        "mapRead",
        "mapWrite",
        "copySrc",
        "copyDst",
        "index",
        "vertex",
        "uniform",
        "storage",
        "indirect",
        "queryResolve",
    ]);

    let output: GPUBufferUsageFlags = 0;
    for (let flag of witBufferUsageFlags) {
        if (usage[flag]) {
            switch (flag) {
                case "mapRead":
                    output |= GPUBufferUsage.MAP_READ;
                    break;
                case "mapWrite":
                    output |= GPUBufferUsage.MAP_WRITE;
                    break;
                case "copySrc":
                    output |= GPUBufferUsage.COPY_SRC;
                    break;
                case "copyDst":
                    output |= GPUBufferUsage.COPY_DST;
                    break;
                case "index":
                    output |= GPUBufferUsage.INDEX;
                    break;
                case "vertex":
                    output |= GPUBufferUsage.VERTEX;
                    break;
                case "uniform":
                    output |= GPUBufferUsage.UNIFORM;
                    break;
                case "storage":
                    output |= GPUBufferUsage.STORAGE;
                    break;
                case "indirect":
                    output |= GPUBufferUsage.INDIRECT;
                    break;
                case "queryResolve":
                    output |= GPUBufferUsage.QUERY_RESOLVE;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertBufferUsageWebToWasi(
    usage: GPUBufferUsageFlags,
): wit.GpuBufferUsage {
    let output: wit.GpuBufferUsage = {};
    for (let flag of objectKeys(GPUBufferUsage)) {
        if ((usage & GPUBufferUsage[flag]) !== 0) {
            switch (flag) {
                case "MAP_READ":
                    output.mapRead = true;
                    break;
                case "MAP_WRITE":
                    output.mapWrite = true;
                    break;
                case "COPY_SRC":
                    output.copySrc = true;
                    break;
                case "COPY_DST":
                    output.copyDst = true;
                    break;
                case "INDEX":
                    output.index = true;
                    break;
                case "VERTEX":
                    output.vertex = true;
                    break;
                case "UNIFORM":
                    output.uniform = true;
                    break;
                case "STORAGE":
                    output.storage = true;
                    break;
                case "INDIRECT":
                    output.indirect = true;
                    break;
                case "QUERY_RESOLVE":
                    output.queryResolve = true;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertTextureUsageWasiToWeb(
    usage: wit.GpuTextureUsage,
): GPUTextureUsageFlags {
    const witTextureUsageFlags = interfaceKeys<wit.GpuTextureUsage>([
        "copySrc",
        "copyDst",
        "textureBinding",
        "storageBinding",
        "renderAttachment",
        "transientAttachment",
    ]);
    let output: GPUTextureUsageFlags = 0;
    for (let flag of witTextureUsageFlags) {
        if (usage[flag]) {
            switch (flag) {
                case "copySrc":
                    output |= GPUTextureUsage.COPY_SRC;
                    break;
                case "copyDst":
                    output |= GPUTextureUsage.COPY_DST;
                    break;
                case "textureBinding":
                    output |= GPUTextureUsage.TEXTURE_BINDING;
                    break;
                case "storageBinding":
                    output |= GPUTextureUsage.STORAGE_BINDING;
                    break;
                case "renderAttachment":
                    output |= GPUTextureUsage.RENDER_ATTACHMENT;
                    break;
                case "transientAttachment":
                    output |= GPUTextureUsage.TRANSIENT_ATTACHMENT;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertTextureUsageWebToWasi(
    usage: GPUTextureUsageFlags,
): wit.GpuTextureUsage {
    let output: wit.GpuTextureUsage = {};
    for (let flag of objectKeys(GPUTextureUsage)) {
        if ((usage & GPUTextureUsage[flag]) !== 0) {
            switch (flag) {
                case "COPY_SRC":
                    output.copySrc = true;
                    break;
                case "COPY_DST":
                    output.copyDst = true;
                    break;
                case "TEXTURE_BINDING":
                    output.textureBinding = true;
                    break;
                case "STORAGE_BINDING":
                    output.storageBinding = true;
                    break;
                case "RENDER_ATTACHMENT":
                    output.renderAttachment = true;
                    break;
                case "TRANSIENT_ATTACHMENT":
                    output.transientAttachment = true;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertColorWriteWasiToWeb(
    usage: wit.GpuColorWrite,
): GPUColorWriteFlags {
    const witColorWriteFlags = interfaceKeys<wit.GpuColorWrite>([
        "red",
        "green",
        "blue",
        "alpha",
        "all",
    ]);
    let output: GPUColorWriteFlags = 0;
    for (let flag of witColorWriteFlags) {
        if (usage[flag]) {
            switch (flag) {
                case "red":
                    output |= GPUColorWrite.RED;
                    break;
                case "green":
                    output |= GPUColorWrite.GREEN;
                    break;
                case "blue":
                    output |= GPUColorWrite.BLUE;
                    break;
                case "alpha":
                    output |= GPUColorWrite.ALPHA;
                    break;
                case "all":
                    output |= GPUColorWrite.ALL;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertColorWriteWebToWasi(
    usage: GPUColorWriteFlags,
): wit.GpuColorWrite {
    let output: wit.GpuColorWrite = {};
    for (let flag of objectKeys(GPUColorWrite)) {
        if ((usage & GPUColorWrite[flag]) !== 0) {
            switch (flag) {
                case "RED":
                    output.red = true;
                    break;
                case "GREEN":
                    output.green = true;
                    break;
                case "BLUE":
                    output.blue = true;
                    break;
                case "ALPHA":
                    output.alpha = true;
                    break;
                case "ALL":
                    output.all = true;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertShaderStageWasiToWeb(
    usage: wit.GpuShaderStage,
): GPUShaderStageFlags {
    const witShaderStageFlags = interfaceKeys<wit.GpuShaderStage>([
        "vertex",
        "fragment",
        "compute",
    ]);
    let output: GPUShaderStageFlags = 0;
    for (let flag of witShaderStageFlags) {
        if (usage[flag]) {
            switch (flag) {
                case "vertex":
                    output |= GPUShaderStage.VERTEX;
                    break;
                case "fragment":
                    output |= GPUShaderStage.FRAGMENT;
                    break;
                case "compute":
                    output |= GPUShaderStage.COMPUTE;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertShaderStageWebToWasi(
    usage: GPUShaderStageFlags,
): wit.GpuShaderStage {
    let output: wit.GpuShaderStage = {};
    for (let flag of objectKeys(GPUShaderStage)) {
        if ((usage & GPUShaderStage[flag]) !== 0) {
            switch (flag) {
                case "VERTEX":
                    output.vertex = true;
                    break;
                case "FRAGMENT":
                    output.fragment = true;
                    break;
                case "COMPUTE":
                    output.compute = true;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertMapModeWasiToWeb(
    usage: wit.GpuMapMode,
): GPUMapModeFlags {
    const witmapModeFlags = interfaceKeys<wit.GpuMapMode>(["read", "write"]);
    let output: GPUMapModeFlags = 0;
    for (let flag of witmapModeFlags) {
        if (usage[flag]) {
            switch (flag) {
                case "read":
                    output |= GPUMapMode.READ;
                    break;
                case "write":
                    output |= GPUMapMode.WRITE;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

export function convertMapModeWebToWasi(
    usage: GPUMapModeFlags,
): wit.GpuMapMode {
    let output: wit.GpuMapMode = {};
    for (let flag of objectKeys(GPUMapMode)) {
        if ((usage & GPUMapMode[flag]) !== 0) {
            switch (flag) {
                case "READ":
                    output.read = true;
                    break;
                case "WRITE":
                    output.write = true;
                    break;
                default:
                    flag satisfies never;
                    throw new Unreachable();
            }
        }
    }
    return output;
}

function bigIntToNumber(bigInt: bigint): number {
    return Number(bigInt);
}
function numberToBigInt(number: number): bigint {
    return BigInt(number);
}

/// Get the inner objects of GPU objects
/// This is meant for internal use and is not guaranteed to be stable
export const inner = Symbol("inner");

export class Gpu implements wit.Gpu {
    [inner]: globalThis.GPU;

    constructor(i?: globalThis.GPU) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }

    async requestAdapter(
        options?: wit.GpuRequestAdapterOptions,
    ): Promise<wit.GpuAdapter | undefined> {
        const adapter = await this[inner].requestAdapter(options);
        if (adapter) return new GpuAdapter(adapter);
        return undefined;
    }

    getPreferredCanvasFormat(): wit.GpuTextureFormat {
        return convertTextureFormatWebToWasi(
            navigator.gpu.getPreferredCanvasFormat(),
        );
    }

    wgslLanguageFeatures(): WgslLanguageFeatures {
        return new WgslLanguageFeatures(this[inner].wgslLanguageFeatures);
    }
}

export class GpuAdapter implements wit.GpuAdapter {
    [inner]: globalThis.GPUAdapter;

    constructor(i?: globalThis.GPUAdapter) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }

    features(): wit.GpuSupportedFeatures {
        return new GpuSupportedFeatures(this[inner].features);
    }

    limits(): wit.GpuSupportedLimits {
        return new GpuSupportedLimits(this[inner].limits);
    }

    info(): wit.GpuAdapterInfo {
        return new GpuAdapterInfo(this[inner].info);
    }

    isFallbackAdapter(): boolean {
        return this[inner].info.isFallbackAdapter;
    }

    async requestDevice(
        descriptor?: wit.GpuDeviceDescriptor,
    ): Promise<wit.GpuDevice> {
        if (!descriptor) descriptor = {};

        let requiredFeatures: GPUFeatureName[] | undefined;
        if (descriptor.requiredFeatures)
            requiredFeatures = Array.from(descriptor.requiredFeatures).map(
                convertFeatureNameWasiToWeb,
            );

        let requiredLimits: Record<string, number | undefined> | undefined;
        if (descriptor.requiredLimits) {
            const entries = descriptor.requiredLimits
                .entries()
                .map(([wasiKey, wasiValue]) => {
                    let webValue: number | undefined;
                    if (typeof wasiValue !== "undefined")
                        webValue = bigIntToNumber(wasiValue);
                    const webKey = convertLimitWasiToWeb(
                        wasiKey as WasiSupportedLimitString,
                    );
                    return [webKey, webValue];
                });
            requiredLimits = Object.fromEntries(entries);
        }
        const device = await this[inner].requestDevice({
            ...descriptor,
            requiredFeatures,
            requiredLimits,
        });
        return new GpuDevice(device);
    }
}

export class GpuDevice implements wit.GpuDevice {
    [inner]: globalThis.GPUDevice;
    constructor(i?: globalThis.GPUDevice) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    features(): wit.GpuSupportedFeatures {
        return new GpuSupportedFeatures(this[inner].features);
    }
    limits(): wit.GpuSupportedLimits {
        return new GpuSupportedLimits(this[inner].limits);
    }
    adapterInfo(): wit.GpuAdapterInfo {
        return new GpuAdapterInfo(this[inner].adapterInfo);
    }
    queue(): wit.GpuQueue {
        return new GpuQueue(this[inner].queue);
    }
    destroy(): void {
        return this[inner].destroy();
    }
    createBuffer(descriptor: wit.GpuBufferDescriptor): wit.GpuBuffer {
        return new GpuBuffer(
            this[inner].createBuffer({
                ...descriptor,
                usage: convertBufferUsageWasiToWeb(descriptor.usage),
                size: bigIntToNumber(descriptor.size),
            }),
        );
    }
    createTexture(descriptor: wit.GpuTextureDescriptor): wit.GpuTexture {
        let dimension: GPUTextureDimension | undefined;
        if (descriptor.dimension) {
            dimension = convertTextureDimensionWasiToWeb(descriptor.dimension);
        }
        let format: GPUTextureFormat | undefined;
        if (descriptor.format) {
            format = convertTextureFormatWasiToWeb(descriptor.format);
        }
        let viewFormats: GPUTextureFormat[] | undefined;
        if (descriptor.viewFormats) {
            viewFormats = descriptor.viewFormats.map(
                convertTextureFormatWasiToWeb,
            );
        }
        let textureBindingViewDimension: GPUTextureViewDimension | undefined;
        if (descriptor.textureBindingViewDimension) {
            textureBindingViewDimension = convertTextureViewDimensionWasiToWeb(
                descriptor.textureBindingViewDimension,
            );
        }
        return new GpuTexture(
            this[inner].createTexture({
                ...descriptor,
                usage: convertTextureUsageWasiToWeb(descriptor.usage),
                dimension,
                format: convertTextureFormatWasiToWeb(descriptor.format),
                viewFormats,
                textureBindingViewDimension,
            }),
        );
    }
    createSampler(descriptor?: wit.GpuSamplerDescriptor): wit.GpuSampler {
        return new GpuSampler(this[inner].createSampler(descriptor));
    }
    createBindGroupLayout(
        descriptor: wit.GpuBindGroupLayoutDescriptor,
    ): wit.GpuBindGroupLayout {
        return new GpuBindGroupLayout(
            this[inner].createBindGroupLayout({
                ...descriptor,
                entries: descriptor.entries.map((entry) => {
                    let buffer: GPUBufferBindingLayout | undefined;
                    if (entry.buffer) {
                        let minBindingSize: number | undefined;
                        if (entry.buffer.minBindingSize) {
                            minBindingSize = bigIntToNumber(
                                entry.buffer.minBindingSize,
                            );
                        }
                        buffer = {
                            ...entry.buffer,
                            minBindingSize,
                        };
                    }
                    let sampler: GPUSamplerBindingLayout | undefined;
                    if (entry.sampler) {
                        sampler = {
                            ...entry.sampler,
                        };
                    }
                    let texture: GPUTextureBindingLayout | undefined;
                    if (entry.texture) {
                        let viewDimension: GPUTextureViewDimension | undefined;
                        if (entry.texture.viewDimension) {
                            viewDimension =
                                convertTextureViewDimensionWasiToWeb(
                                    entry.texture.viewDimension,
                                );
                        }
                        texture = {
                            ...entry.texture,
                            viewDimension,
                        };
                    }
                    let storageTexture:
                        GPUStorageTextureBindingLayout | undefined;
                    if (entry.storageTexture) {
                        let viewDimension: GPUTextureViewDimension | undefined;
                        if (entry.storageTexture.viewDimension) {
                            viewDimension =
                                convertTextureViewDimensionWasiToWeb(
                                    entry.storageTexture.viewDimension,
                                );
                        }
                        storageTexture = {
                            ...entry.storageTexture,
                            format: convertTextureFormatWasiToWeb(
                                entry.storageTexture.format,
                            ),
                            viewDimension,
                        };
                    }
                    return {
                        ...entry,
                        buffer,
                        sampler,
                        texture,
                        storageTexture,
                        visibility: convertShaderStageWasiToWeb(
                            entry.visibility,
                        ),
                    };
                }),
            }),
        );
    }
    createPipelineLayout(
        descriptor: wit.GpuPipelineLayoutDescriptor,
    ): wit.GpuPipelineLayout {
        return new GpuPipelineLayout(
            this[inner].createPipelineLayout({
                ...descriptor,
                bindGroupLayouts: descriptor.bindGroupLayouts.map(
                    (bindGroupLayout) => {
                        if (bindGroupLayout)
                            return (bindGroupLayout as GpuBindGroupLayout)[
                                inner
                            ];
                        return undefined;
                    },
                ),
            }),
        );
    }
    createBindGroup(descriptor: wit.GpuBindGroupDescriptor): wit.GpuBindGroup {
        return new GpuBindGroup(
            this[inner].createBindGroup({
                ...descriptor,
                layout: (descriptor.layout as GpuBindGroupLayout)[inner],
                entries: descriptor.entries.map((entry) => {
                    let resource: GPUBindingResource;
                    switch (entry.resource.tag) {
                        case "gpu-buffer":
                            resource = (entry.resource.val as GpuBuffer)[inner];
                            break;
                        case "gpu-buffer-binding":
                            let offset: number | undefined;
                            if (entry.resource.val.offset) {
                                offset = bigIntToNumber(
                                    entry.resource.val.offset,
                                );
                            }
                            let size: number | undefined;
                            if (entry.resource.val.size) {
                                size = bigIntToNumber(entry.resource.val.size);
                            }
                            resource = {
                                ...entry.resource.val,
                                buffer: (
                                    entry.resource.val.buffer as GpuBuffer
                                )[inner],
                                offset,
                                size,
                            };
                            break;
                        case "gpu-sampler":
                            resource = (entry.resource.val as GpuSampler)[
                                inner
                            ];
                            break;
                        case "gpu-texture-view":
                            resource = (entry.resource.val as GpuTextureView)[
                                inner
                            ];
                            break;
                        case "gpu-texture":
                            resource = (entry.resource.val as GpuTexture)[
                                inner
                            ];
                            break;
                        default:
                            entry.resource satisfies never;
                            throw new Unreachable();
                    }
                    return {
                        ...entry,
                        resource,
                    };
                }),
            }),
        );
    }
    createShaderModule(
        descriptor: wit.GpuShaderModuleDescriptor,
    ): wit.GpuShaderModule {
        let compilationHints: GPUShaderModuleCompilationHint[] | undefined;
        if (descriptor.compilationHints) {
            compilationHints = descriptor.compilationHints.map((hint) => {
                let layout: GPUAutoLayoutMode | GPUPipelineLayout | undefined;
                if (hint.layout) {
                    layout = convertGpuLayoutWasiToWeb(hint.layout);
                }
                return {
                    ...hint,
                    layout,
                };
            });
        }
        return new GpuShaderModule(
            this[inner].createShaderModule({
                ...descriptor,
                compilationHints,
            }),
        );
    }
    createComputePipeline(
        descriptor: wit.GpuComputePipelineDescriptor,
    ): wit.GpuComputePipeline {
        let constants: Record<string, GPUPipelineConstantValue> | undefined;
        if (descriptor.compute.constants) {
            constants = Object.fromEntries(
                descriptor.compute.constants.entries(),
            );
        }

        return new GpuComputePipeline(
            this[inner].createComputePipeline({
                ...descriptor,
                compute: {
                    ...descriptor.compute,
                    module: (descriptor.compute.module as GpuShaderModule)[
                        inner
                    ],
                    constants,
                },
                layout: convertGpuLayoutWasiToWeb(descriptor.layout),
            }),
        );
    }
    createRenderPipeline(
        descriptor: wit.GpuRenderPipelineDescriptor,
    ): wit.GpuRenderPipeline {
        let buffers: (GPUVertexBufferLayout | undefined)[] | undefined =
            undefined;
        if (descriptor.vertex.buffers) {
            buffers = descriptor.vertex.buffers.map((vbl) => {
                if (vbl) {
                    return {
                        ...vbl,
                        arrayStride: bigIntToNumber(vbl.arrayStride),
                        attributes: Array.from(vbl.attributes).map(
                            (attribute) => {
                                return {
                                    ...attribute,
                                    offset: bigIntToNumber(attribute.offset),
                                    format: convertVertexFormatWasiToWeb(
                                        attribute.format,
                                    ),
                                };
                            },
                        ),
                    };
                } else {
                    return undefined;
                }
            });
        }
        let vertexConstants:
            Record<string, GPUPipelineConstantValue> | undefined;
        if (descriptor.vertex.constants) {
            vertexConstants = Object.fromEntries(
                descriptor.vertex.constants.entries(),
            );
        }
        const vertex: GPUVertexState = {
            ...descriptor.vertex,
            constants: vertexConstants,
            module: (descriptor.vertex.module as GpuShaderModule)[inner],
            buffers,
        };
        let depthStencil: GPUDepthStencilState | undefined;
        if (descriptor.depthStencil) {
            depthStencil = {
                ...descriptor.depthStencil,
                format: convertTextureFormatWasiToWeb(
                    descriptor.depthStencil.format,
                ),
            };
        }
        let fragment: GPUFragmentState | undefined;
        if (descriptor.fragment) {
            let fragmentConstants:
                Record<string, GPUPipelineConstantValue> | undefined;
            if (descriptor.fragment.constants) {
                fragmentConstants = Object.fromEntries(
                    descriptor.fragment.constants.entries(),
                );
            }
            fragment = {
                ...descriptor.fragment,
                constants: fragmentConstants,
                module: (descriptor.fragment.module as GpuShaderModule)[inner],
                targets: Array.from(descriptor.fragment.targets).map(
                    (target) => {
                        if (target) {
                            let writeMask: GPUColorWriteFlags | undefined;
                            if (target.writeMask) {
                                writeMask = convertColorWriteWasiToWeb(
                                    target.writeMask,
                                );
                            }
                            return {
                                ...target,
                                writeMask,
                                format: convertTextureFormatWasiToWeb(
                                    target.format,
                                ),
                            };
                        } else {
                            return undefined;
                        }
                    },
                ),
            };
        }

        return new GpuRenderPipeline(
            this[inner].createRenderPipeline({
                ...descriptor,
                vertex,
                depthStencil,
                fragment,
                layout: convertGpuLayoutWasiToWeb(descriptor.layout),
            }),
        );
    }
    async createComputePipelineAsync(
        descriptor: wit.GpuComputePipelineDescriptor,
    ): Promise<wit.GpuComputePipeline> {
        throw new Todo();
    }
    async createRenderPipelineAsync(
        descriptor: wit.GpuRenderPipelineDescriptor,
    ): Promise<wit.GpuRenderPipeline> {
        throw new Todo();
    }
    createCommandEncoder(
        descriptor?: wit.GpuCommandEncoderDescriptor,
    ): wit.GpuCommandEncoder {
        return new GpuCommandEncoder(
            this[inner].createCommandEncoder({
                ...descriptor,
            }),
        );
    }
    createRenderBundleEncoder(
        descriptor: wit.GpuRenderBundleEncoderDescriptor,
    ): wit.GpuRenderBundleEncoder {
        let depthStencilFormat: GPUTextureFormat | undefined;
        if (descriptor.depthStencilFormat) {
            depthStencilFormat = convertTextureFormatWasiToWeb(
                descriptor.depthStencilFormat,
            );
        }
        return new GpuRenderBundleEncoder(
            this[inner].createRenderBundleEncoder({
                ...descriptor,
                depthStencilFormat,
                colorFormats: descriptor.colorFormats.map((colorFormat) => {
                    let colorFormatWeb: GPUTextureFormat | undefined;
                    if (colorFormat)
                        colorFormatWeb =
                            convertTextureFormatWasiToWeb(colorFormat);
                    return colorFormatWeb;
                }),
            }),
        );
    }
    createQuerySet(descriptor: wit.GpuQuerySetDescriptor): wit.GpuQuerySet {
        return new GpuQuerySet(
            this[inner].createQuerySet({
                ...descriptor,
            }),
        );
    }
    lost(): Promise<wit.GpuDeviceLostInfo> {
        throw new Todo();
    }
    pushErrorScope(filter: wit.GpuErrorFilter): void {
        return this[inner].pushErrorScope(filter);
    }
    async popErrorScope(): Promise<wit.GpuError | undefined> {
        let output: wit.GpuError | undefined;
        let error = await this[inner].popErrorScope();
        if (error) {
            output = new GpuError(error);
        }
        return output;
    }
    onUncapturedError(): ReadableStream<wit.GpuError> {
        throw new Todo();
    }
}

export class GpuAdapterInfo implements wit.GpuAdapterInfo {
    [inner]: globalThis.GPUAdapterInfo;
    constructor(i?: globalThis.GPUAdapterInfo) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    isFallbackAdapter(): boolean {
        return this[inner].isFallbackAdapter;
    }
    vendor(): string {
        return this[inner].vendor;
    }
    architecture(): string {
        return this[inner].architecture;
    }
    device(): string {
        return this[inner].device;
    }
    description(): string {
        return this[inner].description;
    }
    subgroupMinSize(): number {
        // Temporarily optional in @webgpu/types. Use 0 for undefined. TODO: remove.
        return this[inner].subgroupMinSize ?? 0;
    }
    subgroupMaxSize(): number {
        // Temporarily optional in @webgpu/types. Use 0 for undefined. TODO: remove.
        return this[inner].subgroupMaxSize ?? 0;
    }
}

export class GpuBindGroup implements wit.GpuBindGroup {
    [inner]: globalThis.GPUBindGroup;
    constructor(i?: globalThis.GPUBindGroup) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}
export class GpuBindGroupLayout implements wit.GpuBindGroupLayout {
    [inner]: globalThis.GPUBindGroupLayout;
    constructor(i?: globalThis.GPUBindGroupLayout) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}
export class GpuBuffer implements wit.GpuBuffer {
    [inner]: globalThis.GPUBuffer;
    #mappedRange: Uint8Array | undefined;
    constructor(i?: globalThis.GPUBuffer) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    size(): wit.GpuSize64Out {
        return numberToBigInt(this[inner].size);
    }
    usage(): wit.GpuBufferUsage {
        return convertBufferUsageWebToWasi(this[inner].usage);
    }
    mapState(): wit.GpuBufferMapState {
        return this[inner].mapState;
    }
    async mapAsync(
        mode: wit.GpuMapMode,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): Promise<void> {
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return await this[inner].mapAsync(
            convertMapModeWasiToWeb(mode),
            offsetNumber,
            sizeNumber,
        );
    }
    getMappedRangeGetWithCopy(
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): Uint8Array {
        // TODO: letting getMappedRange be called multiple times until we figure out how to avoid the with-copy behavior
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        if (!this.#mappedRange) {
            this.#mappedRange = new Uint8Array(
                this[inner].getMappedRange(offsetNumber, sizeNumber),
            );
        }
        return this.#mappedRange;
    }
    unmap(): void {
        this.#mappedRange = undefined;
        this[inner].unmap();
    }
    destroy(): void {
        return this[inner].destroy();
    }
    getMappedRangeSetWithCopy(
        data: Uint8Array,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        // TODO: letting getMappedRange be called multiple times until we figure out how to avoid the with-copy behavior
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        if (!this.#mappedRange) {
            this.#mappedRange = new Uint8Array(
                this[inner].getMappedRange(offsetNumber, sizeNumber),
            );
        }
        this.#mappedRange.set(data);
    }
}

export class GpuCanvasContext implements wit.GpuCanvasContext {
    configure(configuration: wit.GpuCanvasConfiguration): void {
        throw new Todo();
    }
    unconfigure(): void {
        throw new Todo();
    }
    getConfiguration(): wit.GpuCanvasConfigurationOwned | undefined {
        throw new Todo();
    }
    getCurrentTexture(): wit.GpuTexture {
        throw new Todo();
    }
}

export class GpuCommandBuffer implements wit.GpuCommandBuffer {
    [inner]: globalThis.GPUCommandBuffer;
    constructor(i?: globalThis.GPUCommandBuffer) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}
export class GpuCommandEncoder implements wit.GpuCommandEncoder {
    [inner]: GPUCommandEncoder;
    constructor(i?: globalThis.GPUCommandEncoder) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    beginRenderPass(
        descriptor: wit.GpuRenderPassDescriptor,
    ): wit.GpuRenderPassEncoder {
        let colorAttachments: (GPURenderPassColorAttachment | undefined)[] =
            descriptor.colorAttachments.map((colorAttachment) => {
                if (colorAttachment) {
                    let resolveTarget: GPUTextureView | undefined;
                    if (colorAttachment?.resolveTarget)
                        resolveTarget = (
                            colorAttachment.resolveTarget as GpuTextureView
                        )[inner];
                    return {
                        ...colorAttachment,
                        view: (colorAttachment.view as GpuTextureView)[inner],
                        resolveTarget,
                    };
                } else {
                    return undefined;
                }
            });
        let occlusionQuerySet: GPUQuerySet | undefined;
        if (descriptor?.occlusionQuerySet) {
            occlusionQuerySet = (descriptor.occlusionQuerySet as GpuQuerySet)[
                inner
            ];
        }
        let timestampWrites: GPUComputePassTimestampWrites | undefined;
        if (descriptor?.timestampWrites) {
            timestampWrites = {
                ...descriptor.timestampWrites,
                querySet: (descriptor.timestampWrites.querySet as GpuQuerySet)[
                    inner
                ],
            };
        }
        let depthStencilAttachment:
            GPURenderPassDepthStencilAttachment | undefined;
        if (descriptor?.depthStencilAttachment) {
            depthStencilAttachment = {
                ...descriptor.depthStencilAttachment,
                view: (
                    descriptor.depthStencilAttachment.view as GpuTextureView
                )[inner],
            };
        }
        let maxDrawCount: number | undefined;
        if (descriptor?.maxDrawCount) {
            maxDrawCount = bigIntToNumber(descriptor.maxDrawCount);
        }
        return new GpuRenderPassEncoder(
            this[inner].beginRenderPass({
                ...descriptor,
                colorAttachments,
                depthStencilAttachment,
                occlusionQuerySet,
                timestampWrites,
                maxDrawCount,
            }),
        );
    }
    beginComputePass(
        descriptor?: wit.GpuComputePassDescriptor,
    ): wit.GpuComputePassEncoder {
        let descriptorWeb: GPUComputePassDescriptor | undefined;
        if (descriptor) {
            let timestampWrites: GPUComputePassTimestampWrites | undefined;
            if (descriptor.timestampWrites) {
                timestampWrites = {
                    ...descriptor.timestampWrites,
                    querySet: (
                        descriptor.timestampWrites.querySet as GpuQuerySet
                    )[inner],
                };
            }
            descriptorWeb = {
                ...descriptor,
                timestampWrites,
            };
        }
        return new GpuComputePassEncoder(
            this[inner].beginComputePass(descriptorWeb),
        );
    }
    copyBufferToBuffer(
        source: GpuBuffer,
        sourceOffset: wit.GpuSize64,
        destination: GpuBuffer,
        destinationOffset: wit.GpuSize64,
        size: wit.GpuSize64,
    ): void {
        this[inner].copyBufferToBuffer(
            source[inner],
            bigIntToNumber(sourceOffset),
            destination[inner],
            bigIntToNumber(destinationOffset),
            bigIntToNumber(size),
        );
    }
    copyBufferToTexture(
        source: wit.GpuTexelCopyBufferInfo,
        destination: wit.GpuTexelCopyTextureInfo,
        copySize: wit.GpuExtent3D,
    ): void {
        let sourceOffset: number | undefined;
        if (source.offset) sourceOffset = bigIntToNumber(source.offset);
        this[inner].copyBufferToTexture(
            {
                ...source,
                buffer: (source.buffer as GpuBuffer)[inner],
                offset: sourceOffset,
            },
            {
                ...destination,
                texture: (destination.texture as GpuTexture)[inner],
            },
            copySize,
        );
    }
    copyTextureToBuffer(
        source: wit.GpuTexelCopyTextureInfo,
        destination: wit.GpuTexelCopyBufferInfo,
        copySize: wit.GpuExtent3D,
    ): void {
        let destinationOffset: number | undefined;
        if (destination.offset)
            destinationOffset = bigIntToNumber(destination.offset);
        this[inner].copyTextureToBuffer(
            {
                ...source,
                texture: (source.texture as GpuTexture)[inner],
            },
            {
                ...destination,
                buffer: (destination.buffer as GpuBuffer)[inner],
                offset: destinationOffset,
            },
            copySize,
        );
    }
    copyTextureToTexture(
        source: wit.GpuTexelCopyTextureInfo,
        destination: wit.GpuTexelCopyTextureInfo,
        copySize: wit.GpuExtent3D,
    ): void {
        this[inner].copyTextureToTexture(
            {
                ...source,
                texture: (source.texture as GpuTexture)[inner],
            },
            {
                ...destination,
                texture: (destination.texture as GpuTexture)[inner],
            },
            copySize,
        );
    }
    clearBuffer(
        buffer: GpuBuffer,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        let offsetNumber: number | undefined;
        if (offset) offsetNumber = bigIntToNumber(offset);
        let sizeNumber: number | undefined;
        if (size) sizeNumber = bigIntToNumber(size);
        this[inner].clearBuffer(buffer[inner], offsetNumber, sizeNumber);
    }
    resolveQuerySet(
        querySet: GpuQuerySet,
        firstQuery: wit.GpuSize32,
        queryCount: wit.GpuSize32,
        destination: GpuBuffer,
        destinationOffset: wit.GpuSize64,
    ): void {
        return this[inner].resolveQuerySet(
            querySet[inner],
            firstQuery,
            queryCount,
            destination[inner],
            bigIntToNumber(destinationOffset),
        );
    }
    finish(descriptor?: wit.GpuCommandBufferDescriptor): wit.GpuCommandBuffer {
        return new GpuCommandBuffer(
            this[inner].finish({
                ...descriptor,
            }),
        );
    }
    pushDebugGroup(groupLabel: string): void {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): void {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): void {
        return this[inner].insertDebugMarker(markerLabel);
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}

export class GpuCompilationInfo implements wit.GpuCompilationInfo {
    [inner]: globalThis.GPUCompilationInfo;
    constructor(i?: globalThis.GPUCompilationInfo) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    messages(): Array<wit.GpuCompilationMessage> {
        return this[inner].messages.map(
            (message) => new GpuCompilationMessage(message),
        );
    }
}

export class GpuCompilationMessage implements wit.GpuCompilationMessage {
    [inner]: globalThis.GPUCompilationMessage;
    constructor(i?: globalThis.GPUCompilationMessage) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    message(): string {
        return this[inner].message;
    }
    type(): wit.GpuCompilationMessageType {
        return this[inner].type;
    }
    lineNum(): bigint {
        return numberToBigInt(this[inner].lineNum);
    }
    linePos(): bigint {
        return numberToBigInt(this[inner].linePos);
    }
    offset(): bigint {
        return numberToBigInt(this[inner].offset);
    }
    length(): bigint {
        return numberToBigInt(this[inner].length);
    }
}

export class GpuComputePassEncoder implements wit.GpuComputePassEncoder {
    [inner]: globalThis.GPUComputePassEncoder;
    constructor(i?: globalThis.GPUComputePassEncoder) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    setImmediates(
        rangeOffset: wit.GpuSize32,
        data: Uint8Array,
        dataOffset: wit.GpuSize64 | undefined,
        dataSize: wit.GpuSize64 | undefined,
    ): void {
        let dataOffsetWeb: number | undefined;
        if (typeof dataOffset === "bigint") {
            dataOffsetWeb = bigIntToNumber(dataOffset);
        }
        let dataSizeWeb: number | undefined;
        if (typeof dataSize === "bigint") {
            dataSizeWeb = bigIntToNumber(dataSize);
        }
        this[inner].setImmediates(
            rangeOffset,
            data.buffer,
            dataOffsetWeb,
            dataSizeWeb,
        );
    }
    setPipeline(pipeline: GpuComputePipeline): void {
        return this[inner].setPipeline(pipeline[inner]);
    }
    dispatchWorkgroups(
        workgroupCountX: wit.GpuSize32,
        workgroupCountY?: wit.GpuSize32,
        workgroupCountZ?: wit.GpuSize32,
    ): void {
        return this[inner].dispatchWorkgroups(
            workgroupCountX,
            workgroupCountY,
            workgroupCountZ,
        );
    }
    dispatchWorkgroupsIndirect(
        indirectBuffer: GpuBuffer,
        indirectOffset: wit.GpuSize64,
    ): void {
        return this[inner].dispatchWorkgroupsIndirect(
            indirectBuffer[inner],
            bigIntToNumber(indirectOffset),
        );
    }
    end(): void {
        return this[inner].end();
    }
    pushDebugGroup(groupLabel: string): void {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): void {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): void {
        return this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(
        index: wit.GpuIndex32,
        bindGroup?: GpuBindGroup,
        dynamicOffsetsData?: Uint32Array,
        dynamicOffsetsDataStart?: wit.GpuSize64,
        dynamicOffsetsDataLength?: wit.GpuSize32,
    ): void {
        let bindGroupWeb: GPUBindGroup | undefined;
        if (bindGroup) {
            bindGroupWeb = bindGroup[inner];
        }
        if (dynamicOffsetsData === undefined) {
            return this[inner].setBindGroup(index, bindGroupWeb);
        } else {
            let dynamicOffsetsDataStartNumber: number;
            if (dynamicOffsetsDataStart) {
                dynamicOffsetsDataStartNumber = bigIntToNumber(
                    dynamicOffsetsDataStart,
                );
            } else {
                dynamicOffsetsDataStartNumber = 0;
            }
            if (dynamicOffsetsDataLength === undefined) {
                dynamicOffsetsDataLength =
                    dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
            }
            return this[inner].setBindGroup(
                index,
                bindGroupWeb,
                dynamicOffsetsData,
                dynamicOffsetsDataStartNumber,
                dynamicOffsetsDataLength,
            );
        }
    }
}

export class GpuComputePipeline implements wit.GpuComputePipeline {
    [inner]: globalThis.GPUComputePipeline;
    constructor(i?: globalThis.GPUComputePipeline) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    getBindGroupLayout(index: number): wit.GpuBindGroupLayout {
        return new GpuBindGroupLayout(this[inner].getBindGroupLayout(index));
    }
}

export class GpuPipelineLayout implements wit.GpuPipelineLayout {
    [inner]: globalThis.GPUPipelineLayout;
    constructor(i?: globalThis.GPUPipelineLayout) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}
export class GpuQuerySet implements wit.GpuQuerySet {
    [inner]: globalThis.GPUQuerySet;
    constructor(i?: globalThis.GPUQuerySet) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    destroy(): void {
        return this[inner].destroy();
    }
    type(): wit.GpuQueryType {
        return this[inner].type;
    }
    count(): wit.GpuSize32Out {
        return this[inner].count;
    }
}

export class GpuQueue implements wit.GpuQueue {
    [inner]: globalThis.GPUQueue;
    constructor(i?: globalThis.GPUQueue) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    submit(commandBuffers: Array<GpuCommandBuffer>): void {
        return this[inner].submit(commandBuffers.map((c) => c[inner]));
    }
    onSubmittedWorkDone(): Promise<void> {
        throw new Todo();
    }
    writeBufferWithCopy(
        buffer: GpuBuffer,
        bufferOffset: wit.GpuSize64,
        data: Uint8Array,
        dataOffset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        let dataOffsetNumber: number | undefined;
        if (dataOffset) {
            dataOffsetNumber = bigIntToNumber(dataOffset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].writeBuffer(
            buffer[inner],
            bigIntToNumber(bufferOffset),
            data.buffer,
            dataOffsetNumber,
            sizeNumber,
        );
    }
    writeTextureWithCopy(
        destination: wit.GpuTexelCopyTextureInfo,
        data: Uint8Array,
        dataLayout: wit.GpuTexelCopyBufferLayout,
        size: wit.GpuExtent3D,
    ): void {
        let offset: number | undefined;
        if (dataLayout.offset) {
            offset = bigIntToNumber(dataLayout.offset);
        }
        return this[inner].writeTexture(
            {
                ...destination,
                texture: (destination.texture as GpuTexture)[inner],
            },
            data.buffer,
            {
                ...dataLayout,
                offset,
            },
            size,
        );
    }
}

export class GpuRenderBundle implements wit.GpuRenderBundle {
    [inner]: globalThis.GPURenderBundle;
    constructor(i?: globalThis.GPURenderBundle) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}

export class GpuRenderBundleEncoder implements wit.GpuRenderBundleEncoder {
    [inner]: globalThis.GPURenderBundleEncoder;
    constructor(i?: globalThis.GPURenderBundleEncoder) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    setImmediates(
        rangeOffset: wit.GpuSize32,
        data: Uint8Array,
        dataOffset: wit.GpuSize64 | undefined,
        dataSize: wit.GpuSize64 | undefined,
    ): void {
        let dataOffsetWeb: number | undefined;
        if (typeof dataOffset === "bigint") {
            dataOffsetWeb = bigIntToNumber(dataOffset);
        }
        let dataSizeWeb: number | undefined;
        if (typeof dataSize === "bigint") {
            dataSizeWeb = bigIntToNumber(dataSize);
        }
        this[inner].setImmediates(
            rangeOffset,
            data.buffer,
            dataOffsetWeb,
            dataSizeWeb,
        );
    }
    finish(descriptor?: wit.GpuRenderBundleDescriptor): wit.GpuRenderBundle {
        return new GpuRenderBundle(this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel: string): void {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): void {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): void {
        return this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(
        index: wit.GpuIndex32,
        bindGroup?: GpuBindGroup,
        dynamicOffsetsData?: Uint32Array,
        dynamicOffsetsDataStart?: wit.GpuSize64,
        dynamicOffsetsDataLength?: wit.GpuSize32,
    ): void {
        let bindGroupWeb: GPUBindGroup | undefined;
        if (bindGroup) {
            bindGroupWeb = bindGroup[inner];
        }
        if (dynamicOffsetsData === undefined) {
            return this[inner].setBindGroup(index, bindGroupWeb);
        } else {
            let dynamicOffsetsDataStartNumber: number;
            if (dynamicOffsetsDataStart) {
                dynamicOffsetsDataStartNumber = bigIntToNumber(
                    dynamicOffsetsDataStart,
                );
            } else {
                dynamicOffsetsDataStartNumber = 0;
            }
            if (dynamicOffsetsDataLength === undefined) {
                dynamicOffsetsDataLength =
                    dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
            }
            return this[inner].setBindGroup(
                index,
                bindGroupWeb,
                dynamicOffsetsData,
                dynamicOffsetsDataStartNumber,
                dynamicOffsetsDataLength,
            );
        }
    }
    setPipeline(pipeline: GpuRenderPipeline): void {
        return this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(
        buffer: GpuBuffer,
        indexFormat: wit.GpuIndexFormat,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setIndexBuffer(
            buffer[inner],
            indexFormat,
            offsetNumber,
            sizeNumber,
        );
    }
    setVertexBuffer(
        slot: wit.GpuIndex32,
        buffer?: GpuBuffer,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        let bufferWeb: GPUBuffer | undefined;
        if (buffer) {
            bufferWeb = buffer[inner];
        }
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setVertexBuffer(
            slot,
            bufferWeb,
            offsetNumber,
            sizeNumber,
        );
    }
    draw(
        vertexCount: wit.GpuSize32,
        instanceCount?: wit.GpuSize32,
        firstVertex?: wit.GpuSize32,
        firstInstance?: wit.GpuSize32,
    ): void {
        return this[inner].draw(
            vertexCount,
            instanceCount,
            firstVertex,
            firstInstance,
        );
    }
    drawIndexed(
        indexCount: wit.GpuSize32,
        instanceCount?: wit.GpuSize32,
        firstIndex?: wit.GpuSize32,
        baseVertex?: wit.GpuSignedOffset32,
        firstInstance?: wit.GpuSize32,
    ): void {
        return this[inner].drawIndexed(
            indexCount,
            instanceCount,
            firstIndex,
            baseVertex,
            firstInstance,
        );
    }
    drawIndirect(
        indirectBuffer: GpuBuffer,
        indirectOffset: wit.GpuSize64,
    ): void {
        return this[inner].drawIndirect(
            indirectBuffer[inner],
            bigIntToNumber(indirectOffset),
        );
    }
    drawIndexedIndirect(
        indirectBuffer: GpuBuffer,
        indirectOffset: wit.GpuSize64,
    ): void {
        return this[inner].drawIndexedIndirect(
            indirectBuffer[inner],
            bigIntToNumber(indirectOffset),
        );
    }
}

export class GpuRenderPassEncoder implements wit.GpuRenderPassEncoder {
    [inner]: globalThis.GPURenderPassEncoder;
    constructor(i?: globalThis.GPURenderPassEncoder) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    setImmediates(
        rangeOffset: wit.GpuSize32,
        data: Uint8Array,
        dataOffset: wit.GpuSize64 | undefined,
        dataSize: wit.GpuSize64 | undefined,
    ): void {
        let dataOffsetWeb: number | undefined;
        if (typeof dataOffset === "bigint") {
            dataOffsetWeb = bigIntToNumber(dataOffset);
        }
        let dataSizeWeb: number | undefined;
        if (typeof dataSize === "bigint") {
            dataSizeWeb = bigIntToNumber(dataSize);
        }
        this[inner].setImmediates(
            rangeOffset,
            data.buffer,
            dataOffsetWeb,
            dataSizeWeb,
        );
    }
    setViewport(
        x: number,
        y: number,
        width: number,
        height: number,
        minDepth: number,
        maxDepth: number,
    ): void {
        return this[inner].setViewport(x, y, width, height, minDepth, maxDepth);
    }
    setScissorRect(
        x: wit.GpuIntegerCoordinate,
        y: wit.GpuIntegerCoordinate,
        width: wit.GpuIntegerCoordinate,
        height: wit.GpuIntegerCoordinate,
    ): void {
        return this[inner].setScissorRect(x, y, width, height);
    }
    setBlendConstant(color: wit.GpuColor): void {
        return this[inner].setBlendConstant(color);
    }
    setStencilReference(reference: wit.GpuStencilValue): void {
        return this[inner].setStencilReference(reference);
    }
    beginOcclusionQuery(queryIndex: wit.GpuSize32): void {
        return this[inner].beginOcclusionQuery(queryIndex);
    }
    endOcclusionQuery(): void {
        return this[inner].endOcclusionQuery();
    }
    executeBundles(bundles: Array<GpuRenderBundle>): void {
        return this[inner].executeBundles(
            bundles.map((bundle) => bundle[inner]),
        );
    }
    end(): void {
        return this[inner].end();
    }
    pushDebugGroup(groupLabel: string): void {
        return this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): void {
        return this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): void {
        return this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(
        index: wit.GpuIndex32,
        bindGroup?: GpuBindGroup,
        dynamicOffsetsData?: Uint32Array,
        dynamicOffsetsDataStart?: wit.GpuSize64,
        dynamicOffsetsDataLength?: wit.GpuSize32,
    ): void {
        let bindGroupWeb: GPUBindGroup | undefined;
        if (bindGroup) {
            bindGroupWeb = bindGroup[inner];
        }
        if (dynamicOffsetsData === undefined) {
            return this[inner].setBindGroup(index, bindGroupWeb);
        } else {
            let dynamicOffsetsDataStartNumber: number;
            if (dynamicOffsetsDataStart) {
                dynamicOffsetsDataStartNumber = bigIntToNumber(
                    dynamicOffsetsDataStart,
                );
            } else {
                dynamicOffsetsDataStartNumber = 0;
            }
            if (dynamicOffsetsDataLength === undefined) {
                dynamicOffsetsDataLength =
                    dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
            }
            return this[inner].setBindGroup(
                index,
                bindGroupWeb,
                dynamicOffsetsData,
                dynamicOffsetsDataStartNumber,
                dynamicOffsetsDataLength,
            );
        }
    }
    setPipeline(pipeline: GpuRenderPipeline): void {
        return this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(
        buffer: GpuBuffer,
        indexFormat: wit.GpuIndexFormat,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setIndexBuffer(
            buffer[inner],
            indexFormat,
            offsetNumber,
            sizeNumber,
        );
    }
    setVertexBuffer(
        slot: wit.GpuIndex32,
        buffer?: GpuBuffer,
        offset?: wit.GpuSize64,
        size?: wit.GpuSize64,
    ): void {
        let bufferWeb: GPUBuffer | undefined;
        if (buffer) {
            bufferWeb = buffer[inner];
        }
        let offsetNumber: number | undefined;
        if (offset) {
            offsetNumber = bigIntToNumber(offset);
        }
        let sizeNumber: number | undefined;
        if (size) {
            sizeNumber = bigIntToNumber(size);
        }
        return this[inner].setVertexBuffer(
            slot,
            bufferWeb,
            offsetNumber,
            sizeNumber,
        );
    }
    draw(
        vertexCount: wit.GpuSize32,
        instanceCount?: wit.GpuSize32,
        firstVertex?: wit.GpuSize32,
        firstInstance?: wit.GpuSize32,
    ): void {
        return this[inner].draw(
            vertexCount,
            instanceCount,
            firstVertex,
            firstInstance,
        );
    }
    drawIndexed(
        indexCount: wit.GpuSize32,
        instanceCount?: wit.GpuSize32,
        firstIndex?: wit.GpuSize32,
        baseVertex?: wit.GpuSignedOffset32,
        firstInstance?: wit.GpuSize32,
    ): void {
        return this[inner].drawIndexed(
            indexCount,
            instanceCount,
            firstIndex,
            baseVertex,
            firstInstance,
        );
    }
    drawIndirect(
        indirectBuffer: GpuBuffer,
        indirectOffset: wit.GpuSize64,
    ): void {
        return this[inner].drawIndirect(
            indirectBuffer[inner],
            bigIntToNumber(indirectOffset),
        );
    }
    drawIndexedIndirect(
        indirectBuffer: GpuBuffer,
        indirectOffset: wit.GpuSize64,
    ): void {
        return this[inner].drawIndexedIndirect(
            indirectBuffer[inner],
            bigIntToNumber(indirectOffset),
        );
    }
}

export class GpuRenderPipeline implements wit.GpuRenderPipeline {
    [inner]: globalThis.GPURenderPipeline;
    constructor(i?: globalThis.GPURenderPipeline) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    getBindGroupLayout(index: number): wit.GpuBindGroupLayout {
        return new GpuBindGroupLayout(this[inner].getBindGroupLayout(index));
    }
}

export class GpuSampler implements wit.GpuSampler {
    [inner]: globalThis.GPUSampler;
    constructor(i?: globalThis.GPUSampler) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}

export class GpuShaderModule implements wit.GpuShaderModule {
    [inner]: globalThis.GPUShaderModule;
    constructor(i?: globalThis.GPUShaderModule) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    async getCompilationInfo(): Promise<wit.GpuCompilationInfo> {
        return new GpuCompilationInfo(await this[inner].getCompilationInfo());
    }
}

export class GpuSupportedFeatures implements wit.GpuSupportedFeatures {
    [inner]: globalThis.GPUSupportedFeatures;
    constructor(i?: globalThis.GPUSupportedFeatures) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    has(value: string): boolean {
        return this[inner].has(value);
    }
}

// kabab-case of all keys in `GpuSupportedLimits` except `inner`.
type WasiSupportedLimitStringInner = Exclude<
    KebabCase<keyof GpuSupportedLimits>,
    typeof inner
>;
// It's not yet clear how names with numbers should be converted from WebIDL to wit. For now, just hardcode all items with numbers.
// TODO: remove once resolved.
type WasiSupportedLimitString =
    | Exclude<
          WasiSupportedLimitStringInner,
          | "max-texture-dimension1d"
          | "max-texture-dimension2d"
          | "max-texture-dimension3d"
      >
    | "max-texture-dimension1-d"
    | "max-texture-dimension2-d"
    | "max-texture-dimension3-d";

export class GpuSupportedLimits implements wit.GpuSupportedLimits {
    [inner]: globalThis.GPUSupportedLimits;
    constructor(i?: globalThis.GPUSupportedLimits) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    maxTextureDimension1D(): number {
        return this[inner].maxTextureDimension1D;
    }
    maxTextureDimension2D(): number {
        return this[inner].maxTextureDimension2D;
    }
    maxTextureDimension3D(): number {
        return this[inner].maxTextureDimension3D;
    }
    maxTextureArrayLayers(): number {
        return this[inner].maxTextureArrayLayers;
    }
    maxBindGroups(): number {
        return this[inner].maxBindGroups;
    }
    maxBindGroupsPlusVertexBuffers(): number {
        return this[inner].maxBindGroupsPlusVertexBuffers;
    }
    maxBindingsPerBindGroup(): number {
        return this[inner].maxBindingsPerBindGroup;
    }
    maxDynamicUniformBuffersPerPipelineLayout(): number {
        return this[inner].maxDynamicUniformBuffersPerPipelineLayout;
    }
    maxDynamicStorageBuffersPerPipelineLayout(): number {
        return this[inner].maxDynamicStorageBuffersPerPipelineLayout;
    }
    maxSampledTexturesPerShaderStage(): number {
        return this[inner].maxSampledTexturesPerShaderStage;
    }
    maxSamplersPerShaderStage(): number {
        return this[inner].maxSamplersPerShaderStage;
    }
    maxStorageBuffersPerShaderStage(): number {
        return this[inner].maxStorageBuffersPerShaderStage;
    }
    maxStorageTexturesPerShaderStage(): number {
        return this[inner].maxStorageTexturesPerShaderStage;
    }
    maxUniformBuffersPerShaderStage(): number {
        return this[inner].maxUniformBuffersPerShaderStage;
    }
    maxUniformBufferBindingSize(): bigint {
        return BigInt(this[inner].maxUniformBufferBindingSize);
    }
    maxStorageBufferBindingSize(): bigint {
        return BigInt(this[inner].maxStorageBufferBindingSize);
    }
    minUniformBufferOffsetAlignment(): number {
        return this[inner].minUniformBufferOffsetAlignment;
    }
    minStorageBufferOffsetAlignment(): number {
        return this[inner].minStorageBufferOffsetAlignment;
    }
    maxVertexBuffers(): number {
        return this[inner].maxVertexBuffers;
    }
    maxBufferSize(): bigint {
        return BigInt(this[inner].maxBufferSize);
    }
    maxVertexAttributes(): number {
        return this[inner].maxVertexAttributes;
    }
    maxVertexBufferArrayStride(): number {
        return this[inner].maxVertexBufferArrayStride;
    }
    maxInterStageShaderVariables(): number {
        return this[inner].maxInterStageShaderVariables;
    }
    maxColorAttachments(): number {
        return this[inner].maxColorAttachments;
    }
    maxColorAttachmentBytesPerSample(): number {
        return this[inner].maxColorAttachmentBytesPerSample;
    }
    maxComputeWorkgroupStorageSize(): number {
        return this[inner].maxComputeWorkgroupStorageSize;
    }
    maxComputeInvocationsPerWorkgroup(): number {
        return this[inner].maxComputeInvocationsPerWorkgroup;
    }
    maxComputeWorkgroupSizeX(): number {
        return this[inner].maxComputeWorkgroupSizeX;
    }
    maxComputeWorkgroupSizeY(): number {
        return this[inner].maxComputeWorkgroupSizeY;
    }
    maxComputeWorkgroupSizeZ(): number {
        return this[inner].maxComputeWorkgroupSizeZ;
    }
    maxComputeWorkgroupsPerDimension(): number {
        return this[inner].maxComputeWorkgroupsPerDimension;
    }
    maxImmediateSize(): number {
        return this[inner].maxImmediateSize;
    }
    maxStorageBuffersInVertexStage(): number {
        // Temporarily optional in @webgpu/types. Use 0 for undefined. TODO: remove.
        return this[inner].maxStorageBuffersInVertexStage || 0;
    }
    maxStorageBuffersInFragmentStage(): number {
        // Temporarily optional in @webgpu/types. Use 0 for undefined. TODO: remove.
        return this[inner].maxStorageBuffersInFragmentStage || 0;
    }
    maxStorageTexturesInVertexStage(): number {
        // Temporarily optional in @webgpu/types. Use 0 for undefined. TODO: remove.
        return this[inner].maxStorageTexturesInVertexStage || 0;
    }
    maxStorageTexturesInFragmentStage(): number {
        // Temporarily optional in @webgpu/types. Use 0 for undefined. TODO: remove.
        return this[inner].maxStorageTexturesInFragmentStage || 0;
    }
}

export class GpuTexture implements wit.GpuTexture {
    [inner]: globalThis.GPUTexture;
    constructor(i?: globalThis.GPUTexture) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
    createView(descriptor?: wit.GpuTextureViewDescriptor): wit.GpuTextureView {
        let format: GPUTextureFormat | undefined;
        if (descriptor?.format)
            format = convertTextureFormatWasiToWeb(descriptor.format);
        let dimension: GPUTextureViewDimension | undefined;
        if (descriptor?.dimension)
            dimension = convertTextureViewDimensionWasiToWeb(
                descriptor.dimension,
            );
        let usage: GPUTextureUsageFlags | undefined;
        if (descriptor?.usage)
            usage = convertTextureUsageWasiToWeb(descriptor.usage);
        return new GpuTextureView(
            this[inner].createView({
                ...descriptor,
                format,
                dimension,
                usage,
            }),
        );
    }
    destroy(): void {
        return this[inner].destroy();
    }
    width(): wit.GpuIntegerCoordinateOut {
        return this[inner].width;
    }
    height(): wit.GpuIntegerCoordinateOut {
        return this[inner].height;
    }
    depthOrArrayLayers(): wit.GpuIntegerCoordinateOut {
        return this[inner].depthOrArrayLayers;
    }
    mipLevelCount(): wit.GpuIntegerCoordinateOut {
        return this[inner].mipLevelCount;
    }
    sampleCount(): wit.GpuSize32Out {
        return this[inner].sampleCount;
    }
    dimension(): wit.GpuTextureDimension {
        return convertTextureDimensionWebToWasi(this[inner].dimension);
    }
    format(): wit.GpuTextureFormat {
        return convertTextureFormatWebToWasi(this[inner].format);
    }
    usage(): wit.GpuTextureUsage {
        return convertTextureUsageWebToWasi(this[inner].usage);
    }
    textureBindingViewDimension(): wit.GpuTextureViewDimension | undefined {
        let textureBindingViewDimension:
            wit.GpuTextureViewDimension | undefined;
        if (this[inner].textureBindingViewDimension) {
            textureBindingViewDimension = convertTextureViewDimensionWebToWasi(
                this[inner].textureBindingViewDimension,
            );
        }
        return textureBindingViewDimension;
    }
}

export class GpuTextureView implements wit.GpuTextureView {
    [inner]: globalThis.GPUTextureView;
    constructor(i?: globalThis.GPUTextureView) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    label(): string {
        return this[inner].label;
    }
    setLabel(label: string): void {
        this[inner].label = label;
    }
}

export class GpuUncapturedErrorEvent implements wit.GpuUncapturedErrorEvent {
    [inner]: globalThis.GPUUncapturedErrorEvent;
    constructor(i?: globalThis.GPUUncapturedErrorEvent) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    error(): wit.GpuError {
        return new GpuError(this[inner].error);
    }
}

export class RecordGpuPipelineConstantValue
    implements wit.RecordGpuPipelineConstantValue
{
    private map: Map<string, wit.GpuPipelineConstantValue> = new Map();
    add(key: string, value: wit.GpuPipelineConstantValue): void {
        this.map.set(key, value);
    }
    get(key: string): wit.GpuPipelineConstantValue | undefined {
        return this.map.get(key);
    }
    has(key: string): boolean {
        return this.map.has(key);
    }
    remove(key: string): void {
        this.map.delete(key);
    }
    keys(): Array<string> {
        return Array.from(this.map.keys());
    }
    values(): Float64Array {
        return new Float64Array(this.map.values());
    }
    entries(): Array<[string, wit.GpuPipelineConstantValue]> {
        return Array.from(this.map.entries());
    }
}

export class RecordOptionGpuSize64 implements wit.RecordOptionGpuSize64 {
    private map: Map<string, wit.GpuSize64 | undefined> = new Map();
    add(key: string, value: wit.GpuSize64 | undefined): void {
        this.map.set(key, value);
    }
    get(key: string): wit.Option<wit.GpuSize64 | undefined> {
        if (this.map.has(key)) {
            return {
                tag: "some",
                val: this.map.get(key),
            };
        } else {
            return {
                tag: "none",
            };
        }
    }
    has(key: string): boolean {
        return this.map.has(key);
    }
    remove(key: string): void {
        this.map.delete(key);
    }
    keys(): Array<string> {
        return Array.from(this.map.keys());
    }
    values(): Array<wit.GpuSize64 | undefined> {
        return Array.from(this.map.values());
    }
    entries(): Array<[string, wit.GpuSize64 | undefined]> {
        return Array.from(this.map.entries());
    }
}

export class WgslLanguageFeatures implements wit.WgslLanguageFeatures {
    [inner]: globalThis.WGSLLanguageFeatures;
    constructor(i?: globalThis.WGSLLanguageFeatures) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    has(value: string): boolean {
        return this[inner].has(value);
    }
}

export class GpuDeviceLostInfo implements wit.GpuDeviceLostInfo {
    [inner]: globalThis.GPUDeviceLostInfo;
    constructor(i?: globalThis.GPUDeviceLostInfo) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    reason(): wit.GpuDeviceLostReason {
        return this[inner].reason;
    }
    message(): string {
        return this[inner].message;
    }
}

export class GpuError implements wit.GpuError {
    [inner]: globalThis.GPUError;
    constructor(i?: globalThis.GPUError) {
        if (!i) throw new NotAllowed();
        this[inner] = i;
    }
    message(): string {
        return this[inner].message;
    }
    kind(): wit.GpuErrorKind {
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
        throw new Unreachable();
    }
}

export function getGpu(): wit.Gpu {
    return new Gpu(navigator.gpu);
}

export default {
    getGpu,
    Gpu,
    GpuAdapter,
    GpuAdapterInfo,
    GpuBindGroup,
    GpuBindGroupLayout,
    GpuBuffer,
    GpuCanvasContext,
    GpuCommandBuffer,
    GpuCommandEncoder,
    GpuCompilationInfo,
    GpuCompilationMessage,
    GpuComputePassEncoder,
    GpuComputePipeline,
    GpuDevice,
    GpuDeviceLostInfo,
    GpuError,
    GpuPipelineLayout,
    GpuQuerySet,
    GpuQueue,
    GpuRenderBundle,
    GpuRenderBundleEncoder,
    GpuRenderPassEncoder,
    GpuRenderPipeline,
    GpuSampler,
    GpuShaderModule,
    GpuSupportedFeatures,
    GpuSupportedLimits,
    GpuTexture,
    GpuTextureView,
    GpuUncapturedErrorEvent,
    RecordGpuPipelineConstantValue,
    RecordOptionGpuSize64,
    WgslLanguageFeatures,
} satisfies typeof import("../types/interfaces/wasi-webgpu-webgpu");
