# rollup-plugin-steal-remove

![](https://img.shields.io/github/workflow/status/pYr0x/rollup-plugin-steal-remove/CI?style=flat-square)
![](https://img.shields.io/npm/v/rollup-plugin-steal-remove?style=flat-square)
![](https://img.shields.io/node/v/rollup-plugin-steal-remove?style=flat-square)
![](https://img.shields.io/npm/dependency-version/rollup-plugin-steal-remove/peer/vitejs?style=flat-square)

🍣 A Rollup plugin which removes [development code](https://stealjs.com/docs/steal-tools.transform.options.html) from canJS sourcecode that is indicated by steal's `steal-remove-start / end`

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

```bash
npm i rollup-plugin-steal-remove --save-dev
```
or
```bash
yarn add -D rollup-plugin-steal-remove
```
or
```bash
pnpm add -D rollup-plugin-steal-remove
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import removeDevelopmentCode from 'rollup-plugin-steal-remove';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    removeDevelopmentCode()
  ]
};
