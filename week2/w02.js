function addnumbers(){
    //collects
    let x = parseFloat(document.getElementById("numimput1").value);
    let output = 0;

    for(let i = 0; i <= x; i++){
        output += i;
    }

    //take let output and places it to the div output.
    document.getElementById("output1").innerHTML = output;
}

function sum({

})