'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollTheDices()` by using `.map()` on the `dices` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const dicsPromisesArray = dices.map((dice) => {
    return rollDice(dice);
  });
  return Promise.race(dicsPromisesArray);
}

async function main() {
  try {
    const rollTheDicesResponse = await rollTheDices();
    console.log('Resolved!', rollTheDicesResponse);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();
// ! Do not change or remove the code below
module.exports = rollTheDices;

//************************************************************************************************************************************* */
//The explanation about why that some dice continue rolling for some undetermined time after the promise returned by Promise.race():
//------------------------------------------------------------------------------------------------------------------------------------
// in our case here we have an asynchronous execution so all the dices are being executing away from each other, and all of the
// will return one of (resolve/reject), so with the Promise.race we are only returning the first solved/reject promise, but the other
//promises keep running in the background (event loop) until the get (resolve/reject).
//************************************************************************************************************************************* */
