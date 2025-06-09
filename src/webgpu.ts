import { Pollable } from './poll.js';
import { Todo, Unreachable } from './common.js';
import { AbstractBuffer, DisplayApi, DrawApi, Context } from './graphics-context.js';

function convertFeatureNameWasiToWeb(name: GpuFeatureName): GPUFeatureName {
	if (name === "texture-compression-bc-sliced3d")
		return "texture-compression-bc-sliced-3d";
	if (name === "texture-compression-astc-sliced3d")
		throw new Todo;
	return name;
}

function convertTextureFormatWebToWasi(name: GPUTextureFormat): GpuTextureFormat {
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

function convertTextureFormatWasiToWeb(name: GpuTextureFormat): GPUTextureFormat {
	switch (name) {
		case "astc4x4-unorm":
			return "astc-4x4-unorm"
		case "astc4x4-unorm-srgb":
			return "astc-4x4-unorm-srgb"
		case "astc5x4-unorm":
			return "astc-5x4-unorm"
		case "astc5x4-unorm-srgb":
			return "astc-5x4-unorm-srgb"
		case "astc5x5-unorm":
			return "astc-5x5-unorm"
		case "astc5x5-unorm-srgb":
			return "astc-5x5-unorm-srgb"
		case "astc6x5-unorm":
			return "astc-6x5-unorm"
		case "astc6x5-unorm-srgb":
			return "astc-6x5-unorm-srgb"
		case "astc6x6-unorm":
			return "astc-6x6-unorm"
		case "astc6x6-unorm-srgb":
			return "astc-6x6-unorm-srgb"
		case "astc8x5-unorm":
			return "astc-8x5-unorm"
		case "astc8x5-unorm-srgb":
			return "astc-8x5-unorm-srgb"
		case "astc8x6-unorm":
			return "astc-8x6-unorm"
		case "astc8x6-unorm-srgb":
			return "astc-8x6-unorm-srgb"
		case "astc8x8-unorm":
			return "astc-8x8-unorm"
		case "astc8x8-unorm-srgb":
			return "astc-8x8-unorm-srgb"
		case "astc10x5-unorm":
			return "astc-10x5-unorm"
		case "astc10x5-unorm-srgb":
			return "astc-10x5-unorm-srgb"
		case "astc10x6-unorm":
			return "astc-10x6-unorm"
		case "astc10x6-unorm-srgb":
			return "astc-10x6-unorm-srgb"
		case "astc10x8-unorm":
			return "astc-10x8-unorm"
		case "astc10x8-unorm-srgb":
			return "astc-10x8-unorm-srgb"
		case "astc10x10-unorm":
			return "astc-10x10-unorm"
		case "astc10x10-unorm-srgb":
			return "astc-10x10-unorm-srgb"
		case "astc12x10-unorm":
			return "astc-12x10-unorm"
		case "astc12x10-unorm-srgb":
			return "astc-12x10-unorm-srgb"
		case "astc12x12-unorm":
			return "astc-12x12-unorm";
		case "astc12x12-unorm-srgb":
			return "astc-12x12-unorm-srgb";
		default:
			return name;
	}
}

function convertVertexFormatWasiToWeb(name: GpuVertexFormat): GPUVertexFormat {
	switch (name) {
		case "unorm1010102":
			return "unorm10-10-10-2";
		default:
			return name;
	}
}

function convertTextureDimensionWebToWasi(name: GPUTextureDimension): GpuTextureDimension {
	name = name.toLowerCase() as GPUTextureDimension;
	switch (name) {
		case "1d":
			return "d1";
		case "2d":
			return "d2";
		case "3d":
			return "d3";
	}
}

function convertTextureDimensionWasiToWeb(name: GpuTextureDimension): GPUTextureDimension {
	switch (name) {
		case "d1":
			return "1d";
		case "d2":
			return "2d";
		case "d3":
			return "3d";
	}
}

function convertTextureViewDimensionWebToWasi(name: GPUTextureViewDimension): GpuTextureViewDimension {
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

function convertTextureViewDimensionWasiToWeb(name: GpuTextureViewDimension): GPUTextureViewDimension {
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

function convertGpuLayoutWasiToWeb(layout: GpuLayoutMode): GPUAutoLayoutMode | GPUPipelineLayout {
	switch (layout.tag) {
		case 'specific':
			return layout.val[inner];
		case 'auto':
			return 'auto';
	}
}

function bigIntToNumber(bigInt: bigint): number {
	return Number(bigInt);
}
function numberToBigInt(number: number): bigint {
	return BigInt(number);
}

const inner = Symbol("inner");

export class Gpu {
	[inner]: globalThis.GPU;

	constructor(i: globalThis.GPU) {
		this[inner] = i;
	}

	async requestAdapter(options?: GpuRequestAdapterOptions): Promise<GpuAdapter | undefined> {
		const adapter = await this[inner].requestAdapter(options);
		if (adapter)
			return new GpuAdapter(adapter);
		return undefined;
	}

	getPreferredCanvasFormat(): GpuTextureFormat {
		return convertTextureFormatWebToWasi(navigator.gpu.getPreferredCanvasFormat());
	}

	wgslLanguageFeatures(): WgslLanguageFeatures {
		return new WgslLanguageFeatures(this[inner].wgslLanguageFeatures);
	}
}

export class GpuAdapter {
	[inner]: globalThis.GPUAdapter;

	constructor(i: globalThis.GPUAdapter) {
		this[inner] = i;
	}

	features(): GpuSupportedFeatures {
		return new GpuSupportedFeatures(this[inner].features);
	}

	limits(): GpuSupportedLimits {
		return new GpuSupportedLimits(this[inner].limits);
	}

	info(): GpuAdapterInfo {
		return new GpuAdapterInfo(this[inner].info);
	}

	isFallbackAdapter(): boolean {
		throw new Todo;
	}

	async requestDevice(descriptor?: GpuDeviceDescriptor): Promise<GpuDevice> {
		if (!descriptor)
			descriptor = {};

		let requiredFeatures: GPUFeatureName[] | undefined;
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

export class GpuDevice implements DrawApi {
	[inner]: globalThis.GPUDevice;
	#context: GPUCanvasContext | undefined;
	constructor(i: globalThis.GPUDevice) {
		this[inner] = i;
	}
	displayApiReady(displayApi: DisplayApi): void {
		this.#context = displayApi.getContext("webgpu") ?? undefined;
		this.#context?.configure({
			device: this[inner],
			format: navigator.gpu.getPreferredCanvasFormat(),
		});
	}
	getCurrentBuffer(): AbstractBuffer {
		if (!this.#context)
			throw new Unreachable;
		return new AbstractBuffer(this.#context.getCurrentTexture());
	}
	features(): GpuSupportedFeatures {
		return new GpuSupportedFeatures(this[inner].features);
	}
	limits(): GpuSupportedLimits {
		return new GpuSupportedLimits(this[inner].limits);
	}
	adapterInfo(): GpuAdapterInfo {
		return new GpuAdapterInfo(this[inner].adapterInfo);
	}
	queue(): GpuQueue {
		return new GpuQueue(this[inner].queue);
	}
	destroy(): void {
		return this[inner].destroy();
	}
	createBuffer(descriptor: GpuBufferDescriptor): GpuBuffer {
		return new GpuBuffer(this[inner].createBuffer({
			...descriptor,
			size: bigIntToNumber(descriptor.size),
		}));
	}
	createTexture(descriptor: GpuTextureDescriptor): GpuTexture {
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
			viewFormats = descriptor.viewFormats.map(convertTextureFormatWasiToWeb);
		}
		return new GpuTexture(this[inner].createTexture({
			...descriptor,
			dimension,
			format: convertTextureFormatWasiToWeb(descriptor.format),
			viewFormats,
		}));
	}
	createSampler(descriptor?: GpuSamplerDescriptor): GpuSampler {
		return new GpuSampler(this[inner].createSampler(descriptor));
	}
	createBindGroupLayout(descriptor: GpuBindGroupLayoutDescriptor): GpuBindGroupLayout {
		return new GpuBindGroupLayout(this[inner].createBindGroupLayout({
			...descriptor,
			entries: descriptor.entries.map(entry => {
				let buffer: GPUBufferBindingLayout | undefined;
				if (entry.buffer) {
					let minBindingSize: number | undefined;
					if (entry.buffer.minBindingSize) {
						minBindingSize = bigIntToNumber(entry.buffer.minBindingSize);
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
						viewDimension = convertTextureViewDimensionWasiToWeb(entry.texture.viewDimension);
					}
					texture = {
						...entry.texture,
						viewDimension,
					};
				}
				let storageTexture: GPUStorageTextureBindingLayout | undefined;
				if (entry.storageTexture) {
					let viewDimension: GPUTextureViewDimension | undefined;
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
	createPipelineLayout(descriptor: GpuPipelineLayoutDescriptor): GpuPipelineLayout {
		return new GpuPipelineLayout(this[inner].createPipelineLayout({
			...descriptor,
			bindGroupLayouts: descriptor.bindGroupLayouts.map(bindGroupLayout => {
				if (bindGroupLayout)
					return bindGroupLayout[inner];
				return undefined;
			}),
		}));
	}
	createBindGroup(descriptor: GpuBindGroupDescriptor): GpuBindGroup {
		return new GpuBindGroup(this[inner].createBindGroup({
			...descriptor,
			layout: descriptor.layout[inner],
			entries: descriptor.entries.map(entry => {
				let resource: GPUBindingResource;
				switch (entry.resource.tag) {
					case 'gpu-buffer-binding':
						let offset: number | undefined;
						if (entry.resource.val.offset) {
							offset = bigIntToNumber(entry.resource.val.offset);
						}
						let size: number | undefined;
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
	createShaderModule(descriptor: GpuShaderModuleDescriptor): GpuShaderModule {
		let compilationHints: GPUShaderModuleCompilationHint[] | undefined;
		if (descriptor.compilationHints) {
			compilationHints = descriptor.compilationHints.map(hint => {
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
		return new GpuShaderModule(this[inner].createShaderModule({
			...descriptor,
			compilationHints,
		}));
	}
	createComputePipeline(descriptor: GpuComputePipelineDescriptor): GpuComputePipeline {
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
	createRenderPipeline(descriptor: GpuRenderPipelineDescriptor): GpuRenderPipeline {
		let buffers: (GPUVertexBufferLayout | undefined)[] | undefined = undefined;
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
							}
						}),
					}
				} else {
					return undefined;
				}
			});
		}
		const vertex: GPUVertexState = {
			...descriptor.vertex,
			constants: undefined, // TODO:
			module: (descriptor.vertex.module as GpuShaderModule)[inner],
			buffers,
		};
		let depthStencil: GPUDepthStencilState | undefined;
		if (descriptor.depthStencil) {
			depthStencil = {
				...descriptor.depthStencil,
				format: convertTextureFormatWasiToWeb(descriptor.depthStencil.format),
			}
		}
		let fragment: GPUFragmentState | undefined;
		if (descriptor.fragment) {
			fragment = {
				...descriptor.fragment,
				constants: undefined, // TODO:
				module: (descriptor.fragment.module as GpuShaderModule)[inner],
				targets: Array.from(descriptor.fragment.targets).map(target => {
					if (target) {
						return {
							...target,
							format: convertTextureFormatWasiToWeb(target.format),
						};
					} else {
						return undefined;
					}
				}),
			}
		}

		return new GpuRenderPipeline(this[inner].createRenderPipeline({
			...descriptor,
			vertex,
			depthStencil,
			fragment,
			layout: convertGpuLayoutWasiToWeb(descriptor.layout),
		}));
	}
	async createComputePipelineAsync(descriptor: GpuComputePipelineDescriptor): Promise<GpuComputePipeline> {
		throw new Todo;
	}
	async createRenderPipelineAsync(descriptor: GpuRenderPipelineDescriptor): Promise<GpuRenderPipeline> {
		throw new Todo;
	}
	createCommandEncoder(descriptor?: GpuCommandEncoderDescriptor): GpuCommandEncoder {
		return new GpuCommandEncoder(this[inner].createCommandEncoder({
			...descriptor,
		}));
	}
	createRenderBundleEncoder(descriptor: GpuRenderBundleEncoderDescriptor): GpuRenderBundleEncoder {
		return new GpuRenderBundleEncoder(this[inner].createRenderBundleEncoder({
			colorFormats: descriptor.colorFormats.map(colorFormat => {
				let colorFormatWeb: GPUTextureFormat | undefined;
				if (colorFormat)
					colorFormatWeb = convertTextureFormatWasiToWeb(colorFormat);
				return colorFormatWeb;
			}),
		}));
	}
	createQuerySet(descriptor: GpuQuerySetDescriptor): GpuQuerySet {
		return new GpuQuerySet(this[inner].createQuerySet({
			...descriptor,
		}));
	}
	lost(): GpuDeviceLostInfo {
		throw new Todo;
	}
	pushErrorScope(filter: GpuErrorFilter): void {
		return this[inner].pushErrorScope(filter);
	}
	async popErrorScope(): Promise<GpuError | undefined> {
		let output: GpuError | undefined;
		let error = await this[inner].popErrorScope();
		if (error) {
			output = new GpuError(error);
		}
		return output;
	}
	onuncapturederrorSubscribe(): Pollable {
		throw new Todo;
	}
	connectGraphicsContext(context: Context): void {
		context.__connectDrawApi(this);
	}
}

export class GpuAdapterInfo {
	[inner]: globalThis.GPUAdapterInfo;
	constructor(i: globalThis.GPUAdapterInfo) {
		this[inner] = i;
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
		throw new Todo;
	}
	subgroupMaxSize(): number {
		throw new Todo;
	}
}

export class GpuBindGroup {
	[inner]: globalThis.GPUBindGroup;
	constructor(i: globalThis.GPUBindGroup) {
		this[inner] = i;
	}
}
export class GpuBindGroupLayout {
	[inner]: globalThis.GPUBindGroupLayout;
	constructor(i: globalThis.GPUBindGroupLayout) {
		this[inner] = i;
	}
}
export class GpuBuffer {
	[inner]: globalThis.GPUBuffer;
	#mappedRange: Uint8Array | undefined;
	constructor(i: globalThis.GPUBuffer) {
		this[inner] = i;
	}
	size(): GpuSize64Out {
		return numberToBigInt(this[inner].size);
	}
	usage(): GpuFlagsConstant {
		return this[inner].usage;
	}
	mapState(): GpuBufferMapState {
		return this[inner].mapState;
	}
	async mapAsync(mode: GpuMapModeFlags, offset?: GpuSize64, size?: GpuSize64): Promise<void> {
		return await this[inner].mapAsync(mode);
	}
	getMappedRangeGetWithCopy(offset?: GpuSize64, size?: GpuSize64): Uint8Array {
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
			this.#mappedRange = new Uint8Array(this[inner].getMappedRange(offsetNumber, sizeNumber));
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
	getMappedRangeSetWithCopy(data: Uint8Array, offset?: GpuSize64, size?: GpuSize64): void {
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
			this.#mappedRange = new Uint8Array(this[inner].getMappedRange(offsetNumber, sizeNumber));
		}
		this.#mappedRange.set(data);
	}
}

export class GpuBufferUsage {
	static mapRead(): GpuFlagsConstant {
		return 0x0001;
	}
	static mapWrite(): GpuFlagsConstant {
		return 0x0002;
	}
	static copySrc(): GpuFlagsConstant {
		return 0x0004;
	}
	static copyDst(): GpuFlagsConstant {
		return 0x0008;
	}
	static index(): GpuFlagsConstant {
		return 0x0010;
	}
	static vertex(): GpuFlagsConstant {
		return 0x0020;
	}
	static uniform(): GpuFlagsConstant {
		return 0x0040;
	}
	static storage(): GpuFlagsConstant {
		return 0x0080;
	}
	static indirect(): GpuFlagsConstant {
		return 0x0100;
	}
	static queryResolve(): GpuFlagsConstant {
		return 0x0200;
	}
}

export class GpuCanvasContext {
	configure(configuration: GpuCanvasConfiguration): void {
		throw new Todo;
	}
	unconfigure(): void {
		throw new Todo;
	}
	getConfiguration(): GpuCanvasConfigurationOwned | undefined {
		throw new Todo;
	}
	getCurrentTexture(): GpuTexture {
		throw new Todo;
	}
}

export class GpuColorWrite {
	static red(): GpuFlagsConstant {
		return 0x1;
	}
	static green(): GpuFlagsConstant {
		return 0x2;
	}
	static blue(): GpuFlagsConstant {
		return 0x4;
	}
	static alpha(): GpuFlagsConstant {
		return 0x8;
	}
	static all(): GpuFlagsConstant {
		return 0xF;
	}
}

export class GpuCommandBuffer {
	[inner]: globalThis.GPUCommandBuffer;
	constructor(i: globalThis.GPUCommandBuffer) {
		this[inner] = i;
	}
}
export class GpuCommandEncoder {
	[inner]: GPUCommandEncoder;
	constructor(i: globalThis.GPUCommandEncoder) {
		this[inner] = i;
	}
	beginRenderPass(descriptor: GpuRenderPassDescriptor): GpuRenderPassEncoder {
		let colorAttachments: (GPURenderPassColorAttachment | undefined)[] = descriptor.colorAttachments.map(colorAttachment => {
			if (colorAttachment) {
				let resolveTarget: GPUTextureView | undefined;
				if (colorAttachment?.resolveTarget)
					resolveTarget = colorAttachment.resolveTarget[inner];
				return {
					...colorAttachment,
					view: colorAttachment.view[inner],
					resolveTarget,
				}
			} else {
				return undefined;
			}
		});
		let occlusionQuerySet: GPUQuerySet | undefined;
		if (descriptor?.occlusionQuerySet) {
			occlusionQuerySet = descriptor.occlusionQuerySet[inner];
		}
		let timestampWrites: GPUComputePassTimestampWrites | undefined;
		if (descriptor?.timestampWrites) {
			timestampWrites = {
				...descriptor.timestampWrites,
				querySet: descriptor.timestampWrites.querySet[inner],
			};
		}
		let depthStencilAttachment: GPURenderPassDepthStencilAttachment | undefined;
		if(descriptor?.depthStencilAttachment) {
			depthStencilAttachment = {
				...descriptor.depthStencilAttachment,
				view: descriptor.depthStencilAttachment.view[inner],
			}
		}
		let maxDrawCount: number | undefined;
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
	beginComputePass(descriptor?: GpuComputePassDescriptor): GpuComputePassEncoder {
		let descriptorWeb: GPUComputePassDescriptor | undefined;
		if (descriptor) {
			let timestampWrites: GPUComputePassTimestampWrites | undefined;
			if(descriptor.timestampWrites) {
				timestampWrites = {
					...descriptor.timestampWrites,
					querySet: descriptor.timestampWrites.querySet[inner],
				};
			}
			descriptorWeb = {
				...descriptor,
				timestampWrites,
			}
		}
		return new GpuComputePassEncoder(this[inner].beginComputePass(descriptorWeb));
	}
	copyBufferToBuffer(source: GpuBuffer, sourceOffset: GpuSize64, destination: GpuBuffer, destinationOffset: GpuSize64, size: GpuSize64): void {
		this[inner].copyBufferToBuffer(source[inner], bigIntToNumber(sourceOffset), destination[inner], bigIntToNumber(destinationOffset), bigIntToNumber(size));
	}
	copyBufferToTexture(source: GpuTexelCopyBufferInfo, destination: GpuTexelCopyTextureInfo, copySize: GpuExtent3D): void {
		let sourceOffset: number | undefined;
		if (source.offset)
			sourceOffset = bigIntToNumber(source.offset);
		this[inner].copyBufferToTexture(
			{
				...source,
				buffer: source.buffer[inner],
				offset: sourceOffset
			},
			{
				...destination,
				texture: destination.texture[inner],
			},
			copySize
		);
	}
	copyTextureToBuffer(source: GpuTexelCopyTextureInfo, destination: GpuTexelCopyBufferInfo, copySize: GpuExtent3D): void {
		let destinationOffset: number | undefined;
		if (destination.offset)
			destinationOffset = bigIntToNumber(destination.offset);
		this[inner].copyTextureToBuffer(
			{
				...source,
				texture: source.texture[inner],
			},
			{
				...destination,
				buffer: destination.buffer[inner],
				offset: destinationOffset
			},
			copySize
		);
	}
	copyTextureToTexture(source: GpuTexelCopyTextureInfo, destination: GpuTexelCopyTextureInfo, copySize: GpuExtent3D): void {
		this[inner].copyTextureToTexture(
			{
				...source,
				texture: source.texture[inner],
			},
			{
				...destination,
				texture: destination.texture[inner],
			},
			copySize
		);
	}
	clearBuffer(buffer: GpuBuffer, offset?: GpuSize64, size?: GpuSize64): void {
		let offsetNumber: number | undefined;
		if (offset)
			offsetNumber = bigIntToNumber(offset);
		let sizeNumber: number | undefined;
		if (size)
			sizeNumber = bigIntToNumber(size);
		this[inner].clearBuffer(buffer[inner], offsetNumber, sizeNumber);
	}
	resolveQuerySet(querySet: GpuQuerySet, firstQuery: GpuSize32, queryCount: GpuSize32, destination: GpuBuffer, destinationOffset: GpuSize64): void {
		return this[inner].resolveQuerySet(querySet[inner], firstQuery, queryCount, destination[inner], bigIntToNumber(destinationOffset));
	}
	finish(descriptor?: GpuCommandBufferDescriptor): GpuCommandBuffer {
		return new GpuCommandBuffer(this[inner].finish({
			...descriptor
		}));
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

export class GpuCompilationInfo {
	[inner]: globalThis.GPUCompilationInfo;
	constructor(i: globalThis.GPUCompilationInfo) {
		this[inner] = i;
	}
	messages(): Array<GpuCompilationMessage> {
		return this[inner].messages.map(message => new GpuCompilationMessage(message));
	}
}

export class GpuCompilationMessage {
	[inner]: globalThis.GPUCompilationMessage;
	constructor(i: globalThis.GPUCompilationMessage) {
		this[inner] = i;
	}
	message(): string {
		return this[inner].message;
	}
	type(): GpuCompilationMessageType {
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

export class GpuComputePassEncoder {
	[inner]: globalThis.GPUComputePassEncoder;
	constructor(i: globalThis.GPUComputePassEncoder) {
		this[inner] = i;
	}
	setPipeline(pipeline: GpuComputePipeline): void {
		return this[inner].setPipeline(pipeline[inner]);
	}
	dispatchWorkgroups(workgroupCountX: GpuSize32, workgroupCountY?: GpuSize32, workgroupCountZ?: GpuSize32): void {
		return this[inner].dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
	}
	dispatchWorkgroupsIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void {
		return this[inner].dispatchWorkgroupsIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
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
	setBindGroup(index: GpuIndex32, bindGroup?: GpuBindGroup, dynamicOffsetsData?: Uint32Array, dynamicOffsetsDataStart?: GpuSize64, dynamicOffsetsDataLength?: GpuSize32): void {
		let bindGroupWeb: GPUBindGroup | undefined;
		if (bindGroup) {
			bindGroupWeb = bindGroup[inner];
		}
		if (dynamicOffsetsData === undefined) {
			return this[inner].setBindGroup(
				index,
				bindGroupWeb,
			);
		} else {
			let dynamicOffsetsDataStartNumber: number;
			if (dynamicOffsetsDataStart) {
				dynamicOffsetsDataStartNumber = bigIntToNumber(dynamicOffsetsDataStart);
			} else {
				dynamicOffsetsDataStartNumber = 0;
			}
			if (dynamicOffsetsDataLength === undefined) {
				dynamicOffsetsDataLength = dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
			}
			return this[inner].setBindGroup(
				index,
				bindGroupWeb,
				dynamicOffsetsData,
				dynamicOffsetsDataStartNumber,
				dynamicOffsetsDataLength
			);
		}
	}
}

export class GpuComputePipeline {
	[inner]: globalThis.GPUComputePipeline;
	constructor(i: globalThis.GPUComputePipeline) {
		this[inner] = i;
	}
	getBindGroupLayout(index: number): GpuBindGroupLayout {
		return new GpuBindGroupLayout(this[inner].getBindGroupLayout(index));
	}
}

export class GpuMapMode {
	static read(): GpuFlagsConstant {
		return 0x0001;
	}
	static write(): GpuFlagsConstant {
		return 0x0002;
	}
}

export class GpuPipelineLayout {
	[inner]: globalThis.GPUPipelineLayout;
	constructor(i: globalThis.GPUPipelineLayout) {
		this[inner] = i;
	}
}
export class GpuQuerySet {
	[inner]: globalThis.GPUQuerySet;
	constructor(i: globalThis.GPUQuerySet) {
		this[inner] = i;
	}
	destroy(): void {
		return this[inner].destroy();
	}
	type(): GpuQueryType {
		return this[inner].type;
	}
	count(): GpuSize32Out {
		return this[inner].count;
	}
}

export class GpuQueue {
	[inner]: globalThis.GPUQueue;
	constructor(i: globalThis.GPUQueue) {
		this[inner] = i;
	}
	submit(commandBuffers: Array<GpuCommandBuffer>): void {
		return this[inner].submit(commandBuffers.map(c => c[inner]));
	}
	onSubmittedWorkDone(): void {
		throw new Todo;
	}
	writeBufferWithCopy(buffer: GpuBuffer, bufferOffset: GpuSize64, data: Uint8Array, dataOffset?: GpuSize64, size?: GpuSize64): void {
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
			data,
			dataOffsetNumber,
			sizeNumber
		);
	}
	writeTextureWithCopy(destination: GpuTexelCopyTextureInfo, data: Uint8Array, dataLayout: GpuTexelCopyBufferLayout, size: GpuExtent3D): void {
		let offset: number | undefined;
		if (dataLayout.offset) {
			offset = bigIntToNumber(dataLayout.offset);
		}
		return this[inner].writeTexture(
			{
				...destination,
				texture: destination.texture[inner],
			},
			data,
			{
				...dataLayout,
				offset
			},
			size
		);
	}
}

export class GpuRenderBundle {
	[inner]: globalThis.GPURenderBundle;
	constructor(i: globalThis.GPURenderBundle) {
		this[inner] = i;
	}
	
}

export class GpuRenderBundleEncoder {
	[inner]: globalThis.GPURenderBundleEncoder;
	constructor(i: globalThis.GPURenderBundleEncoder) {
		this[inner] = i;
	}
	finish(descriptor?: GpuRenderBundleDescriptor): GpuRenderBundle {
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
	setBindGroup(index: GpuIndex32, bindGroup?: GpuBindGroup, dynamicOffsetsData?: Uint32Array, dynamicOffsetsDataStart?: GpuSize64, dynamicOffsetsDataLength?: GpuSize32): void {
		let bindGroupWeb: GPUBindGroup | undefined;
		if (bindGroup) {
			bindGroupWeb = bindGroup[inner];
		}
		if (dynamicOffsetsData === undefined) {
			return this[inner].setBindGroup(
				index,
				bindGroupWeb,
			);
		} else {
			let dynamicOffsetsDataStartNumber: number;
			if (dynamicOffsetsDataStart) {
				dynamicOffsetsDataStartNumber = bigIntToNumber(dynamicOffsetsDataStart);
			} else {
				dynamicOffsetsDataStartNumber = 0;
			}
			if (dynamicOffsetsDataLength === undefined) {
				dynamicOffsetsDataLength = dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
			}
			return this[inner].setBindGroup(
				index,
				bindGroupWeb,
				dynamicOffsetsData,
				dynamicOffsetsDataStartNumber,
				dynamicOffsetsDataLength
			);
		}
	}
	setPipeline(pipeline: GpuRenderPipeline): void {
		return this[inner].setPipeline(pipeline[inner]);
	}
	setIndexBuffer(buffer: GpuBuffer, indexFormat: GpuIndexFormat, offset?: GpuSize64, size?: GpuSize64): void {
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
	setVertexBuffer(slot: GpuIndex32, buffer?: GpuBuffer, offset?: GpuSize64, size?: GpuSize64): void {
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
	draw(vertexCount: GpuSize32, instanceCount?: GpuSize32, firstVertex?: GpuSize32, firstInstance?: GpuSize32): void {
		return this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
	}
	drawIndexed(indexCount: GpuSize32, instanceCount?: GpuSize32, firstIndex?: GpuSize32, baseVertex?: GpuSignedOffset32, firstInstance?: GpuSize32): void {
		return this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
	}
	drawIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void {
		return this[inner].drawIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
	}
	drawIndexedIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void {
		return this[inner].drawIndexedIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
	}
}

export class GpuRenderPassEncoder {
	[inner]: globalThis.GPURenderPassEncoder;
	constructor(i: globalThis.GPURenderPassEncoder) {
		this[inner] = i;
	}
	setViewport(x: number, y: number, width: number, height: number, minDepth: number, maxDepth: number): void {
		return this[inner].setViewport(x, y, width, height, minDepth, maxDepth);
	}
	setScissorRect(x: GpuIntegerCoordinate, y: GpuIntegerCoordinate, width: GpuIntegerCoordinate, height: GpuIntegerCoordinate): void {
		return this[inner].setScissorRect(x, y, width, height);
	}
	setBlendConstant(color: GpuColor): void {
		return this[inner].setBlendConstant(color);
	}
	setStencilReference(reference: GpuStencilValue): void {
		return this[inner].setStencilReference(reference);
	}
	beginOcclusionQuery(queryIndex: GpuSize32): void {
		return this[inner].beginOcclusionQuery(queryIndex);
	}
	endOcclusionQuery(): void {
		return this[inner].endOcclusionQuery();
	}
	executeBundles(bundles: Array<GpuRenderBundle>): void {
		return this[inner].executeBundles(bundles.map(bundle => bundle[inner]));
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
	setBindGroup(index: GpuIndex32, bindGroup?: GpuBindGroup, dynamicOffsetsData?: Uint32Array, dynamicOffsetsDataStart?: GpuSize64, dynamicOffsetsDataLength?: GpuSize32): void {
		let bindGroupWeb: GPUBindGroup | undefined;
		if (bindGroup) {
			bindGroupWeb = bindGroup[inner];
		}
		if (dynamicOffsetsData === undefined) {
			return this[inner].setBindGroup(
				index,
				bindGroupWeb,
			);
		} else {
			let dynamicOffsetsDataStartNumber: number;
			if (dynamicOffsetsDataStart) {
				dynamicOffsetsDataStartNumber = bigIntToNumber(dynamicOffsetsDataStart);
			} else {
				dynamicOffsetsDataStartNumber = 0;
			}
			if (dynamicOffsetsDataLength === undefined) {
				dynamicOffsetsDataLength = dynamicOffsetsData.length - dynamicOffsetsDataStartNumber;
			}
			return this[inner].setBindGroup(
				index,
				bindGroupWeb,
				dynamicOffsetsData,
				dynamicOffsetsDataStartNumber,
				dynamicOffsetsDataLength
			);
		}
	}
	setPipeline(pipeline: GpuRenderPipeline): void {
		return this[inner].setPipeline(pipeline[inner]);
	}
	setIndexBuffer(buffer: GpuBuffer, indexFormat: GpuIndexFormat, offset?: GpuSize64, size?: GpuSize64): void {
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
	setVertexBuffer(slot: GpuIndex32, buffer?: GpuBuffer, offset?: GpuSize64, size?: GpuSize64): void {
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
	draw(vertexCount: GpuSize32, instanceCount?: GpuSize32, firstVertex?: GpuSize32, firstInstance?: GpuSize32): void {
		return this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
	}
	drawIndexed(indexCount: GpuSize32, instanceCount?: GpuSize32, firstIndex?: GpuSize32, baseVertex?: GpuSignedOffset32, firstInstance?: GpuSize32): void {
		return this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
	}
	drawIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void {
		return this[inner].drawIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
	}
	drawIndexedIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void {
		return this[inner].drawIndexedIndirect(indirectBuffer[inner], bigIntToNumber(indirectOffset));
	}
}

export class GpuRenderPipeline {
	[inner]: globalThis.GPURenderPipeline;
	constructor(i: globalThis.GPURenderPipeline) {
		this[inner] = i;
	}
	getBindGroupLayout(index: number): GpuBindGroupLayout {
		return new GpuBindGroupLayout(this[inner].getBindGroupLayout(index));
	}
}

export class GpuSampler {
	[inner]: globalThis.GPUSampler;
	constructor(i: globalThis.GPUSampler) {
		this[inner] = i;
	}
}

export class GpuShaderModule {
	[inner]: globalThis.GPUShaderModule;
	constructor(i: globalThis.GPUShaderModule) {
		this[inner] = i;
	}
	async getCompilationInfo(): Promise<GpuCompilationInfo> {
		return new GpuCompilationInfo(await this[inner].getCompilationInfo());
	}
}

export class GpuShaderStage {
	static vertex(): GpuFlagsConstant {
		return 0x1;
	}
	static fragment(): GpuFlagsConstant {
		return 0x2;
	}
	static compute(): GpuFlagsConstant {
		return 0x4;
	}
}

export class GpuSupportedFeatures {
	[inner]: globalThis.GPUSupportedFeatures;
	constructor(i: globalThis.GPUSupportedFeatures) {
		this[inner] = i;
	}
	has(value: string): boolean {
		return this[inner].has(value);
	}
}

export class GpuSupportedLimits {
	[inner]: globalThis.GPUSupportedLimits;
	constructor(i: globalThis.GPUSupportedLimits) {
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
}

export class GpuTexture {
	[inner]: globalThis.GPUTexture;
	constructor(i: globalThis.GPUTexture) {
		this[inner] = i;
	}
	createView(descriptor?: GpuTextureViewDescriptor): GpuTextureView {
		let format: GPUTextureFormat | undefined;
		if (descriptor?.format)
			format = convertTextureFormatWasiToWeb(descriptor.format);
		let dimension: GPUTextureViewDimension | undefined;
		if (descriptor?.dimension)
			dimension = convertTextureViewDimensionWasiToWeb(descriptor.dimension);
		return new GpuTextureView(this[inner].createView({
			...descriptor,
			dimension,
			format,
		}));
	}
	destroy(): void {
		return this[inner].destroy();
	}
	width(): GpuIntegerCoordinateOut {
		return this[inner].width;
	}
	height(): GpuIntegerCoordinateOut {
		return this[inner].height;
	}
	depthOrArrayLayers(): GpuIntegerCoordinateOut {
		return this[inner].depthOrArrayLayers;
	}
	mipLevelCount(): GpuIntegerCoordinateOut {
		return this[inner].mipLevelCount;
	}
	sampleCount(): GpuSize32Out {
		return this[inner].sampleCount;
	}
	dimension(): GpuTextureDimension {
		return convertTextureDimensionWebToWasi(this[inner].dimension);
	}
	format(): GpuTextureFormat {
		return convertTextureFormatWebToWasi(this[inner].format);
	}
	usage(): GpuFlagsConstant {
		return this[inner].usage;
	}
	static fromGraphicsBuffer(buffer: AbstractBuffer): GpuTexture {
		return new GpuTexture(buffer.buffer);
	}
}

export class GpuTextureUsage {
	static copySrc(): GpuFlagsConstant {
		return 0x01;
	}
	static copyDst(): GpuFlagsConstant {
		return 0x02;
	}
	static textureBinding(): GpuFlagsConstant {
		return 0x04;
	}
	static storageBinding(): GpuFlagsConstant {
		return 0x08;
	}
	static renderAttachment(): GpuFlagsConstant {
		return 0x10;
	}
}

export class GpuTextureView {
	[inner]: globalThis.GPUTextureView;
	constructor(i: globalThis.GPUTextureView) {
		this[inner] = i;
	}
}

export class GpuUncapturedErrorEvent {
	[inner]: globalThis.GPUUncapturedErrorEvent;
	constructor(i: globalThis.GPUUncapturedErrorEvent) {
		this[inner] = i;
	}
	error(): GpuError {
		return new GpuError(this[inner].error);
	}
}

export class RecordGpuPipelineConstantValue {
	private map: Map<string, GpuPipelineConstantValue> = new Map();
	add(key: string, value: GpuPipelineConstantValue): void {
		this.map.set(key, value);
	}
	get(key: string): GpuPipelineConstantValue | undefined {
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
	entries(): Array<[string, GpuPipelineConstantValue]> {
		return Array.from(this.map.entries());
	}
}

export class RecordOptionGpuSize64 {
	private map: Map<string, GpuSize64 | undefined> = new Map();
	add(key: string, value: GpuSize64 | undefined): void {
		this.map.set(key, value);
	}
	get(key: string): GpuSize64 | undefined {
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
	values(): Array<GpuSize64 | undefined> {
		return Array.from(this.map.values());
	}
	entries(): Array<[string, GpuSize64 | undefined]> {
		return Array.from(this.map.entries());
	}
}

export class WgslLanguageFeatures {
	[inner]: globalThis.WGSLLanguageFeatures;
	constructor(i: globalThis.WGSLLanguageFeatures) {
		this[inner] = i;
	}
	has(value: string): boolean {
		return this[inner].has(value);
	}
}

export class GpuDeviceLostInfo {
	[inner]: globalThis.GPUDeviceLostInfo;
	constructor(i: globalThis.GPUDeviceLostInfo) {
		this[inner] = i;
	}
	reason(): GpuDeviceLostReason {
		return this[inner].reason;
	}
	message(): string {
		return this[inner].message;
	}
}

export interface GpuLayoutModeSpecific {
	tag: 'specific',
	val: GpuPipelineLayout,
}
export interface GpuLayoutModeAuto {
	tag: 'auto',
}
export interface GpuShaderModuleCompilationHint {
	entryPoint: string,
	layout?: GpuLayoutMode,
}
export interface GpuShaderModuleDescriptor {
	code: string,
	compilationHints?: Array<GpuShaderModuleCompilationHint>,
	label?: string,
}

export interface GpuPipelineLayoutDescriptor {
	bindGroupLayouts: Array<GpuBindGroupLayout | undefined>,
	label?: string,
}
export type GpuDepthBias = number;
export interface GpuDepthStencilState {
	format: GpuTextureFormat,
	depthWriteEnabled?: boolean,
	depthCompare?: GpuCompareFunction,
	stencilFront?: GpuStencilFaceState,
	stencilBack?: GpuStencilFaceState,
	stencilReadMask?: GpuStencilValue,
	stencilWriteMask?: GpuStencilValue,
	depthBias?: GpuDepthBias,
	depthBiasSlopeScale?: number,
	depthBiasClamp?: number,
}
export interface GpuRenderPipelineDescriptor {
	vertex: GpuVertexState,
	primitive?: GpuPrimitiveState,
	depthStencil?: GpuDepthStencilState,
	multisample?: GpuMultisampleState,
	fragment?: GpuFragmentState,
	layout: GpuLayoutMode,
	label?: string,
}
export interface GpuColorTargetState {
	format: GpuTextureFormat,
	blend?: GpuBlendState,
	writeMask?: GpuColorWriteFlags,
}
export interface GpuFragmentState {
	targets: Array<GpuColorTargetState | undefined>,
	module: GpuShaderModule,
	entryPoint?: string,
	constants?: RecordGpuPipelineConstantValue,
}
export interface GpuMultisampleState {
	count?: GpuSize32,
	mask?: GpuSampleMask,
	alphaToCoverageEnabled?: boolean,
}
export interface GpuStencilFaceState {
	compare?: GpuCompareFunction,
	failOp?: GpuStencilOperation,
	depthFailOp?: GpuStencilOperation,
	passOp?: GpuStencilOperation,
}
export interface GpuPrimitiveState {
	topology?: GpuPrimitiveTopology,
	stripIndexFormat?: GpuIndexFormat,
	frontFace?: GpuFrontFace,
	cullMode?: GpuCullMode,
	unclippedDepth?: boolean,
}
export interface GpuVertexState {
	buffers?: Array<GpuVertexBufferLayout | undefined>,
	module: GpuShaderModule,
	entryPoint?: string,
	constants?: RecordGpuPipelineConstantValue,
}

export class GpuError {
	[inner]: globalThis.GPUError;
	constructor(i: globalThis.GPUError) {
		this[inner] = i;
	}
	message(): string {
		return this[inner].message;
	}
	kind(): GpuErrorKind {
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
			}
		}
		throw new Unreachable;
	}
}

export type GpuPowerPreference = 'low-power' | 'high-performance';
export interface GpuRequestAdapterOptions {
	featureLevel?: string,
	powerPreference?: GpuPowerPreference,
	forceFallbackAdapter?: boolean,
	xrCompatible?: boolean,
}

export type GpuFeatureName = 'depth-clip-control' | 'depth32float-stencil8' | 'texture-compression-bc' | 'texture-compression-bc-sliced3d' | 'texture-compression-etc2' | 'texture-compression-astc' | 'texture-compression-astc-sliced3d' | 'timestamp-query' | 'indirect-first-instance' | 'shader-f16' | 'rg11b10ufloat-renderable' | 'bgra8unorm-storage' | 'float32-filterable' | 'float32-blendable' | 'clip-distances' | 'dual-source-blending' | 'subgroups';
export type GpuBufferMapState = 'unmapped' | 'pending' | 'mapped';
export type GpuBufferUsageFlags = number;
export type GpuMapModeFlags = number;
export type GpuTextureDimension = 'd1' | 'd2' | 'd3';
export type GpuTextureUsageFlags = number;
export type GpuTextureViewDimension = 'd1' | 'd2' | 'd2-array' | 'cube' | 'cube-array' | 'd3';
export type GpuTextureAspect = 'all' | 'stencil-only' | 'depth-only';
export type GpuTextureFormat = 'r8unorm' | 'r8snorm' | 'r8uint' | 'r8sint' | 'r16uint' | 'r16sint' | 'r16float' | 'rg8unorm' | 'rg8snorm' | 'rg8uint' | 'rg8sint' | 'r32uint' | 'r32sint' | 'r32float' | 'rg16uint' | 'rg16sint' | 'rg16float' | 'rgba8unorm' | 'rgba8unorm-srgb' | 'rgba8snorm' | 'rgba8uint' | 'rgba8sint' | 'bgra8unorm' | 'bgra8unorm-srgb' | 'rgb9e5ufloat' | 'rgb10a2uint' | 'rgb10a2unorm' | 'rg11b10ufloat' | 'rg32uint' | 'rg32sint' | 'rg32float' | 'rgba16uint' | 'rgba16sint' | 'rgba16float' | 'rgba32uint' | 'rgba32sint' | 'rgba32float' | 'stencil8' | 'depth16unorm' | 'depth24plus' | 'depth24plus-stencil8' | 'depth32float' | 'depth32float-stencil8' | 'bc1-rgba-unorm' | 'bc1-rgba-unorm-srgb' | 'bc2-rgba-unorm' | 'bc2-rgba-unorm-srgb' | 'bc3-rgba-unorm' | 'bc3-rgba-unorm-srgb' | 'bc4-r-unorm' | 'bc4-r-snorm' | 'bc5-rg-unorm' | 'bc5-rg-snorm' | 'bc6h-rgb-ufloat' | 'bc6h-rgb-float' | 'bc7-rgba-unorm' | 'bc7-rgba-unorm-srgb' | 'etc2-rgb8unorm' | 'etc2-rgb8unorm-srgb' | 'etc2-rgb8a1unorm' | 'etc2-rgb8a1unorm-srgb' | 'etc2-rgba8unorm' | 'etc2-rgba8unorm-srgb' | 'eac-r11unorm' | 'eac-r11snorm' | 'eac-rg11unorm' | 'eac-rg11snorm' | 'astc4x4-unorm' | 'astc4x4-unorm-srgb' | 'astc5x4-unorm' | 'astc5x4-unorm-srgb' | 'astc5x5-unorm' | 'astc5x5-unorm-srgb' | 'astc6x5-unorm' | 'astc6x5-unorm-srgb' | 'astc6x6-unorm' | 'astc6x6-unorm-srgb' | 'astc8x5-unorm' | 'astc8x5-unorm-srgb' | 'astc8x6-unorm' | 'astc8x6-unorm-srgb' | 'astc8x8-unorm' | 'astc8x8-unorm-srgb' | 'astc10x5-unorm' | 'astc10x5-unorm-srgb' | 'astc10x6-unorm' | 'astc10x6-unorm-srgb' | 'astc10x8-unorm' | 'astc10x8-unorm-srgb' | 'astc10x10-unorm' | 'astc10x10-unorm-srgb' | 'astc12x10-unorm' | 'astc12x10-unorm-srgb' | 'astc12x12-unorm' | 'astc12x12-unorm-srgb';

export type GpuAddressMode = 'clamp-to-edge' | 'repeat' | 'mirror-repeat';

export type GpuFilterMode = 'nearest' | 'linear';

export type GpuMipmapFilterMode = 'nearest' | 'linear';

export type GpuCompareFunction = 'never' | 'less' | 'equal' | 'less-equal' | 'greater' | 'not-equal' | 'greater-equal' | 'always';
export interface GpuSamplerDescriptor {
	addressModeU?: GpuAddressMode,
	addressModeV?: GpuAddressMode,
	addressModeW?: GpuAddressMode,
	magFilter?: GpuFilterMode,
	minFilter?: GpuFilterMode,
	mipmapFilter?: GpuMipmapFilterMode,
	lodMinClamp?: number,
	lodMaxClamp?: number,
	compare?: GpuCompareFunction,
	maxAnisotropy?: number,
	label?: string,
}
export type GpuShaderStageFlags = number;

export type GpuBufferBindingType = 'uniform' | 'storage' | 'read-only-storage';

export type GpuSamplerBindingType = 'filtering' | 'non-filtering' | 'comparison';
export interface GpuSamplerBindingLayout {
	type?: GpuSamplerBindingType,
}

export type GpuTextureSampleType = 'float' | 'unfilterable-float' | 'depth' | 'sint' | 'uint';
export interface GpuTextureBindingLayout {
	sampleType?: GpuTextureSampleType,
	viewDimension?: GpuTextureViewDimension,
	multisampled?: boolean,
}
export type GpuStorageTextureAccess = 'write-only' | 'read-only' | 'read-write';
export interface GpuStorageTextureBindingLayout {
	access?: GpuStorageTextureAccess,
	format: GpuTextureFormat,
	viewDimension?: GpuTextureViewDimension,
}
export interface GpuPipelineLayoutDescriptor {
	bindGroupLayouts: Array<GpuBindGroupLayout | undefined>,
	label?: string,
}

export type GpuCompilationMessageType = 'error' | 'warning' | 'info';

export type GpuPipelineErrorReason = 'validation' | 'internal';
export type GpuLayoutMode = GpuLayoutModeSpecific | GpuLayoutModeAuto;
export interface GpuLayoutModeSpecific {
	tag: 'specific',
	val: GpuPipelineLayout,
}
export interface GpuLayoutModeAuto {
	tag: 'auto',
}
export interface GpuShaderModuleCompilationHint {
	entryPoint: string,
	layout?: GpuLayoutMode,
}
export interface GpuShaderModuleDescriptor {
	code: string,
	compilationHints?: Array<GpuShaderModuleCompilationHint>,
	label?: string,
}
export interface GpuProgrammableStage {
	module: GpuShaderModule,
	entryPoint?: string,
	constants?: RecordGpuPipelineConstantValue,
}
export type GpuPipelineConstantValue = number;
export interface GpuComputePipelineDescriptor {
	compute: GpuProgrammableStage,
	layout: GpuLayoutMode,
	label?: string,
}
export type GpuPrimitiveTopology = 'point-list' | 'line-list' | 'line-strip' | 'triangle-list' | 'triangle-strip';
export type GpuFrontFace = 'ccw' | 'cw';
export type GpuCullMode = 'none' | 'front' | 'back';
export type GpuColorWriteFlags = number;

export type GpuBlendFactor = 'zero' | 'one' | 'src' | 'one-minus-src' | 'src-alpha' | 'one-minus-src-alpha' | 'dst' | 'one-minus-dst' | 'dst-alpha' | 'one-minus-dst-alpha' | 'src-alpha-saturated' | 'constant' | 'one-minus-constant' | 'src1' | 'one-minus-src1' | 'src1-alpha' | 'one-minus-src1-alpha';

export type GpuBlendOperation = 'add' | 'subtract' | 'reverse-subtract' | 'min' | 'max';
export interface GpuBlendComponent {
	operation?: GpuBlendOperation,
	srcFactor?: GpuBlendFactor,
	dstFactor?: GpuBlendFactor,
}
export interface GpuBlendState {
	color: GpuBlendComponent,
	alpha: GpuBlendComponent,
}
export interface GpuColorTargetState {
	format: GpuTextureFormat,
	blend?: GpuBlendState,
	writeMask?: GpuColorWriteFlags,
}
export interface GpuFragmentState {
	targets: Array<GpuColorTargetState | undefined>,
	module: GpuShaderModule,
	entryPoint?: string,
	constants?: RecordGpuPipelineConstantValue,
}

export type GpuStencilOperation = 'keep' | 'zero' | 'replace' | 'invert' | 'increment-clamp' | 'decrement-clamp' | 'increment-wrap' | 'decrement-wrap';
export interface GpuStencilFaceState {
	compare?: GpuCompareFunction,
	failOp?: GpuStencilOperation,
	depthFailOp?: GpuStencilOperation,
	passOp?: GpuStencilOperation,
}
export type GpuIndexFormat = 'uint16' | 'uint32';
export interface GpuPrimitiveState {
	topology?: GpuPrimitiveTopology,
	stripIndexFormat?: GpuIndexFormat,
	frontFace?: GpuFrontFace,
	cullMode?: GpuCullMode,
	unclippedDepth?: boolean,
}

export type GpuVertexFormat = 'uint8' | 'uint8x2' | 'uint8x4' | 'sint8' | 'sint8x2' | 'sint8x4' | 'unorm8' | 'unorm8x2' | 'unorm8x4' | 'snorm8' | 'snorm8x2' | 'snorm8x4' | 'uint16' | 'uint16x2' | 'uint16x4' | 'sint16' | 'sint16x2' | 'sint16x4' | 'unorm16' | 'unorm16x2' | 'unorm16x4' | 'snorm16' | 'snorm16x2' | 'snorm16x4' | 'float16' | 'float16x2' | 'float16x4' | 'float32' | 'float32x2' | 'float32x3' | 'float32x4' | 'uint32' | 'uint32x2' | 'uint32x3' | 'uint32x4' | 'sint32' | 'sint32x2' | 'sint32x3' | 'sint32x4' | 'unorm1010102' | 'unorm8x4-bgra';

export type GpuVertexStepMode = 'vertex' | 'instance';
export interface GpuCommandBufferDescriptor {
	label?: string,
}
export interface GpuCommandEncoderDescriptor {
	label?: string,
}
export type GpuLoadOp = 'load' | 'clear';
export type GpuStoreOp = 'store' | 'discard';
export interface GpuRenderBundleDescriptor {
	label?: string,
}
export interface GpuQueueDescriptor {
	label?: string,
}
export interface GpuDeviceDescriptor {
	requiredFeatures?: Array<GpuFeatureName>,
	requiredLimits?: RecordOptionGpuSize64,
	defaultQueue?: GpuQueueDescriptor,
	label?: string,
}
export type GpuQueryType = 'occlusion' | 'timestamp';

export type GpuCanvasAlphaMode = 'opaque' | 'premultiplied';

export type GpuCanvasToneMappingMode = 'standard' | 'extended';
export interface GpuCanvasToneMapping {
	mode?: GpuCanvasToneMappingMode,
}

export type GpuDeviceLostReason = 'unknown' | 'destroyed';

export type GpuErrorFilter = 'validation' | 'out-of-memory' | 'internal';
export type GpuBufferDynamicOffset = number;
export type GpuStencilValue = number;
export interface GpuRenderPassDepthStencilAttachment {
	view: GpuTextureView,
	depthClearValue?: number,
	depthLoadOp?: GpuLoadOp,
	depthStoreOp?: GpuStoreOp,
	depthReadOnly?: boolean,
	stencilClearValue?: GpuStencilValue,
	stencilLoadOp?: GpuLoadOp,
	stencilStoreOp?: GpuStoreOp,
	stencilReadOnly?: boolean,
}
export type GpuSampleMask = number;
export interface GpuDepthStencilState {
	format: GpuTextureFormat,
	depthWriteEnabled?: boolean,
	depthCompare?: GpuCompareFunction,
	stencilFront?: GpuStencilFaceState,
	stencilBack?: GpuStencilFaceState,
	stencilReadMask?: GpuStencilValue,
	stencilWriteMask?: GpuStencilValue,
	depthBias?: GpuDepthBias,
	depthBiasSlopeScale?: number,
	depthBiasClamp?: number,
}
export type GpuSize64 = bigint;
export interface GpuBufferDescriptor {
	size: GpuSize64,
	usage: GpuBufferUsageFlags,
	mappedAtCreation?: boolean,
	label?: string,
}
export interface GpuBufferBindingLayout {
	type?: GpuBufferBindingType,
	hasDynamicOffset?: boolean,
	minBindingSize?: GpuSize64,
}
export interface GpuBufferBinding {
	buffer: GpuBuffer,
	offset?: GpuSize64,
	size?: GpuSize64,
}
export type GpuBindingResource = GpuBindingResourceGpuBufferBinding | GpuBindingResourceGpuSampler | GpuBindingResourceGpuTextureView;
export interface GpuBindingResourceGpuBufferBinding {
	tag: 'gpu-buffer-binding',
	val: GpuBufferBinding,
}
export interface GpuBindingResourceGpuSampler {
	tag: 'gpu-sampler',
	val: GpuSampler,
}
export interface GpuBindingResourceGpuTextureView {
	tag: 'gpu-texture-view',
	val: GpuTextureView,
}
export type GpuIntegerCoordinate = number;
export interface GpuTextureViewDescriptor {
	format?: GpuTextureFormat,
	dimension?: GpuTextureViewDimension,
	usage?: GpuTextureUsageFlags,
	aspect?: GpuTextureAspect,
	baseMipLevel?: GpuIntegerCoordinate,
	mipLevelCount?: GpuIntegerCoordinate,
	baseArrayLayer?: GpuIntegerCoordinate,
	arrayLayerCount?: GpuIntegerCoordinate,
	label?: string,
}
export type GpuIndex32 = number;
export interface GpuBindGroupLayoutEntry {
	binding: GpuIndex32,
	visibility: GpuShaderStageFlags,
	buffer?: GpuBufferBindingLayout,
	sampler?: GpuSamplerBindingLayout,
	texture?: GpuTextureBindingLayout,
	storageTexture?: GpuStorageTextureBindingLayout,
}
export interface GpuBindGroupLayoutDescriptor {
	entries: Array<GpuBindGroupLayoutEntry>,
	label?: string,
}
export interface GpuBindGroupEntry {
	binding: GpuIndex32,
	resource: GpuBindingResource,
}
export interface GpuBindGroupDescriptor {
	layout: GpuBindGroupLayout,
	entries: Array<GpuBindGroupEntry>,
	label?: string,
}
export interface GpuVertexAttribute {
	format: GpuVertexFormat,
	offset: GpuSize64,
	shaderLocation: GpuIndex32,
}
export interface GpuVertexBufferLayout {
	arrayStride: GpuSize64,
	stepMode?: GpuVertexStepMode,
	attributes: Array<GpuVertexAttribute>,
}
export interface GpuVertexState {
	buffers?: Array<GpuVertexBufferLayout | undefined>,
	module: GpuShaderModule,
	entryPoint?: string,
	constants?: RecordGpuPipelineConstantValue,
}
export type GpuSize32 = number;
export interface GpuMultisampleState {
	count?: GpuSize32,
	mask?: GpuSampleMask,
	alphaToCoverageEnabled?: boolean,
}
export interface GpuRenderPipelineDescriptor {
	vertex: GpuVertexState,
	primitive?: GpuPrimitiveState,
	depthStencil?: GpuDepthStencilState,
	multisample?: GpuMultisampleState,
	fragment?: GpuFragmentState,
	layout: GpuLayoutMode,
	label?: string,
}
export interface GpuTexelCopyBufferLayout {
	offset?: GpuSize64,
	bytesPerRow?: GpuSize32,
	rowsPerImage?: GpuSize32,
}
export interface GpuTexelCopyBufferInfo {
	buffer: GpuBuffer,
	offset?: GpuSize64,
	bytesPerRow?: GpuSize32,
	rowsPerImage?: GpuSize32,
}
export interface GpuComputePassTimestampWrites {
	querySet: GpuQuerySet,
	beginningOfPassWriteIndex?: GpuSize32,
	endOfPassWriteIndex?: GpuSize32,
}
export interface GpuComputePassDescriptor {
	timestampWrites?: GpuComputePassTimestampWrites,
	label?: string,
}
export interface GpuRenderPassTimestampWrites {
	querySet: GpuQuerySet,
	beginningOfPassWriteIndex?: GpuSize32,
	endOfPassWriteIndex?: GpuSize32,
}
export interface GpuRenderBundleEncoderDescriptor {
	depthReadOnly?: boolean,
	stencilReadOnly?: boolean,
	colorFormats: Array<GpuTextureFormat | undefined>,
	depthStencilFormat?: GpuTextureFormat,
	sampleCount?: GpuSize32,
	label?: string,
}
export interface GpuQuerySetDescriptor {
	type: GpuQueryType,
	count: GpuSize32,
	label?: string,
}
export type GpuSignedOffset32 = number;
export type GpuSize64Out = bigint;
export type GpuIntegerCoordinateOut = number;
export type GpuSize32Out = number;
export type GpuFlagsConstant = number;
export interface GpuColor {
	r: number,
	g: number,
	b: number,
	a: number,
}
export interface GpuRenderPassColorAttachment {
	view: GpuTextureView,
	depthSlice?: GpuIntegerCoordinate,
	resolveTarget?: GpuTextureView,
	clearValue?: GpuColor,
	loadOp: GpuLoadOp,
	storeOp: GpuStoreOp,
}
export interface GpuRenderPassDescriptor {
	colorAttachments: Array<GpuRenderPassColorAttachment | undefined>,
	depthStencilAttachment?: GpuRenderPassDepthStencilAttachment,
	occlusionQuerySet?: GpuQuerySet,
	timestampWrites?: GpuRenderPassTimestampWrites,
	maxDrawCount?: GpuSize64,
	label?: string,
}
export interface GpuOrigin3D {
	x?: GpuIntegerCoordinate,
	y?: GpuIntegerCoordinate,
	z?: GpuIntegerCoordinate,
}
export interface GpuTexelCopyTextureInfo {
	texture: GpuTexture,
	mipLevel?: GpuIntegerCoordinate,
	origin?: GpuOrigin3D,
	aspect?: GpuTextureAspect,
}
export interface GpuExtent3D {
	width: GpuIntegerCoordinate,
	height?: GpuIntegerCoordinate,
	depthOrArrayLayers?: GpuIntegerCoordinate,
}
export interface GpuTextureDescriptor {
	size: GpuExtent3D,
	mipLevelCount?: GpuIntegerCoordinate,
	sampleCount?: GpuSize32,
	dimension?: GpuTextureDimension,
	format: GpuTextureFormat,
	usage: GpuTextureUsageFlags,
	viewFormats?: Array<GpuTextureFormat>,
	label?: string,
}
export type PredefinedColorSpace = 'srgb' | 'display-p3';
export interface GpuCanvasConfiguration {
	device: GpuDevice,
	format: GpuTextureFormat,
	usage?: GpuTextureUsageFlags,
	viewFormats?: Array<GpuTextureFormat>,
	colorSpace?: PredefinedColorSpace,
	toneMapping?: GpuCanvasToneMapping,
	alphaMode?: GpuCanvasAlphaMode,
}
export interface GpuCopyExternalImageDestInfo {
	colorSpace?: PredefinedColorSpace,
	premultipliedAlpha?: boolean,
	texture: GpuTexture,
	mipLevel?: GpuIntegerCoordinate,
	origin?: GpuOrigin3D,
	aspect?: GpuTextureAspect,
}
export interface GpuCanvasConfigurationOwned {
	device: GpuDevice,
	format: GpuTextureFormat,
	usage?: GpuTextureUsageFlags,
	viewFormats?: Array<GpuTextureFormat>,
	colorSpace?: PredefinedColorSpace,
	toneMapping?: GpuCanvasToneMapping,
	alphaMode?: GpuCanvasAlphaMode,
}
export type GpuErrorKind = GpuErrorKindValidationError | GpuErrorKindOutOfMemoryError | GpuErrorKindInternalError;
export interface GpuErrorKindValidationError {
	tag: 'validation-error',
}
export interface GpuErrorKindOutOfMemoryError {
	tag: 'out-of-memory-error',
}
export interface GpuErrorKindInternalError {
	tag: 'internal-error',
}
export type RequestDeviceErrorKind = RequestDeviceErrorKindTypeError | RequestDeviceErrorKindOperationError;
export interface RequestDeviceErrorKindTypeError {
	tag: 'type-error',
}
export interface RequestDeviceErrorKindOperationError {
	tag: 'operation-error',
}
export interface RequestDeviceError {
	kind: RequestDeviceErrorKind,
	message: string,
}
export type CreatePipelineErrorKind = CreatePipelineErrorKindGpuPipelineError;
export interface CreatePipelineErrorKindGpuPipelineError {
	tag: 'gpu-pipeline-error',
	val: GpuPipelineErrorReason,
}
export interface CreatePipelineError {
	kind: CreatePipelineErrorKind,
	message: string,
}
export type CreateQuerySetErrorKind = CreateQuerySetErrorKindTypeError;
export interface CreateQuerySetErrorKindTypeError {
	tag: 'type-error',
}
export interface CreateQuerySetError {
	kind: CreateQuerySetErrorKind,
	message: string,
}
export type PopErrorScopeErrorKind = PopErrorScopeErrorKindOperationError;
export interface PopErrorScopeErrorKindOperationError {
	tag: 'operation-error',
}
export interface PopErrorScopeError {
	kind: PopErrorScopeErrorKind,
	message: string,
}
export type MapAsyncErrorKind = MapAsyncErrorKindOperationError | MapAsyncErrorKindRangeError | MapAsyncErrorKindAbortError;
export interface MapAsyncErrorKindOperationError {
	tag: 'operation-error',
}
export interface MapAsyncErrorKindRangeError {
	tag: 'range-error',
}
export interface MapAsyncErrorKindAbortError {
	tag: 'abort-error',
}
export interface MapAsyncError {
	kind: MapAsyncErrorKind,
	message: string,
}
export type GetMappedRangeErrorKind = GetMappedRangeErrorKindOperationError | GetMappedRangeErrorKindRangeError | GetMappedRangeErrorKindTypeError;
export interface GetMappedRangeErrorKindOperationError {
	tag: 'operation-error',
}
export interface GetMappedRangeErrorKindRangeError {
	tag: 'range-error',
}
export interface GetMappedRangeErrorKindTypeError {
	tag: 'type-error',
}
export interface GetMappedRangeError {
	kind: GetMappedRangeErrorKind,
	message: string,
}
export type UnmapErrorKind = UnmapErrorKindAbortError;
export interface UnmapErrorKindAbortError {
	tag: 'abort-error',
}
export interface UnmapError {
	kind: UnmapErrorKind,
	message: string,
}
export type SetBindGroupErrorKind = SetBindGroupErrorKindRangeError;
export interface SetBindGroupErrorKindRangeError {
	tag: 'range-error',
}
export interface SetBindGroupError {
	kind: SetBindGroupErrorKind,
	message: string,
}
export type WriteBufferErrorKind = WriteBufferErrorKindOperationError;
export interface WriteBufferErrorKindOperationError {
	tag: 'operation-error',
}
export interface WriteBufferError {
	kind: WriteBufferErrorKind,
	message: string,
}

export function getGpu(): Gpu {
	return new Gpu(navigator.gpu);
}
