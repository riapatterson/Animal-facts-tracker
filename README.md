# Animal facts mini web app

## Objective

Build a small web app that lets users search for animals, view interesting facts about them, see an image, and maintain a list of animals they’ve viewed. The app will also track and display the total average lifespan of the animals in the list.

This is a debug-style project, so your goal is to:

- Implement or fix DOM interactions, API calls, and event handling

- Use fetch and async/await correctly

- Handle form input, errors, and dynamic updates

- Write good README and Git commits

## Key Components to implement

- Form Input — User types in an animal name and submits it

- Fetch Animal Info from:
https://api.api-ninjas.com/v1/animals?name={animal}
(API key required: sign up free)

- Fetch Animal Image using Pexels API (as in your fruit app)

- Display Area — Show:

- Animal name

- A short fact or trait (like habitat or diet)

- An image of the animal

- List Management — Add animals to a visible list

- Total Lifespan — Track and display the combined average lifespan of all animals added

- Remove on Click — Clicking an animal removes it from the list and subtracts its lifespan

## Functional Requirements:

- Prevent form reload using .preventDefault()

- Alert the user if the input is blank or the animal is not found

- Do not duplicate animals in the list

- Use .trim(), .toLowerCase(), and .includes() where helpful

- Handle .catch() errors gracefully

- Include one function using async/await

- Add all animals and lifespan values to the DOM dynamically