# wasi-gfx-ship implements the wasi-gfx on top of the browser's WebGPU API.

## Compile the TypeScript
```shell
npm run build
```

## Examples

### Available examples:
- triangle

### Compile an example:
```shell
npm run example --example=[example]
```

## Serve the example
Then serve the `examples` directory with an http server.
E.g. the python http server:
```shell
cd examples
python -m http.server
```

### View the example
Point your browser to `http://localhost:[PORT]/?example=[example]`