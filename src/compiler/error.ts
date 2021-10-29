export default class Errors {
    public static sourceCode: string
    public static chunkName: string
    private static getLineNumber(text: string) {
        const lines = Errors.sourceCode.split("\n")
        let ret = -1
        lines.forEach((line, idx) => {
            if (line.includes(text)) {
                ret = idx
            }
        })
        return ret
    }
    private static createEmptyStringWithMarkerAt(length: number, marker: string, at: number) {
        let final = ""
        for (let i = 0; i < length; i++) {
            if (at === i) {
                final += marker
            } else {
                final += " "
            }
        }
        return final
    }
    public static throwParseError(msg: string, at: string) {
        const ln = Errors.getLineNumber(at)
        const line = Errors.sourceCode.split("\n")[ln]
        const idx = line.indexOf(at)
        const refStr = Errors.createEmptyStringWithMarkerAt(line.length, "^", idx)
        console.error(`Parse error in ${Errors.chunkName} at ln ${ln}:${idx}: ${msg}`)
        console.error(line)
        console.error(refStr)
        process.exit()
    }
}
