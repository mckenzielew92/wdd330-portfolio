'use strict';
//create array
const toDo = ["A", "B", "C"];
//let todo = document.getElementById('add').value
//toDo.push('todo')
//take input and add to array
function pushTodo(){
    //get value from input
    let todo = document.getElementById('addLi').value
    //append data to the array
    toDo.push('addLi')
    let task = ""

    for (i = 0; i < toDo.length; i++){
        task = task + toDo[i];
    }
    //display array data
    document.getElementById('todo').innerHTML = task;
}

//var div = document.createElement('div');  //creating element
//div.textContent = "Hello, World";         //adding text on the element
//document.body.appendChild(div); 

//let li = document.createElement('li')
//li.textContent = todo
//document.body.appendChild(ul);

let removeIcon = `&minus;`
