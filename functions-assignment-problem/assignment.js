const sayHello = (name) => {
    console.log("Hi " + name);
};

const sayHello2Args = (greet = "Hi", name = "Edward") => {
    console.log(`${greet} ${name} !`);
};

const sayHelloNoArgs = () => {
    console.log("Hello Anonymous !");
};

const sayHelloStringReturn = (name) => {
    return "Hi " + name;
};

const checkInput = (callBack, ...args) => {
    let hasEmptyStrings = false;
    for (const arg of args) {
        if (!arg) {
            hasEmptyStrings = true;
            break;
        }
    }

    if (!hasEmptyStrings && args.length > 0) callBack("All are not empty !");
    // console.log(args);
};

sayHello("Max !");
sayHello2Args("Bastard", "Louis");
sayHelloNoArgs();
sayHello2Args();
checkInput(sayHello);
checkInput(sayHello, "Hi ", "toto", "and Markus !");
// console.log(sayHelloStringReturn("Max !"));
