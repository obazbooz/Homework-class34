/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dices-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollTheDices()` function to throw five dices in one go, by 
    using `.map()` on the `dices` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Dice 3 rolled off the table.

The provided rollDice() function logs the value of a dice as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dices 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dices that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  // return new Promise((resolve) => {
  const dices = [1, 2, 3, 4, 5];
  const arrayOfPromises = dices.map((dice) => {
    return rollDice(dice);
  });
  return Promise.all(arrayOfPromises);
}

rollTheDices()
  .then((results) => {
    console.log('Resolved!', results);
  })
  .catch((error) => {
    setTimeout(() => {
      console.log('Rejected!', error.message);
      return;
    }, 1000);
  });

// ! Do not change or remove the code below
module.exports = rollTheDices;

// In the case of a rejected promise the dices that have not yet finished their
//roll continue to do because I think when we get rejected Promise we do not stop
// the rolling and we can do that by using (return) after the reject() statement.
//--------------
// After correcting the code I added a return to the error catch
//and I have noticed that I still getting result after the we get rejected
// and I think thats because I have here async code and the execution takes different time
//some statements execute before others so even I get rejected and I return I still have
//statements in the event loop.
// to solve that I have used a setTimeout function.
