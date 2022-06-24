#!/usr/bin/env sh

set -e

rm -rf dist/* &&
pnpm tsc &&
# pnpm build:vite &&

pnpm rollup -c &&
mv dist/es/*.d.ts dist
# mv dist/cjs/index.default.js dist/cjs/index.js && 
# mv dist/umd/index.default.js dist/umd/index.js && 