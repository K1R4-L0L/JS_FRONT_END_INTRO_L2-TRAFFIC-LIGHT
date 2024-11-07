//Use query Selectors to get the class of all the button shapes
const redlight = document.querySelector('.red-light');
const yellowlight = document.querySelector('.yellow-light');
const greenlight = document.querySelector('.green-light');
const cyclelight = document.querySelector('.cycle-light');
//const onofflight = document.querySelector('.onoff-light');

//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.

const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch');
const cycleSwitch = document.getElementById('cycle-switch')
//const onoffSwitch = document.getElementById('onoff-switch')
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

let currentLight = 'red'; //List current light state
let intervalid = null;

function cycleLight(){
    redlight.style.backgroundColor = '#444'
    yellowlight.style.backgroundColor = '#444'
    greenlight.style.backgroundColor = '#444'
    if (currentLight === 'red') {
        redlight.style.backgroundColor = 'red';
        currentLight = 'yellow';
    }else if (currentLight === 'yellow') {
        yellowlight.style.backgroundColor = 'yellow';
        currentLight = 'green';
    
    }else{
        greenlight.style.backgroundColor = 'green';
        currentLight = 'red'
    }
    }

cycleSwitch.addEventListener('click;', () => {
    if(!intervalid){
    intervalid = setInterval(cycleLight, 1000);
    }
});
//Turn all lights on and off with their specific buttons

//Party Mode Button
// onoffSwitch.addEventListener('click',() => {
    
    //greenlight.style.backgroundColor = 'pink';
   // yellowlight.style.backgroundColor = 'purple';
   // redlight.style.backgroundColor = 'blue';

//Turn all lights on and off at once with a single button