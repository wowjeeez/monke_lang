import {KeywordRT, Keywords} from "./types";
import parseImport from "./parser/extractors/getimports";
import Errors from "./error";
const TRIM = /('([^']|\\.)*'|"([^"]|\\.)*"|\#\#\{([^`]||\.)*\}|\S)+/gm
export default function compileChunk(source: string, chunkName: string) {
    Errors.sourceCode = source
    Errors.chunkName = chunkName
    const tokens = (source.match(TRIM) || [] as string[]).filter(tok => !tok.startsWith("//"));

    tokens.forEach((tok, pos) => {
        if (KeywordRT.includes(tok)) {
            console.log("Valid keyword", tok)
            switch (<Keywords>tok) {
                case "bite":
                    const imports = parseImport(tokens[pos + 1])

            }
        }
    })
}