  //WEEK 4 CH. 8 FORMS
 // const form = document.forms[0];
  //or const form = document.forms.['search'];

  //to access certain elements of a form
 // const [input,button] = form.elements;
  //we can also access the form controls by using their name attribute like so:
 // const input = form.elements.searchInput;
  //input.addEventListener('focus', () => alert('focused'), false);
  

const form = document.forms['search'];

const input = form.elements['searchInput'];
//const input = form['searchInput'];
//these will add certain actions to the form lines 14-18
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);
//set the value of an element
input.value = 'Search Here';
//This will notify the sender that the form is submitted: lines 20-25

 form.addEventListener ('submit', search, false);

function search() {
    alert(' Form Submitted');
}

//This will stop the form from submitting to the url
function search(event) {
  alert('Form Submitted');
   event.preventDefault();
}

//This will report back what the user searched for.
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

//This will delete the 'search here' once clicked on the input
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
//Now the default text will disappear when the user clicks inside the input field (the focus event) and reappear if the user leaves the field blank and clicks away from it (the blur event).


/**************************Object Oriented Programming Notes*********************************/

/**Encapsulation:**/

//not object oriented
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overTime * rate);
}

// object oriented way:

//employee object with 3 properties, method called getWage()
let employee = {
    /*there are no parameters in this way because these properties are
    actually properties of the object. The best functions are the ones with no parameters!
    The easier to maintain the function*/
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

/**Polymorphism**/

/*WITHOUT OBJECT ORIENTED PROGRAMMING:
switch(...) {
    case 'select': rederSelect();
    case : 'text': renderTextBox();
    case 'checkbox' : renderCheckbox();
    case ...;
    case ...;
    case ...
}  */ 

//object oriented way:

elements.render();
