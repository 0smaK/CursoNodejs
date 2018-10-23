console.log("Hola 1", process.pid);

function say(word){
    console.log(word);
}

function execute(someFunction, value){
    someFunction(value)
}

execute(say,"hola 2");
execute(function(word){console.log(word)}, "Hola 3");
execute(word => console.log(word),"Hola 4");
