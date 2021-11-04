
export interface Tokens {
    NAMESPACE_IMPORT: {
        imports: Tokens["NAMESPACE"]
        exposes: Tokens["VALUE"][] | UnknownAtParse
    }
    NAMESPACE: {
        ownerChunk: string,
        publicProps: Tokens["VALUE"][] | UnknownAtParse
        privateProps: Tokens["VALUE"][] | UnknownAtParse
    }
    VALUE: {
        private: boolean | UnknownAtParse,
        mutable: boolean | UnknownAtParse
        type: Types | UnknownAtParse,
        parent: Tokens["NAMESPACE"],
        name: string
    }
    VALUE_REF: {
        pointsTo: Tokens["VALUE"]
        isRef: boolean
    }
}

export const UNK_AT_PARSE: UnknownAtParse = "unknown-at-parsing"
export type UnknownAtParse = "unknown-at-parsing"
export type Types = "speak" | "count" | "yes?" | "what??" | "chunk" | "checklist" | UnknownAtParse

export interface Locator {
    line: number
    start: number
    end: number
}


export type Keywords = "bite" | "braincell" | "uff" | "wuff" | "uff-wuff" | "map" | "fluid_braincell" | "coconut" | "please" | "smh" | "channel" | "nest"

export const KeywordRT = ["bite" , "braincell" , "uff" , "wuff" , "uff-wuff" , "map" , "fluid_braincell" , "coconut" , "please" , "smh" , "channel", "nest"]

export interface Keyword {
    treePos: number
    type: Keywords
}