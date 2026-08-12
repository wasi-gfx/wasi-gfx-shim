// Rewrites methods as function properties so params are checked strictly (no bivariance)
//
// Plain `implements I` allows this, while implements Strictify<I> would error
// `interface I { foo(n: number | undefined): void }`
// `class C implements I { foo(n: number) {} }`
export type Strict<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => infer R
        ? (...args: A) => R
        : T[K];
};

export class Todo extends Error {
    constructor() {
        super("TODO: not yet implemented");
    }
}

export class Unimplemented extends Error {
    constructor() {
        super("Unimplemented.");
    }
}

export class Unreachable extends Error {
    constructor() {
        super("Unreachable code reached.");
    }
}

export class NotAllowed extends Error {
    constructor() {
        super("Operation not allowed.");
    }
}
