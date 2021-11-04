import {KeywordRT, Keywords} from "./types";
import parseImport from "./parser/extractors/getimports";
import Errors from "./error";
import {str} from "../utils";
const TRIM = /('([^']|\\.)*'|"([^"]|\\.)*"|\#\#\{([^`]||\.)*\}|\S)+/gm

export default function compileChunk(source: string, chunkName: string) {
    Errors.sourceCode = source
    Errors.chunkName = chunkName
    const tokens = (source.match(TRIM) || [] as string[]).filter(tok => !tok.startsWith("//"));
    for (const [char, idx, isSpace] of str(source)) {

    }
}