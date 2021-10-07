const form = document.forms['hero'];
//add event listener when the form is submitted
form.addEventListener('submit', makeHero, false);
//This (above) will invoke the makeHero() function when
//the form is submitted.
function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;

    //To loop through powers to see what has been checked
    hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }

    hero.category = form.category.value;
    //below unchecks all other radios(even though they are already
    //unchecked???)
    form.type[2].checked = true;
}
//the above loop checks if checkbox was checked, if it was
//we add the 'value' property of the checkbox to the powers array using the push method.
//this code will achieve the same result:
//hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

//this processes the age information
hero.age = form.age.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
//this code makes first box appear checked
//document.forms.hero.powers[0].checked = true;

form.category;