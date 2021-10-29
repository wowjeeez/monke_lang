import {Locator, Tokens} from "./types";

export default abstract class ASTNode {
    constructor(private readonly type: keyof Tokens) {}
}


