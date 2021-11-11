// from within the global scope
const global = this;

/*Global variables are actual properties of a global object. To create a global 
variable you do not have to use const, let or var keywords.
In a browser environment, the global object is the window object. 
This means that any global variable created is actually a property of the window object, 
as can be seen in the example below:*/

x = 6;  // global variable created
//<< 6

window.x // same variable can be accessed as a property of the window object
//<< 6

// both variables are exactly the same
window.x === x;
//<< true

//The window.confirm() method returns true or false or Boolean. Will have a pop-up asking a
//question to hit ok.

window.confirm('Do you wish to continue?');
//<< undefined

//The window.prompt() method will display in a pop-up content, and then have a 
//input box for a response. Returns string.
window.prompt('Please enter your name:');


//The window object has a navigator property that returns a reference to the Navigator object. 
//The Navigator object contains information about the browser being used. Its userAgent property 
//will return information about the browser and operating system being used. 
window.navigator.userAgent
//<< "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8"

//The window.location property is an object that contains information about the URL of the current page. 
//It contains a number of properties that provide information about different fragments of the URL.
//The href property returns the full URL as a string:

window.location.href 
//<< "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja"

window.location.protocol 
//<< "https:"

window.location.host
//<< "www.sitepoint.com"

window.location.hostname
//<< "www.sitepoint.com"

window.location.port
//<< ""

window.location.pathname
//<< "/premium/books/javascript-novice-to-ninja"

window.location.origin
//<< "https://www.sitepoint.com"

window.location.toString();
//<< "https://www.sitepoint.com/javascript/"

window.moveTo(0,0); 
// will move the window to the top-left corner of the screen

window.resizeTo(600,400);
//resize of width and height

//The availHeight and availWidth can be used to find the height and width of the screen,
// excluding any operating system menus:
window.screen.availWidth
//<< 1280

window.screen.availHeight
//<< 995

//Each window object contains a document object. 
//This object has properties and methods that deal with the page 
//that has been loaded into the window.

/************TO WRITE A COOKIE ********************/
document.cookie = 'name=Superman';
//<< "name=Superman"

