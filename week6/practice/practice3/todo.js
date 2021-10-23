
//create array
const toDo = [];

//take input and add to array
function pushTodo(){
    //get value from input
    let newToDo = document.getElementById('add').value
    //append data to the array
    toDo.push('newToDo')
    let task = ""
    let i=0;
    //create ol of todo's
    let undoneList = document.createElement('ol')
    undoneList;

    for (i = 0; i < toDo.length; i++){
        //create li for each item in array
        
        let undoneListItem = document.createElement('li')
        //undoneListItem.textContent = (toDo[i])
        let listText = document.createTextNode(toDo[i].content)  

        //const text = document.createTextNode(links[i].label);

       // let listText = document.createTextNode(toDo[i]) //why is this not read on line 28?

        undoneList.appendChild(undoneListItem)
        undoneListItem.setAttribute("className", 'todo')
        undoneListItem.appendChild(listText)
        parent.appendChild(undoneList);
        task = listText;
    }

    document.getElementByClass('todo').innerHTML = task
}

/* for(let i = 0; i < links.length; i++){
    const newList = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(links[i].label);

    link.setAttribute("href", links[i].url);
    link.appendChild(text);
    newList.appendChild(link);
    parent.appendChild(newList);
}*/


document.getElementById("myBtn").addEventListener("click", moveToCompleted);

//add list item to completed ol
//function moveToCompleted(){

//}

//var div = document.createElement('div');  //creating element
//div.textContent = "Hello, World";         //adding text on the element
//document.body.appendChild(div); 

//let li = document.createElement('li')
//li.textContent = todo
//document.body.appendChild(ul);

//let removeIcon = `&minus;`
