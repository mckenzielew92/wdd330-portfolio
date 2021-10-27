'use strict';
/*************************** FURTHER FUNCTIONS ****************************/
//In the following example, the sayHello() function 
//refers to an unspecific object called this that has a property called name:
function sayHello(){
    return `Hello, my name is ${ this.name }`;
}
//We can create some objects that have a name property, then use the call() method to invoke the sayHello() function, providing each object as an argument. 
//This will then take the value of this in the function:

const clark = { name: 'Clark'};
const bruce = {name: 'Bruce'};

sayHello.call(clark);
//<<'Hello, my name is Clark'
sayHello.call(bruce);
//,,`Hello, my name is Bruce'

//If the function that is called requires parameters, these need
//to be provided as arguments after the first argument,(which is always
//the value of -this-) Now we will give a more generalized greeting that's provided as an 
//argument.

function sayHello(greeting='Hello'){
    return `${greeting }, my name is ${ this.name}`;
}

sayHello.call(clark, 'How do you do');
//<<'How do you do, my name is Clark'
sayHello.call(bruce);
//<<'Hello, my name is Bruce'

//if the function doesn't define -this- in it's body we can still call it but we need
//to place -null- as it's first argument as the first argument is always -this- example below:
function square(x) {
    return x*x;
}
square.call(null,4)
//<<16

//The apply method is used the same way, except the arguments are provided as an array, even
//if there is only one argument.
square.apply(null, [4])
//<<16

/***************************************** CUSTOM PROPERTIES ***********************************************/

//You can add your own properties to functions in the same way you
//add properties to objects. You can add a description property like so:

square.description =  `Squares a number that is provided as an argument`
//<<Squares a number that is provided as an argument

/***************************************** MEMORIZATION ***********************************************/
//if it is taking a good minute to return a value, we can save it in the cache so that next time you call
//it, it doesn't have to compute the result again.
//We could rewrite the square function so that is saved each result in a cache
//object that is a property of a function:
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}


/************************************* Immediately Invoked Function Expressions ******************/
//also called IIFE, the function has to be ade into 
//an expression, which is done by placing the whole declaration
//inside parenthesis:
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();
//<<'Hello World'

//TEMPORARY VARIABLES - should be placed inside the IIFE will ensure if is only
//available while the IIFE is evoked. Example of a temporary variable being used
//inside an IIFE and not messing with global variables.

let a = 1;
let b = 2;
(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

a;
//<<2

b;
//<<1

console.log(temp);
//<<Error: "temp is not defined"
//This shows the variable temp does not exist after the function has been evoked.

/************************* INITALIZING CODE **************************************/
//IIFE's are used to set up initialization code that there will be no need for again. 
//code is only run once and doesn't need names of functions or variables.
//this will load a message to the console, and eliminates all temp variables used
//in putting the message together.

(function(){
    const name = 'Peter Parker';//This might be obtained from a cookie in reality
    const days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`); //confused why we don't put the work date in these last curly braces.
})();
//<<'Welcome back Peter Parker. Today is Tuesday'

/***************************** FUNCTIONS THAT DEFINE AND REWRITE THEMSELVES *********************/
//This is done by assigning an anonymous function to a variable that has the same name as the function. Like so:

function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
//The first time it will console log Wow this is amazing, all the other times it will log:Been there, got the Tshirt.
//f the function is also assigned to another variable, this variable will maintain the original function definition and 
//not be rewritten. This is because the original function is assigned to a variable, then within the function, a variable 
//with the same name as the function is assigned to a different function, using the same function above we can
//then add:
const beachParty = party; // note that the party function has not been invoked
beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly
//<<'Wow this is amazing!'
beachParty();
//<<'Wow this is amazing!'
beachParty();
//<<'Wow this is amazing!' // no matter how many times this is called it will remain the same

party.music = 'Classical Jazz'; // set a property of the function -- the properties will be lost when redefined
party();
//<<'Wow this is amazing!'
party.music;
//<<undefined
/****************************INTI-TIME BRANCHING - USING THE CODE THAT WORKS FOR THE SELECT BROSWER *********************************/
//to check is a method is supported in the browser
//we can define a function based on whether certain methods are supported. This means we only need to check for support 
//the first time the function is called:
function ride(){
    if (window.unicorn){
        ride = function(){
            //some code that uses the brand new and sparkly unicorn methods
        }
    }else{
        ride = function(){
            // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}
/*************************** RECURSIVE FUNCTIONS **********************************/
//this is a function that invokes itself until the specified conditions are met.
//a common example is computing a factorial number (a number that adds all numbers >= the number.)
function factorial(n){
    if (n === 0) {
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
//This function will return 1 if 0 is provided as an argument (0 factorial is 1), 
//otherwise it will multiply the argument by the result of invoking itself with an argument
// of one less. The function will continue to invoke itself until finally the argument is 0 and 1 
//is returned. This will result in a multiplication of 1, 2, 3 and all the numbers up to the original argument.
// To test the conjecture, we can write a function that uses recursion to keep invoking the function until it reaches a value of 1 
//(because we want our function to avoid being stuck in a recursive loop at the end!)

function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
}
//more on this here: https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/11/k01nwv1a?fromShare=true

//example:
collatz(18);
//<< 'Sequence took 21 steps. It was 18,9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1'

/******************************************************* CALL BACKS *************************************************************************/

//By using callbacks, we ensure that waiting for these tasks to complete doesn't hold up the execution of other parts of the program. 
//Once the task has been completed, the callback will be invoked before returning to the rest of the program.
//Here’s an example of a function called wait() that accepts a callback. To simulate an operation that takes some time to happen, 
//we can use the setTimeout() function to call the callback after a given number of seconds:

function wait(message, callback, seconds){
    setTimeout(callback,second * 1000);
    console.log(message);
}

function selfDestruct(){
    console.log('BOOOOOM!');
}
wait('This tape will self-destruct in five seconds ...', selfDestruct, 5);
console.log('Hmmmm, should I accept this mission or not?');

/*************************************************** PROMISES ***************************************************/
//like a callback but much simpler.
//created by using a constructor function which takes a function called an
//executor as an argument. The executor initializes the promise and starts the asynchronous
//operation. accepts 2 functions as arguments: resolve() if successful! and reject() if it fails :(
    //example
const promise - new Promise( (resolve, reject) => {
    //initialization code goes here
    if(success) {
        resolve(value);
    }
    else{
        reject(error);
    }
});