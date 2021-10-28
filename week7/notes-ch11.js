'use strict';
/******************************************************************* FURTHER FUNCTIONS ********************************************************************/
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

/********************************************************************************* CUSTOM PROPERTIES ***************************************************************************************/

//You can add your own properties to functions in the same way you
//add properties to objects. You can add a description property like so:

square.description =  `Squares a number that is provided as an argument`
//<<Squares a number that is provided as an argument

/********************************************************************************* MEMORIZATION ***************************************************************************************/
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


/***************************************************************************** Immediately Invoked Function Expressions **********************************************************/
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

/***************************************************************** INITALIZING CODE ******************************************************************************/

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

/********************************************************************* FUNCTIONS THAT DEFINE AND REWRITE THEMSELVES *************************************************************/

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
/********************************************************************INTI-TIME BRANCHING - USING THE CODE THAT WORKS FOR THE SELECT BROWsER *************************************************************************/
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
/*************************************************************************************** RECURSIVE FUNCTIONS ****************************************************************************************************/

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

/************************************ CALL BACKS ****************************************************************************************************************/

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

/******************************************* PROMISES ***************************************************************************************************************/

//like a callback but much simpler.
//created by using a constructor function which takes a function called an
//executor as an argument. The executor initializes the promise and starts the asynchronous
//operation. accepts 2 functions as arguments: resolve() if successful! and reject() if it fails :(
    //example
const promise = new Promise( (resolve, reject) => {
    //initialization code goes here
    if(success) {
        resolve(value);
    }
    else{
        reject(error);
    }
});

//dice example:
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
//uses the dice.roll() method as the asynchronous operation and considers rolling a 1 as a failure, and any other number as a success:
const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});
//once the promise is fulfilled the then() method can be used to deal with 
//the outcome. accepts 2 arguments. 1st=fulfillment function tha tis called when the promise
//is resolved. any data returned from the resolve() will be passed along to this function.
//2nd argument is a rejection function. 

promise.then( result => console.log(`Yes! I rolled a ${result}`)), result => console.log(`Drat! ... I rolled a ${result}`);

//catch can be used to specify what to do if the operation fails instead.
promise.catch( result => console.log(`Drat! ... I rolled a ${result}`));

/******************************* CHAINING MULTIPLE PROMISES *******************************/

//If each function returns a promise we can chain the then methods together to 
//form a sequential piece of code. Example:

// login(userName)
// .then(user => getPlayerInfo(user.id))
// .then(info => loadGame(info))
// .catch( throw error)

/********************************** ASYNC FUNCTIONS *******************************************/
//allows you to use a asynchronous function as if they were synchronous.
//wraps return value of a function in a promise which can be assigned to a variable.
//the following is not executed until promise is resolved

async function loadGame(userName) { //async means it will run in an asynchronous fashion
    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        //load the game while using the return info
    }
    catch (error){
        throw error;
    }
}
/********************************** GENERALIZED FUNCTIONS ******************************/
function random(a,b=1) {
    //if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

random (6);
//<<4

random(10,20);
//<<13

//can be refactored like this:
function random(a,b,callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
        const result = Math.floor((b-a+1) * Math.random()) + a
    if(callback) {
        result = callback(result);
    }
    return result;
}
function square(n) {
    return n*n;
}

random(1,10,square);
//<<49

/*******************************FUNCTIONS RETURNING OTHER FUNCTIONS *******************************************/
// function returnHello() returns a helloWorld
function returnHello() {
    console.log('returnHello() called');
    return function(){
        console.log('Hello World!');
    }
}
const hello = returnHello();
hello()

//more complex--COOL!:
function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();
//<< Hello

const frenchGreeter = greeter('Bonjour');
frenchGreeter();
//<< Bonjour


const germanGreeter = greeter('Guten Tag');
germanGreeter();
//<< Guten Tag

/**************************************** SCOPE *******************************/
/*The outer() function only has access to the variable outside, 
which was declared in its scope. The inner() function, however, 
has access to the variable inside, declared in its scope, 
but also the variable outside, declared outside its scope, 
but from within the outer() function.*/
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}

/********************************************* CLOSURES **********************************/
/*A closure is formed when a function returns another function that then maintains access to any variables 
created in the original function’s scope. In the following example, two variables, a and b, are created in 
the scope of the closure() function. This then returns an anonymous arrow function that maintains access to the 
variables a and b even after the closure() function has been invoked:*/

function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}
const toFahrenheit = closure();

toFahrenheit(30);

/****************************************** COUNTER ************************/
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}
const count = counter(1);

/***************************************** GENERATORS *****************************/
//generators are special functions to produce initiators that maintain
//the state of a value.
//use an astric symbol to define a generator function.
//EX:
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}
//yield keyword = remembers the value returned until the next() method is called.
// more on this here:https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/11/k01nwv5c?fromShare=true
const sequence = fibonacci(1,1);
//generator object is now stored in the sequence variable.
//it inherits a method called next(), which is then used to obtain the next value produced by the yield command:
sequence.next();
//<< 2
sequence.next();
//<< 3
sequence.next();
//<< 5
//interate over the generator to invoke it many times
for (n of sequence){
    if (n > 10) break;
    console.log(n);
}
// << 8
// << 13
// << 21
// << 34
// << 55
// << 89

/*********************************************** PURE FUNCTION **********************************************/
function reverse(string) {
    return string.split('').reverse().join('');
}
//doesn't change the value of the argument but returns a string which is the argument
//written backwards.
const message = 'Hello JavaScript';
reverse(message);
//<< 'tpircSavaJ olleH'

message // hasn't changed
//<< 'Hello JavaScript'

//another example:
const number = 42;

function pureAdd(x,y) {
    return x + y;
}

result = pureAdd(number,10);
//<< 52

/********************************* HIGHER-ORDER FUNCTION ******************************************************/
//these are functions that use functions as arguments, or return
//another function as a result, or both. Closures are used a lot
//with higher order functions. This is done by creating a closure 
//around a function's arguments that keeps them 'alive' in a return function.
//Ex:

function multiplier(x){
    return function(y){
        return x*y;
    }
}
doubler = multiplier(2);
doubler(10);
//<<20
//the function multiplier() is the higher-order function. You can now
//make a multiplier of 3!
tripler = multiplier(3);
tripler(10);
//<<30

/************************* CURRYING ******************************************************************/
//Example
//generic code
function multiplier(x,y) {
    if (y === undefined) {
        return function(z) {
        return x * z;
        }
    } else {
        return x * y;
    }
}
//only one argument will be provided
calcTax = multiplier(0.22);
//<< function (z){
    //<<return x * z;
//<<}

//This new function can then be used to calculate the tax,
// without requiring 0.22 as an argument:

calcTax(400);
//<<88

/*********************************** GENERAL CURRY FUNCTION ***********************************/
//to take any function and allow it to be partially added.

//look for more here: https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/11/k01nwv7z?fromShare=true

function curry(func,...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
    }
}
const divider = (x,y) => x/y;
divider(10,5);
//<<2
const reciprocal = curry(divider,1);
reciprocal(2)
//<< 0.5

/*************************** QUIZ NINJA *****************************************************************************/

const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];
//CREATE A QUESTION AT RANDOM
function random(a,b=1) {
        // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}
//Now we need to create a shuffle() function. This will take an array 
//and change the position of each element. Add the following function 
//declaration underneath the random() function:
function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}
ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 0) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
    }

}


