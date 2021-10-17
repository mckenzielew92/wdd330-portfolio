//to check debugging
//we will find that the alert is not showing the correct message. Why?
//because we set age as a variable to 12. It should be if the age is 12, we do that
//like so if(age === 12) with 3 =.
function amIOldEnough(age){
    if (age = 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
amIOldEnough(21)

//can be updated to the following:
function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
amIOldEnough(21)

function amIOldEnough(age){
    console.log(age);
        if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
        } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
        } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}

//use keyword: debugger TAKE OUT THE COMMENTS IN FRONT OF DEBUGGER
function amIOldEnough(age){
   // debugger;
        if (age < 12) {
       // debugger;
        return 'No, sorry.';
        } else if (age < 18) {
       // debugger;
        return 'Only if you are accompanied by an adult.';
        } else {
       // debugger;
        return 'Yep, come on in!';
    }
}

amIOldEnough(16);