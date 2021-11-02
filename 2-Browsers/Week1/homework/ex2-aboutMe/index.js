'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

let bodyEl = document.body;
bodyEl.style.fontFamily = 'Arial, sans-serif';
let ulEl = document.querySelectorAll('ul');
let liEl = document.querySelectorAll('li');
let spanElNickname = document.getElementById('nickname');
let spanElFavFood = document.getElementById('fav-food');
let spanElHomeTown = document.getElementById('hometown');
let pElName = document.createElement('p');
let pElFood = document.createElement('p');
let pElHome = document.createElement('p');
pElName.textContent = 'Osama';
pElFood.textContent = 'Sushi';
pElHome.textContent = 'Netherlands';
spanElNickname.replaceWith(pElName);
spanElFavFood.replaceWith(pElFood);
spanElHomeTown.replaceWith(pElHome);
pElName.style.display = 'inline';
pElFood.style.display = 'inline';
pElHome.style.display = 'inline';
liEl.forEach((element) => element.classList.add('list-item'));
