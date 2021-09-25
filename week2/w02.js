function addNumbers(){
     //collects numbers from input id input1
    let x = parseInt(document.getElementById("input1").value);
    //defines output value
    let output = 0;
    //creates loop for i to = to input1 value
    if (isNaN(x)) {
        alert("Invalid input Please use a number");
    } else {
        for (let i = 0; i <= x; i++) {
            //adds i current value you output
            output += i;
        }
    }
    
    //take let output and places it to the div output.
    document.getElementById("output1").innerHTML = output;
}



function addNumbers2(){
    //collects number from id input1
    let x = parseInt(document.getElementById("input1").value);
    //collects number from id input2
    let y = parseInt(document.getElementById("input2").value);
    //adds x and y together for output
    let output = x + y
    //take let output and places it to the div output.
    document.getElementById("output2").innerHTML = output;
}


function ninjaQuiz(){
//js for Notes ch.2
//This declares a variable called question and assigns the string 
//'What is Superman's real name?' to it.
const question = "What is Superman's real name?"
//Next, we need to ask the question stored in the question variable, using a prompt dialog:
//A prompt dialog allows the player to type in a response, which is then stored 
//in the variable it is assigned to, which is answer in this case.
const answer = prompt(question);
//Finally, we use an alert dialog to display the player's answer using string interpolation to 
//insert the value of answer into the template literal that is displayed in an alert box:
alert(`You answered ${answer}`);
}
