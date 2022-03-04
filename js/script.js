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



/* 
- Visualizzare in pagina 5 numeri casuali.
*/

while (randomNumbersArr.length < 5){
    let numberPulled = Math.floor(Math.random() * 20 ) + 1;
    
    if (randomNumbersArr.includes(numberPulled) == false) { 
        randomNumbersArr.push(numberPulled);
    }

    console.log(randomNumbersArr)
}



/* 
- Da lì parte un timer di 30 secondi.
*/

function timer() {
    let counter = 30;
    let timer = setInterval(function() {
      document.getElementById("timer").innerHTML = counter;
      counter--;
      if (counter < 0) { /* PER BLOCCARLO ALLO 0 */
        clearInterval(timer);
      }
    }, 1000);
  }
timer();

/* setTimeout(timerCountdown, 3000);

function timerCountdown(number) {
    .....innerHTML = number;
} */


/* 
- Dopo aver nascosto i numeri chiedete all'utente di inserirli in ordine, uno alla volta.
*/

numbersDisplayed.innerHTML = randomNumbersArr;

checkBtn.addEventListener('click', function(){

    if(numbersInput.value == randomNumbersArr){
        numbersOutput.innerHTML = 'Hai vinto!'
    }
    
});
