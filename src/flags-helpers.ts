import { UnionToTuple } from "type-fest";

// get object keys as list of `keyof T`
export function objectKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

// Lists the keys of `I` exactly once each; errors otherwise.
// interface Foo { a?: boolean, b?: boolean }
// interfaceKeys<Foo>()("a", "b")      // -> ["a", "b"]
// interfaceKeys<Foo>()("a")           // -> error: missing keys -> "b"
// interfaceKeys<Foo>()("a", "a", "b") // -> error: duplicate key -> "a"
export function interfaceKeys<I>(
    keys: UnionToTuple<keyof I>,
): UnionToTuple<keyof I> {
    return keys;
}

function staticTests_interfaceKeys() {
    interface Foo {
        a?: boolean;
        b: number;
    }

    interfaceKeys<Foo>(["a", "b"]);
    // @ts-expect-error missing "b"
    interfaceKeys<Foo>(["a"]);
    // @ts-expect-error "a" listed twice
    interfaceKeys<Foo>(["a", "a", "b"]);
    // @ts-expect-error "z" is not a key of Foo
    interfaceKeys<Foo>(["a", "b", "z"]);
    // @ts-expect-error no keys listed
    interfaceKeys<Foo>([]);
}
