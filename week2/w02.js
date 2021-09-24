function addNumbers(){
    //collects numbers from input id numInput1
    let x = parseInt(document.getElementById("numInput1").value);
    //defines output value
    let output = 0;
    //creates loop for i to = to numInput1 value
    if(isNaN(x)){
        alert("Invalid input Please use a number");
    } else{
        for(let i = 0; i <= x; i++){
            //adds i current value you output
            output += i;
        }
    }
    

    //take let output and places it to the div output.
    document.getElementById("output1").innerHTML = output;
}

function addNumberTwo(){
    //collects number from id numInput1
    let x = parseInt(document.getElementById("numInput1").value);
    //collects nub
    let y = parseInt(document.getElementById("numInput2").value);
    //adds x and y together for output
    let output = x + y

    //take let output and places it to the div output.
    document.getElementById("output2").innerHTML = output;
}
