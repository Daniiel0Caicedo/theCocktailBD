const URL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const main = document.getElementById('card');

search.addEventListener('keyup',browser);

window.addEventListener("DOMContentLoaded",toPrint);

function toPrint(){
    fetch (URL)

    .then (Response => Response.json())
    .then (Response => Response.drinks.forEach(element => {
        console.log(element);
        createC(element);
    }))   
    }
    

function createC(element) {

    const card = document.createElement('div');
    card.classList.add("cards");
    
    const imgC = document.createElement('img');
    imgC.classList.add("images");

    const nameC = document.createElement('h1');
    nameC.classList.add("name");

    imgC.setAttribute('src',element["strDrinkThumb"]);
    nameC.textContent = element["strDrink"];

    card.appendChild(nameC);
    card.appendChild(imgC);

    main.appendChild(card);


}

function browser (){
    card.quarryselector(nameC)
    card.textContent.toLowercase('card');
}