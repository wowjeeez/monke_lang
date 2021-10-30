import {Tokens, UNK_AT_PARSE} from "../../types";
import Errors from "../../error";

const RE_MULTIPLE = /\{.+\}/gm
const RE_VALID = /^[^\s\{\}\#]+$/gm
export default function parseImport(source: string): Tokens["NAMESPACE_IMPORT"] {
    const ns: Tokens["NAMESPACE"] = {
        ownerChunk: UNK_AT_PARSE,
        privateProps: UNK_AT_PARSE,
        publicProps: UNK_AT_PARSE
    }
let imports;
if (source.includes("##") && RE_MULTIPLE.test(source)) {
    imports = source.match(RE_MULTIPLE)![0].replace("{", "").replace("}", "").split(",").map(val => val.trim())
} else if (RE_VALID.test(source)) {
    imports = "*"
} else {
    Errors.throwParseError(`Invalid token, expected namespace reference, received: ${source}`, source)
}
return {
    imports: ns,
    exposes: imports == "*" ? UNK_AT_PARSE : (<string[]>imports).map((imp) => ({
        mutable: UNK_AT_PARSE,
        parent: ns,
        private: UNK_AT_PARSE,
        type: UNK_AT_PARSE,
        name: imp
    }))
}
}