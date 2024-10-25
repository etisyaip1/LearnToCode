//when we call variables we do so with first letter lower case and the second uppercase 
let globalVar = "This is a global variable";
function displayGlobalVar(){
    console.log(globalVar);
}
//whatever is in th ecurly brackets is what will compute, it is what it will be called 
//global is when we call it outside of the function, being able to call your varibale from anywhere
//local is when you call it inside the function and can only be called inside the function

function localScopeExample(){
let localVar = "This is a local variable";
console.log(localVar);
}