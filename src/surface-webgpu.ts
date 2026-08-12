import * as wit from "../types/interfaces/wasi-gfx-surface-surface-webgpu";
import { Strict, Todo, Unimplemented } from "./common";
import { Surface } from "./surface";
import {
    inner,
    GpuDevice,
    convertTextureFormatWasiToWeb,
    convertTextureUsageWasiToWeb,
    GpuTexture,
} from "./webgpu";
export * from "./surface";
export * from "./webgpu";

export class Context implements Strict<wit.Context> {
    #context: GPUCanvasContext;
    constructor(surface: Surface) {
        const context = surface.canvas.getContext("webgpu");
        if (!context) throw new Unimplemented();
        this.#context = context;
    }
    configure(configuration: wit.ContextConfiguration): void {
        let usage: GPUTextureUsageFlags | undefined;
        if (configuration.usage) {
            usage = convertTextureUsageWasiToWeb(configuration.usage);
        }
        let viewFormats: GPUTextureFormat[] | undefined;
        if (configuration.viewFormats) {
            viewFormats = Array.from(configuration.viewFormats).map(
                convertTextureFormatWasiToWeb,
            );
        }
        let colorSpace: PredefinedColorSpace | undefined;
        if (configuration.colorSpace) {
            throw new Todo();
        }
        let toneMapping: GPUCanvasToneMapping | undefined;
        if (configuration.toneMapping) {
            throw new Todo();
        }
        let alphaMode: GPUCanvasAlphaMode | undefined;
        if (configuration.alphaMode) {
            throw new Todo();
        }
        this.#context.configure({
            ...configuration,
            device: (configuration.device as GpuDevice)[inner],
            format: convertTextureFormatWasiToWeb(configuration.format),
            usage,
            viewFormats,
            colorSpace,
            toneMapping,
            alphaMode,
        });
    }
    unconfigure() {
        this.#context.unconfigure();
    }
    getCurrentTexture(): wit.GpuTexture {
        return new GpuTexture(this.#context.getCurrentTexture());
    }
    present() {
        // No op on web
    }
}

export default {
    Context,
} satisfies typeof import("../types/interfaces/wasi-gfx-surface-surface-webgpu");
