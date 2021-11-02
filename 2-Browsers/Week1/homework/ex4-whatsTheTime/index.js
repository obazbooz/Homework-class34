'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  let timeEl = new Date();
  divEl.textContent = `The current time is: (H:${timeEl.getHours()} M:${timeEl.getMinutes()} S:${timeEl.getSeconds()} )`;
  bodyEl.append(divEl);
}
const bodyEl = document.body;
const divEl = document.createElement('div');
divEl.style.border = '5px solid red';
divEl.style.width = '130px';
divEl.style.padding = '10px';

window.addEventListener('DOMContentLoaded', () => {
  setInterval(addCurrentTime, 1000);
});
