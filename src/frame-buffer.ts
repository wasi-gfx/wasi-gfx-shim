import { Todo } from "./common";
import * as wit from "../types/interfaces/wasi-gfx-frame-buffer-frame-buffer";

export class Buffer implements wit.Buffer {
    getWithCopy(): Uint8Array {
        throw new Todo();
    }
    setWithCopy(val: Uint8Array): void {
        throw new Todo();
    }
}

export default {
    Buffer,
} satisfies typeof import("../types/interfaces/wasi-gfx-frame-buffer-frame-buffer");
