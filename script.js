const animalForm = document.querySelector('#inputSection form')
const animalList = document.querySelector('#animalSection ul')
const animalSpecies = document.querySelector('#speciesSection p')
// These constants are selecting parts of the DOM i'll be updating

animalForm.addEventListener(
    'submit', extractAnimal     // 'submit' is the event, and the function runs when the event occurs
);                               // This is essentially getting the animal name from what the user has typed in
                                // Question, why doesnt extractAnimal have () at end as it is a function?
                                // Answer: You're passing a **reference** to the function — not calling it right away.
                                //         If you wrote `extractAnimal()`, it would run immediately when the script loads.
                                //         `extractAnimal` (without parentheses) tells the browser: "Run this function when the event happens."
                               


function extractAnimal(e) {             // This function will search for the animal in the API and store the info until it needs to be used

    e.preventDefault();                 // What is e? `e` is the **event object**. It contains info about the form submission (like which element triggered it, what the form fields contain, etc.).         
    fetchAnimalData(e.target.animalInput.value);       // Essentially, inside this function will ultimately be the user input
    fetchAnimalPicture(e.target.animalInput.value);
    e.target.animalInput.value = '';                   // Does this reset the value back to blank once a user clicks submit?? Yes! 
} 

let species = 0;

function addAnimal(animal) {                    // Adding list of animals to animalSection
                                                // I assume the variable animal comes from the user entry in the form, but how does that information get to this function?
                                                // Answer: The `animal` parameter is passed into `addAnimal()` by the `fetchAnimalData()` function — once the API call succeeds and returns data.

    const li = document.createElement('li')     // This has created a <li></li> (a new node li)

    li.textContent = animal.name;                // This is information from the API, which will be made into a DOM in fetchFruitData() ?
    animalList.appendChild(li);                  // Added a list element amongst <ul></ul>

    species += Number(animal.characteristics?.number_of_species ?? 0);    // Using DOMs again 
    animalSpecies.textContent = `${species}!`

    li.addEventListener('click', () => {
        species -= Number(animal.characteristics?.number_of_species ?? 0);    // Doing the opposite of adding the total weight so that when the animal is removed with a click, the weight also is accounted for 
        animalSpecies.textContent = `${species}!`
        li.remove()
    })
}

function fetchAnimalData(animal) {

    const animalName = animal.toLowerCase().trim();

    if (animalName === '') {
        alert("Please Input an Animal!");
        return
    }

    fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
        headers: {
            'X-Api-Key': 'XloZ6iUBOMx5qsBZodNopA==AZ3nfqtY3NEf89jk'
        }
    })
    .then((resp) => resp.json())                // This is saying "Take the HTTP response (resp) from the fetch() call and convert it into JSON." - The fetch() function doesn't return JSON automatically — it returns a Response object, which you then need to convert with .json().
    .then(data => {
        if (data.length === 0) {
            alert("No Animal Found! Please Enter Another Animal");
            return;
        }
        addAnimal(data[0]); // Uses the first result (this particular API returns an array of animals)
    })
    .catch((err) => console.log(err));  
    };                                          // Once the response is turned into usable JSON data, this line passes the data into the addAnimal() function
                                                // So data is the JSON response from the API, and you're calling addAnimal(data) to add that info to your page.
    
    


function fetchAnimalPicture(animal) {
    fetch(`https://api.pexels.com/v1/search?query=${animal}`, {
        headers: {
            'Authorization': 'iScvqb0xyuhNycO0P1093JNNTpjsGbYqsQpfEqcK0VuVcwcYRZgqyxnv'
        } 
    })
    .then(response => response.json())
    .then(data => {
        const img = document.createElement('img');      
        img.src = data.photos[0].src.medium;                         //  This is accessing the image URL from the Pexels API response, and assigning it as the src of your image element.
                                                                    // .src.medium is the medium-sized image URL
        document.querySelector('#animalSection').appendChild(img);
    })
};




