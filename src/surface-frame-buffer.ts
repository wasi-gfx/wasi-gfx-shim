import * as wit from "../types/interfaces/wasi-gfx-surface-surface-frame-buffer";
import { Strict, Todo } from "./common";
export * from "./surface";
export * from "./frame-buffer";

export class Context implements Strict<wit.Context> {
    getCurrentBuffer(): wit.Buffer {
        throw new Todo();
    }
    present(): void {
        throw new Todo();
    }
}

export default {
    Context,
} satisfies typeof import("../types/interfaces/wasi-gfx-surface-surface-frame-buffer");
