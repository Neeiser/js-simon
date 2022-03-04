/* 
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo aver nascosto i numeri chiedete all'utente di inserirli in ordine, uno alla volta.
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numbersDisplayed = document.getElementById ('numbers-displayed')
const numbersInput = document.getElementById ('numbers-input')
const checkBtn = document.getElementById ('check-btn')
const numbersOutput = document.getElementById ('output')

const randomNumbersArr = [];

function randomNumbers(numbers) {

    Math.floor(Math.random() * 10 ) + 1;
    return numbers;
    
}
