const fruitList = [
    {
        name: "apple",
        color: "red"
    },
    {
        name: "blueberry",
        color: "blue"
    },
    {
        name: "peach",
        color: "peach"
    },
    {
        name: "mango",
        color: "yellow"
    },
    {
        name: "orange",
        color: "orange"
    },
    {
        name: "dragonfruit",
        color: "pink"
    },
    {
        name: "kiwi",
        color: "green"
    },

];

console.log(fruitList);

//callback function
//foreach
function doSomethingToEveryItem(item) {
    console.log(item.name, item.color);
}

//map
function goodMapCallbackFunction(item){
    return item.color;
}
//fruitList.forEach(doSomethingToEveryItem);
//console.log(result); //prints undefined because foreach does not return anything

//map
const result = fruitList.map(goodMapCallbackFunction);
console.log(result);


// write some code that filters the original array to only return fruit
// objects that are red

//filter
// function redOnly(item){
//     if (item.color === "red"){
//         return true;
//     }else{
//         return false;
//     }
// }

//or
// function redOnly(item){
//     return (item.color === "red")
// }

//rewrite as an arrow function
const redOnly = (item) => (item.color === "red");


//filter
const redFruit = fruitList.filter(redOnly);
console.log(redFruit);


//const redFruit = fruitList.filter();


//write a function that filters the fruit by red,
// builds a card, and inserts each card into the dom:

/**
* filter by red
* visit each of the red items and convert each one to an html representation
* reach into the dom, target the parent element, and jam the children in
*/

const onlyreds = fruitList.filter(redOnly);
const htmlsnippets = fruitList.map(toHTML);
const containerEl = document.querySelector("#fruit-container");

htmlsnippets.forEach(item => containerEl.insertAdjacentHTML('beforeend', snip));
containerEl.innerHTML = htmlsnippets.join("");




const endpoint = ""
const results = fetch(endpoint);