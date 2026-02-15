
# To star project

npm init -y

# To set up Bundler

npm install rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript
npm install rollup-plugin-dts rollup-plugin-peer-deps-external @rollup/plugin-terser

# To add typescript

npx tsc --init

# To Build the library

npm install rimraf

# To add needed dep

npm install @types/react
npm install @emotion/react @emotion/styled

# To run build

npm run build

# To fix dependencies issues

npm install tslib

rm -rf node_modules package-lock.json
npm cache clean --force
npm install

