//exports object data
export class Data {
    constructor(){}
    // k = key v = value
    // Save the value passed in to the local storage as a string.
    set(k, v){
        localStorage.setItem(k, JSON.stringify(v));
    }

    // Gets the object from the local storage and parses the string into an object.
    get(k){
        return JSON.parse(localStorage.getItem(k))
    }
}