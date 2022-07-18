#!/usr/bin/env sh

set -e
node ./build/index.js
rm -rf dist/* &&
pnpm tsc &&
# pnpm build:vite &&

pnpm rollup -c &&
mv dist/es/*.d.ts dist








































