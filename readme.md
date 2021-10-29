# Monke language specification
## Basic syntax
##### Functions
Functions are declared with the `coconut` keyword, followed by the name, arguments, and the body.
```
coconut myFunc$arg1, arg2, arg3$ {
    std##bark("Hello");
}
```
###### Returning values
You can return values with the `yell` keyword. Returning a value will immediately exit the function.
###### Calling functions
You can call functions with the `fnName(args...)` notation

##### Variables
Variables are declared with the `braincell` and `fluid_braincell` keyword, followed by the name then the initializer.
```
// Mutable variable
fluid_braincell myVar = 10;
// Immutable variable (needs initializer)
braincell myVar = 10; 
// multiple variables are supported too
braincell {
    myVal1 = 10;
    myVal4 = 15;
}
//both variables are available in scope as immutable.
```

##### Closures (anonymous functions)
text here
```
braincell myClosure = $arg1, arg2$ ¤ {
    std##bark("Hello from closure");
}
```

#### Basic data types
`speak`: String type <br>
`count`: Integer type <br>
`yes?`: Boolean type <br>
`what??`: Null type <br>
`chunk`: Objects/structures <br>
`checklist`: Array type <br>

#### Creating objects/arrays
While monke_lang supports certain OOP patterns, it's not an Object-Oriented langauge.
```
braincell myChunk = {}; //or chunk##new_empty()
braincell myList = []; //or checklist##new_empty()
myList::push(10);
std##bark(myList::as_speak());
myChunk::my_prop = "im a speak";
std##bark(myChunk::my_prop);
```

#### Namespaces
Namespaces are declared by the `nest` keyword. Accessing properties inside a namespace is done by referecing the `unga` namespace, accessing public properties outside of a namespace is done by the `##` operator (`namespace##property`).
```
nest myNameSpace {
    //can declare public/private functions, variables etc
    share braincell myPublicVar = 10;
    mine! braincell myPrivateVar = 25;
    share coconut pubFn$arg$ {
        std##bark(unga##myPrivateVar); //25
    }
}
braincell val = myNameSpace##myPrivateVar; //will throw an error, since its a private field
```
##### Importing namescapes
Namespaces can be imported using the `bite` keyword.
```
bite std; //will import the whole std namespace
bite std##{bark} //will import std##bark only
```

#### Control flow
If/else statements
```
uff $val eq val2$ {
    std##bark("The 2 values are equal");
} wuff {
    std##bark("They are not equal");
}
```
Else if
```
uff $val not-eq val2$ {
    std##bark("They are not equal");
} uff-wuff $val bigR val2$ {
    std##bark("Value 1 is bigger than value 2");
} wuff {
    std##bark("Neither")
}
```
Pattern matching
Matches must to be exhaustive.
```
braincell value = 10;
map value {
    10 -> {std##bark("It's 10!")};
    20 -> {std##bark("It's 20!")};
    () -> {std##bark("It's neither!")}
}
//simplified
braincell result = map value {
    10 -> "It's 10!";
    20 -> "It's 20!";
    () -> "It's neither!"
}
std##bark(result);
```
#### Passing by value or reference
In monke_lang you can pass variables either by value or by reference.
```
braincell value = 10;
cocount myFn$val$ {
    std##bark("Value: ", val)
}
myFn(value) //by value
myFn(@value) //by reference
```
##### Mutating references
```
braincell value = 25;
fluid_braincell mut_value = 25;
cocount myFn$val$ {
    val = 10;
    yell val;
}
braincell result = myFn(@value); //will throw an exception because the variable is immutable
braincell result_working_1 = myFn(@mut_value); //will not throw an error, and change `mut_value` to 10
braincell result_working_2 = myFn(mut_value); //will not throw an error, and will return 10, but won't mutate `mut_value`
braincell result_working_3 = myFn(value); //will not throw an error, and will return 10
```

#### Throwing errors
Errors are thrown by the `ohoh!` function.
```
ohoh!("Something broke!") //will exit the process if not caught
```
#### Catching errors
Blocks annotated with the `please` and `smh` keyword will catch exceptions thrown inside.
```
please {
    //risky code
    ohoh!("Something broke!");
}
smh(err) {
    std##bark("Oh no something broke!", err.message, err.stack);
}
```
#### String interpolation
Every string is interpolable with `#{}`
```
braincell age = 25;
braincell output = "I am #{age} years old!";
std##bark(output);
``` 
#### Pipes
Pipes are annotated with the `channel` keyword. `*` always refers to the current value, `^` refers to the original value passed.
```
braincell value = 10;
braincell result = channel value {
|* multip 10|
|* eq 20|
}
std##bark(result); //will print "true"
//--------------
braincell value = 10;
braincell result = channel @value { //will throw an exception because an immutable reference is used
|* multip 10|
|* eq 20|
}
```
### Operators
Every operator is available as a regular function too. (`eq(20, 10)` is the exact same as `20 eq 10`)
`eq`: Checks if 2 values are equal (`20 eq 10` => `false`)
`not-eq`: Checks if 2 values are not equal (`20 not-eq 10` => `true`)
`bigR`: Checks if value 1 is bigger than value 2 (`20 bigR 10` => `false`)
`smolR`: Checks if value 1 is smaller than value 2 (`20 bigR 10` => `false`)
`bigr`: Checks if value 1 is bigger than or equal to value 2 (`10 bigr 10` => `true`)
`smolr`: Checks if value 1 is smaller than or equal to value 2 (`10 smolr 10` => `true`)
`multip`: Multiples a value by the other (`20 multip 10` => `200`)
`div`: Divides 2 numbers (`20 div 10` => `2`)
`rem`: Gets the remainder of 2 numbers (`14 rem 3` => `2`)
`add`: Adds 2 numbers togehter (`2 add 3` => `5`)
`sub`: Subtracts 2 numbers (`2 sub 3` => `-1`)
`pow`: Gets the power of 2 numbers (`4 pow 3` => `64`)
`sqrt`: Gets the square root of a number (`sqrt 4` => `2`)
`rt`: Gets the value1-th root of value2 (`4 rt 16` => `2`)
`and`: AND operator
`or`: OR operator

### Ternary operators
```
braincell val = 10;
braincell result = (val eq 10) -|- "It's 10" | "It's not 10";
std##bark(result); //will print "It's 10"
```



## Standard library
yet to write lol
-TOML
-JSON
-XML
-MSGPACK COMPAT
-TCP
-WORKER THREADS
-PROCESS/HOST info
-I/O
`std##get_type()`