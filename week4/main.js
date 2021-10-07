  //WEEK 4 CH. 8 FORMS
 // const form = document.forms[0];
  //or const form = document.forms.['search'];

  //to access certain elements of a form
 // const [input,button] = form.elements;
  //we can also access the form controls by using their name attribute like so:
 // const input = form.elements.searchInput;
  //input.addEventListener('focus', () => alert('focused'), false);
  

const form = document.forms['search'];

const input = form.elements['searchInput']
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




