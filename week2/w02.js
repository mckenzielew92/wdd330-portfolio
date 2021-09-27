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




//activity for week 2 notes ch.2
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




//activity for week 2 notes ch.3
function ninjaQuizCh3(){
//Create an array called quiz that contains all the questions and answers. Each element in quiz will be 
//a nested array that contains the question as its first element and the answer as its second element.
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?" , "Diana Prince"],
    ["What is Batman's real name?" , "Bruce Wayne"]
];

let score = 0;//initializer score
/*Then we'll loop through the array using a for-of loop, assigning the variables question and answer to each key and value in the map.
The loop starts by asking the question using a prompt dialog that allows the player to enter an answer that is stored in a variable called 
response. We can then compare this to the actual answer stored as answer : */

for(const [question,answer] of quiz) {
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else{
        alert(`Wrong! The correct answer was ${answer}`);
    }
}
// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's!' : ''}`);
}

//activity for week 2 notes ch. 4
ninjaQuizCh4()