
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

  //js for activity in week one notes
  function checkNumber(){
    let numberAsText = document.getElementById("name-input").value
    let aNumber = parseInt(numberAsText);
    if(numberAsText != "" && !isNaN(aNumber)){
      let remainder = Math.abs(aNumber % 2);
      if(aNumber != 0 && remainder == 0){
        document.getElementById("result_display").innerHTML = 
        aNumber + " is even.";
      }
      else if(aNumber != 0 && remainder ==1){
        document.getElementById("result_display").innerHTML =
        aNumber + " is odd.";
      }
      else {
        document.getElementById("result_display").innerHTML = 
        "0 is neither even or odd.";
      }
    }
    else{
      document.getElementById("result_display").innerHTML = 
      "Please enter a number."
    }
  }
