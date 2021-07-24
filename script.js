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
	for (let i = 0; i < 200; i++) {
		if (input[i] != input[i - 1]) {
			noDoubles.push(input[i])
		}
	}
	console.log("Removed doubles");
	return noDoubles;
}

const emptyTheDOM = () => {
	const list = document.getElementsByClassName('list')[0];
	const listItems = document.querySelectorAll('.list li');
	for (let i = 0; listItems.length > i; i++) {
		list.removeChild(listItems[i]);
	}
	console.log("Removed listItems")
}

const addToDOM = (input) => {
	emptyTheDOM();
	input = removeDoubles(input);
	for (let i = 0; i < input.length; i++) {
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
const steenbokVrouwen = randomPersonData.filter(({ age, birthday }) => {
	const splitDay = birthday.dmy.split("/")[0];
	const splitMonth = birthday.dmy.split("/")[1];
	if (((splitDay >= '22' && splitMonth === '12') || (splitDay <= '19' && splitMonth === '01')) && age >= 30) {
		return true;
	}
}).map(item => `${item.name} ${item.surname}<br><img src="${item.photo}" width="150px" alt="">`);

buttonSteenbokvrouwen.addEventListener('click', () => addToDOM(steenbokVrouwen));

// Opdracht 3 Ouwe Credit
const expiredCreditcards = randomPersonData.filter(({ age, credit_card }) => {
	const expirationMonth = credit_card.expiration.split("/")[0];
	const expirationYear = "20" + credit_card.expiration.split("/")[1];
	let now = new Date;
	if ((expirationMonth >= now.getMonth() + 1 && expirationYear == now.getFullYear())
		|| (expirationMonth < now.getMonth() + 1 && expirationYear == now.getFullYear() + 1)) {
		if (age >= 18) { return true; }
	}
}).map((item) => {
	return `Name: ${item.name} ${item.surname}<br>Phone number: ${item.phone}<br>Creditcard number: ${item.credit_card.number}<br>Expiration date: ${item.credit_card.expiration}`;
}).sort(function (a, b) {
	// console.log(a);
	// console.log(b);
	let getDate = (item) => {
		item = Array.from(item.split("").reverse().join("").split(" ")[0]);
		if (item.length === 4) {
			item.push('0');
		}
		const month = item.reverse().join("").split("/")[0];
		const year = item.join("").split("/")[1];
		return item = `${year}${month}`;
	}
	a = getDate(a);
	b = getDate(b);
	// console.log(a);
	// console.log(b);
	return a - b;
});

buttonOuweCreditcards.addEventListener('click', () => addToDOM(expiredCreditcards));





	// .sort(item => item.name
	// 	// 	({ credit_card }) => {
	// 	// 	let date = credit_card.expiration;
	// 	// 	console.log(date);
	// 	// 	if (credit_card.expiration.length === 4) { date = `0${credit_card.expiration}` }
	// 	// 	date = date.split("/").reverse().join('');
	// 	// 	console.log(date);
	// 	// 	return date;
	// 	// }
	// )