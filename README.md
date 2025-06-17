# cjk-regex-compact

A more compact library of regular expression for matching CJK text, which makes the bundle size smaller.

## Install

```
npm install cjk-regex-compact
```

## Usage

```js
import {
  allRegExp,
  lettersRegExp,
  punctuationsRegExp,
} from "cjk-regex-compact";

allRegExp().test("a"); //=> false
allRegExp().test("。"); //=> true
allRegExp().test("中"); //=> true

lettersRegExp().test("a"); //=> false
lettersRegExp().test("。"); //=> false
lettersRegExp().test("中"); //=> true

punctuationsRegExp().test("a"); //=> false
punctuationsRegExp().test("。"); //=> true
punctuationsRegExp().test("中"); //=> false
```

## Acknowledgments

The library is derived from [`cjk-regex`](https://github.com/ikatyang-collab/cjk-regex).

## Difference to `cjk-regex`

- Regular expression only
- `u` flag is not supported
- No dependencies
- Smaller bundle size