const task3Element = document.getElementById('task-3');

function helloWorld() {
    alert("Hello World !");
}

function greetUser(user) {
    alert(`Hello ${user} !`);
}

function concatStrings(str1, str2, str3) {
    return `${str1} ${str2} ${str3}`;
}

helloWorld();
greetUser("Jacques");

task3Element.addEventListener("click", helloWorld);

alert(concatStrings("Bonjour !", "Je suis un Ogre.", "J'ai 19 ans."));