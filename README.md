# wasi-gfx-shim implements the wasi-gfx on top of the browser's WebGPU API.

## Update the wit
```shell
npm run wit-fetch
```

## Generate the wit bindings
```shell
npm run generate-types
```

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
python -m http.server
```

### View the example
Point your browser to `http://localhost:[PORT]/example/?example=[example]`
