/**************************************Year After Copyright*******************************/
let d = new Date();
document.getElementById("year").innerhtml = d.getFullYear();
//document.querySelector('meta[name=description]').setAttribute

/***************************************** API ******************************************/
const findName = document.getElementById("enter-name").value;
const apiData = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=150',
    type: 'pokemon',
    name: findName, //modify by user input
}

const {url, type, name} = apiData
const apiUrl = `${url}${type}/${name}`


fetch(apiUrl)
    .then( (data) => data.json() )
    .then( (pokemon) => generateHtml(pokemon) )


const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span class="type">Type: ${data.types.type}</span><br>
            <span class="id">Id: ${data.id}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
} 

// findName.addEventListener('click', grabName)
// function grabName(){
// if(nameInput == `${data.name}`){
//     return generateHtml
// }
// else{
//     `<div class="no-match">Sorry, that Pokemon doesn't exist.</div>`
// }
// }
