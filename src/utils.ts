export function* str(strs: string) {
for (let i = 0; i < strs.length; i++) {
    const isSpace = strs[i].trim().length == 0
    yield [strs[i], i, isSpace]
}
}


