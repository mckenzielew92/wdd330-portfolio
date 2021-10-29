//Basic example of fetch api
fetch('https://example.com/data')
.then(/*code that handles the response*/)
.catch(/*code that runs if the server returns an error)*/)

//???????????? is .then a promise?

//As you can see above the fetch method return a promise that
//resolves to the response returned, because it is a promise, we an use a catch
//statement at the end to deal with any errors

//We can use an if block to check if successful, and throw an
//error otherwise:
const url = 'https:example.com/data'

fetch(url)
.then((response) =>{
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => /*do something with response*/)
.catch( error => console.log('There was an error!'))

//The error thrown refers to the statusText property of the response object
//It specifies the status message that corresponds to the code returned.
//ex: it might be 'Forbidden' for status code of 403. Some include: headers, url, redirect, type etc.

/************************************** REDIRECTS() ******************************************************************/
//redirect() method can be used to redirect to another URL. It creates
//a new promise that resolves to the response from the redirected URL.
//Example of how a redirect response promise would be resolved:
fetch(url)
.then( response => response.redirected(newURL)) //redirects to another URL
.then( /*do something else*/)
.catch( error => console.log('There was an error: ', error))

/***************************** TEXT RESPONSES ********************************************************************************/

//The text() method takes a stream of text from the response,  and converts it to a promise
//that resolves to a USVSting object that can be treated as a string in JavaScript.
//EX:
fetch(url)
.then( response => response.text() ) //transforms text stream into a JavaScript string
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))
//once the promise is resolved, we use the string() method to return a promise
//that resolves with a string representation of the text that was returned.

/********************************* FILE RESPONSES ******************************************/

//the blob() method is used to read a file of raw data, then returns a promise that
//resolves with a blob object.
//EX:

fetch(url)
.then( response => response.blob() ) //transforms data into ta blob object
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))

/************************************************ JSON *****************************************************/
//Json is the most common format for AJAX responses. It transforms a stream of JSON
//data into a promise that resolves to a JavaScript object
//EX:
fetch(url)
.then( response => response.json() )//transforms data to javascript object
.then( data => console.log(Object.defineProperties(data)) )
.catch( error => console.log('There was an error: ', error))

//now we can maniputlate the object using javascript, below we use the Object.entries()
//method to view the key and value paris in the return object.

/**************************************************CREATING RESPONSE OBJECTS ************************************/
//you can also create a response object using a constructor function:
const response = new Response('Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

//a constructor function is used to create a new Request object:
const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});
//URL is the first property and required, the second argument is made
//up of any of the properties listed above.
//once the request object is assigned to a variable, it can then be used as a 
//parameter of the fetch() method.
fetch(request)
.then( /*do something with response*/)
.catch(//handle error)
//alternatively you can enter the URL and object directly as arguments of the fetch()
//method without having to create a Request object:
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then(/*do something with response*/ )
.catch( /*handle any errors*/)

/***************************************** HEADERS INTERFACE ***************************************/

