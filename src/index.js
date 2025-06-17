import { writeFile, mkdir } from "node:fs/promises";
import * as cjk from "cjk-regex";

const fileContent = `
const allStr = "${cjk.all().toString()}";
const letterStr = "${cjk.letters().toString()}";
const punctuationStr = "${cjk.punctuations().toString()}";

export const allRegExp = (flags) => new RegExp(allStr, flags);
export const lettersRegExp = (flags) => new RegExp(letterStr, flags);
export const punctuationsRegExp = (flags) => new RegExp(punctuationStr, flags);
`;

mkdir("lib", { recursive: true });
writeFile("lib/index.js", fileContent);
