//Use query Selectors to get the class of all the button shapes
const redlight = document.querySelector('.red-light');
const yellowlight = document.querySelector('.yellow-light');
const greenlight = document.querySelector('.green-light');
const partylight = document.querySelector('.party-light');

//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.

const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch');
const partySwitch = document.getElementById('party-switch')
//Add event listeners that listen for a button click
redSwitch.addEventListener('click',() => {
    redlight.style.backgroundColor = 'red';
    yellowlight.style.backgroundColor = 'black';
    greenlight.style.backgroundColor = 'black';

});

yellowSwitch.addEventListener('click',() => {
    yellowlight.style.backgroundColor = 'yellow';
    redlight.style.backgroundColor = 'black';
    greenlight.style.backgroundColor = 'black';

});

greenSwitch.addEventListener('click',() => {
    greenlight.style.backgroundColor = 'green';
    yellowlight.style.backgroundColor = 'black';
    redlight.style.backgroundColor = 'black';
   
});

partySwitch.addEventListener('click',() => {
    greenlight.style.backgroundColor = 'pink';
    yellowlight.style.backgroundColor = 'purple';
    redlight.style.backgroundColor = 'blue';
});
//Turn all lights on and off with their specific buttons

//Party Mode Button

//Turn all lights on and off at once with a single button