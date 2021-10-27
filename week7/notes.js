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
//We could rewrite the square function so that is saved each result in a c
ache
//object that is a property of a function:
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}
