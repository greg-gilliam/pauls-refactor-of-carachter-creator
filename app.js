// import functions
import { getImage } from './get-images.js';

// reference needed DOM elements
let strength = document.getElementById('strength');
let speed = document.getElementById('speed');
let intelligence = document.getElementById('intelligence');
let empathy = document.getElementById('empathy');
let luck = document.getElementById('luck');

let strengthImage = document.getElementById('strength-image');
let speedImage = document.getElementById('speed-image');
let intelligenceImage = document.getElementById('intelligence-image');
let empathyImage = document.getElementById('empathy-image');
let luckImage = document.getElementById('luck-image');

let inputs = Array.from(document.getElementsByTagName('input'));
let allottedSoFarDiv = document.getElementById('allotted-so-far');
let errorMessage = document.getElementById('error-message');
let submitValues = document.getElementById('submit-values');

let allottedSoFarValue;
let attributes = [
    [strength, 'strength', strengthImage], 
    [intelligence, 'intelligence', intelligenceImage], 
    [speed, 'speed', speedImage], 
    [empathy, 'empathy', empathyImage], 
    [luck, 'luck', luckImage]
];

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', () => {
        allottedSoFarValue = (parseInt(strength.value) || 0)
                          + (parseInt(speed.value) || 0)
                          + (parseInt(intelligence.value) || 0)
                          + (parseInt(empathy.value) || 0)
                          + (parseInt(luck.value) || 0);
        allottedSoFarDiv.textContent = `You have allotted ${allottedSoFarValue} points so far`;
    });
}

submitValues.addEventListener('click', () => {
    if (allottedSoFarValue < 50) {
        errorMessage.textContent = `Uh oh! You haven't allotted all your points yet!`;
    } else if (allottedSoFarValue > 50) {
        errorMessage.textContent = `Oh no! You've allotted too many points! Time to make some tough decisions.`;
    } else {
        let imagePath; 
        for (let i = 0; i < attributes.length; i++) {
            imagePath = getImage(attributes[i][0].value, attributes[i][1]);
            attributes[i][2].src = imagePath;
        }
    }

});


