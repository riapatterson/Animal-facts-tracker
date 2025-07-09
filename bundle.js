(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const animalForm = document.querySelector('#inputSection form')
const animalList = document.querySelector('#animalSection ul')
const animalWeights = document.querySelector('#averageWeightSection p')
// These constants are taking me to the node of the website 
// i need to be at to change those parts of the website


animalForm.addEventListener(
    'submit', extractAnimal     // 'submit' is the event, and the function runs when the event occurs
                                // Question, why doesnt extractAnimal have () at end as it is a function
)                               // This is essentially getting the animal name from what the user has typed in


function extractAnimal(e) {             // This function will search for the animal in the API and store the info until it needs to be used
    e.preventDefault();                 // What is e?           
    const input = e.target.animalInput
    fetchAnimalData(input.value);       // Essentially, inside this function will ultimately be the user input
    fetchAnimalPicture(input.value);
    input.value = '';                   // Does this reset the value back to blank once a user clicks submit??
} 

let weight = 0;

function addAnimal(animal) {                    // Adding list of animals to animalSection
                                                // I assume the variable animal comes from the user entry in the form, but how does that information get to this function?
    const li = document.createElement('li')     // This has created a <li></li> (a new node li)

    li.textContent = animal.name                // This is information from the API, which will be made into a DOM in fetchFruitData() ?
    animalList.appendChild(li);                  // Added a list element amongst <ul></ul>

    weight += animal.characteristics.weight;    // Using DOMs again 
    animalWeights.textContent = `${weight} Kg!`

    li.addEventListener('click', () => {
        weight -= animal.characteristics.weight;    // Doing the opposite of adding the total weight so that when the animal is removed with a click, the weight also is accounted for 
        animalWeights.textContent = `${weight} Kg!`
        li.remove()
    })
}





},{}]},{},[1]);
