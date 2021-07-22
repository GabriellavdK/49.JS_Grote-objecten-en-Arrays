import { randomPersonData } from './randomPersonData.js';

// Constants for buttons DOM
const buttonLandenlijst = document.getElementsByClassName('button1')[0];
const buttonSteenbokvrouwen = document.getElementsByClassName('button2')[0];
const buttonOuweCreditcards = document.getElementsByClassName('button3')[0];
const buttonMeesteMensen = document.getElementsByClassName('button4')[0];
const buttonGemiddeldeLeeftijd = document.getElementsByClassName('button5')[0];
const buttonMatchmaking = document.getElementsByClassName('button6')[0];

// Functions
const removeDoubles = (input) => {
	const noDoubles = [];
	for (let i = 1; i < 200; i++) {
		if (input[i] != input[i - 1]) {
			noDoubles.push(input[i])
		}
	}
	return noDoubles;
}

const emptyTheDOM = () => {
	const list = document.getElementsByClassName('list')[0];
	const listItems = document.querySelectorAll('.list li');
	for (let i = 0; i < list.length; i++) {
		list.removeChild(listItems[i]);
	}
}

const addToDOM = (input) => {
	emptyTheDOM();
	input = removeDoubles(input);
	for (let i = 0; i < 200; i++) {
		if (input[i] != undefined) {
			const list = document.getElementsByClassName('list')[0];
			const newLi = document.createElement('li');
			newLi.innerHTML = input[i];
			list.appendChild(newLi);
		}
	}
}

// Opdracht 1 Landenlijst
const countries = randomPersonData.map(item => item.region).sort();

buttonLandenlijst.addEventListener('click', () => addToDOM(countries));

// Opdracht 2 Steenbok Vrouwen -> vrouwen boven de 30 jaar en steenbok als sterrenbeeld (jarig van 22 december t/m 19 januari)
