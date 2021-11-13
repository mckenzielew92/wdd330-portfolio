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

/*The document.cookie property acts like a special type of string. 
Assigning another cookie to it won’t overwrite the entire property, 
it will just append it to the end of the string. So we can add more cookies by assigning them to document.cookie:*/

document.cookie = 'hero=true';
//<< "hero=true"

document.cookie = 'city=Metropolis';
//<< "city=Metropolis"

//A cookie’s value can be changed by reassigning it to document.cookie using the same name but a different value.

//Cookies by default expire after the browser session is finished,
//to make it last beyond that, you can set the mas-age value.

document.cookie = 'name=Batman; max-age=86400' // 86400 secs = 1 day

//Do not rely on this if there is senstive information. It should never be saved like this.

/*********************************THE PATH AND DOMAIN OF COOKIES*************************************/
//By default, cookies can only be read by pages inside the same directory and domain as the file was set. 
//This is for security reasons so that access to the cookie is limited.
//The path can be changed so that any page in the root can read the cookie. You need to add
//a string ; path=/ to the end of the cookie when it is set.
document.cookie = 'name=Batman; path=/'
//It’s also possible to set the domain by adding "; domain=domainName" to the end of the cookie:
document.cookie = 'name=Batman; domain=sitepoint.com';
//adding ; secure will make sure it is only transmitted over a secure HTTPS network:
document.cookie = 'name=Batman; secure';
//to delete a cookie, set the expire to be a time of the past.
document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';
//If a cookie is a session cookie, it will expire when the tab or window is closed.
//dealing with cookies can be quite cumbersome and usually are created in
//their own library like cookies.js or jsCookie.
/****************************************TIMEOUT*****************************************************************/
//this will show an alert log after 3 seconds.
window.setTimeout( () => alert("Time's Up!"), 3000);
//<<4
//the integer returned is an ID used to reference that particular timeout.
//you can create another and it will return a new timeout reference id:
window.setTimeout( () => alert("Time's Up!"), 3000);
//<< 5
//Now we can clear it like so:
window.clearTimeout(5);
//<< undefined
/****************************************************** setInterval() **************************************************/
//this will repeatedly invoke the callback function after every given number of milliseconds.
//ex:
function chant(){ console.log('Beetlejuice'); }
//now we can set up interval:
function chant(){ console.log('Beetlejuice'); }
//now clear
window.clearInterval(summon);
//stay away from using they keyword this in these functions.

/*************** Head over to the animation folder to view different ways of animating a rotation on a square. ******************/
/*Quiz Ninja Project
We’re now going add a timer to give our quiz a “beat the clock' element. 
We’ll do this using the window object’s setInterval() method to add a time limit. 
First of all, we’ll add an element to the HTML for the timer.
Update the <header> inside the index.html file to include an extra <div> element with an id of 'timer':*/




