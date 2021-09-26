
/** 1. select ol element
 *  2. Create an array of links
 *  3. Create li element and add an a tag with the label and url
  */
const links = [
    {
      label: "Week 1",
      url: "week1/w01-index.html"
    },
    {
        label: "Week 2",
        url: "week2/w02-index.html"
    },
    {
        label: "Challenge:1 Todo",
        url: "challenge-1"
    }
  ]

  /**create for loop to go through array and create li and a tags */

  var parent = document.getElementById("assignments")
  
  for(let i = 0; i < links.length; i++){
    const newList = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(links[i].label);

    link.setAttribute("href", links[i].url);
    link.appendChild(text);
    newList.appendChild(link);
    parent.appendChild(newList);
  }

  //js for notes
  function checkNumber(){
    let numberAsText=document.getElementById("number_input").nodeValue;
    let remainder = numberAsText%2;
    if(remainder==0){
      document.getElementById("result_display").innerHTML = 
      numberAsText + "is even."
    }
    else{
      document.getElementById("result_display").innerHTML = 
      numberAsText + "is odd.";
    }
  }