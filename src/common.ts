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
