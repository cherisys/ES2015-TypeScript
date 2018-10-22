function greetPerson(name:string){
    // Any var declarations are hoisted here.
    // var greet automatically comes here as the top statement of the function.
    if(name==="Arshad")
    {
        greet = "Hello Arshad";
    }
    else
    {
        greet = "Hi there";
    }
    console.log(greet);
    var greet;
}
greetPerson("Arshad1");