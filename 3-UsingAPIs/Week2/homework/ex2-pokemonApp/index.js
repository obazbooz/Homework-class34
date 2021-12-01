'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Request field!');
  } catch (error) {
    console.log(error);
  }
}

function selectElementcreator(optionData) {
  const optionElement = document.createElement('option');
  optionElement.value = optionData.url;
  optionElement.textContent = optionData.name;
  document.getElementById('selectElementID').appendChild(optionElement);
}

async function fetchAndPopulatePokemons(url) {
  let clicked = false;

  try {
    const { results } = await fetchData(url);
    const getPokemonButton = document.createElement('button');
    getPokemonButton.type = 'text';
    getPokemonButton.textContent = 'Get Pokemon';
    document.body.appendChild(getPokemonButton);
    const selectElement = document.createElement('select');
    selectElement.setAttribute('id', 'selectElementID');
    document.body.appendChild(selectElement);

    getPokemonButton.addEventListener('click', () => {
      if (!clicked) {
        clicked = true;
        results.forEach((element) => {
          selectElementcreator(element);
        });
      }
    });

    selectElement.addEventListener('change', () => {
      fetchImage();
    });
  } catch (error) {
    console.log(error);
  }
}

async function fetchImage() {
  const selectedPokemon = document.querySelector('#selectElementID');
  const pokemonImage = document.createElement('img');
  pokemonImage.style.display = 'block';
  document.body.appendChild(pokemonImage);
  const pokemonImageUrl =
    selectedPokemon.options[selectedPokemon.selectedIndex].value;
  try {
    const imageResponse = await fetchData(pokemonImageUrl);
    const imgElement = document.querySelector('img');
    imgElement.src = imageResponse.sprites.front_default;
    imgElement.alt = imageResponse.name;
    imgElement.style.width = '200px';
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  try {
    await fetchAndPopulatePokemons(url);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
