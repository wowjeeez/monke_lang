import compileChunk from "./compiler/entry";

compileChunk(`
bite namespace2##{test_method, hoe};
braincell myStr = "hello cunt"    
//comment
nest myNameSpace {
    //can declare public/private functions, variables etc
    share braincell myPublicVar = 10;
    mine! braincell myPrivateVar = 25;
    share coconut pubFn$arg$ {
        std##bark(unga##myPrivateVar); //25
    }
}
`, "test.monk")