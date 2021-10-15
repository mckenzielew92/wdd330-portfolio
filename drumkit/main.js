
//This will listen for the key down event, when that happens 
//the function will run.
//e is the object full of data describing what happened.
//we are concerned with the keycode
//we want it to look for 
window.addEventListener('keydown', function (e) {
    //is there an "audio" element in the html of the page that has a data-key of 65?
    //The querySelector() method returns the first element that matches a specified CSS selector(s) 
    //in the document.
    //square brackets is an attribute selector, using the e.keyCode will get the number
    //associated with they key.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //this selects a class of key 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //if no audio then it will return = stop the function.
    if(!audio) return;
    //when we hit a key it will play and then continue to play even if
    //every time you hit the key you need to get it to rewind.
    audio.currentTime = 0; //rewind to the start with each key press.
    audio.play();
    //when we key down we will add a class of playing to the elements within key.
    //right now it will add, but it will not revert back to it's original state. We need to now remove the class on keyup
    key.classList.add('playing');
    
});

    function removeTransition(e){
        if(e.propertyName !== 'transform') return; //skip it if it's not a transform.
        console.log(e.propertyName);
        
        this.classList.remove('playing');
    }
    //this will make the highlighted border and size go back
    const keys = document.querySelectorAll('.key');
    //we are doing this instead of addEventListener('transitionend'); because
    //when you have an array you cannot listen to all of them you have to loop,
    //arrow function will make it loop through? This gets an event listener added to it
    //
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
