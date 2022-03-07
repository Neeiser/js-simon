/* 
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo aver nascosto i numeri chiedete all'utente di inserirli in ordine, uno alla volta.
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numbersDisplayed = document.getElementById ('numbers-displayed')
const titleDisplayed = document.getElementById ('title-displayed')
const numbersInput = document.getElementById ('numbers-input')
const checkBtn = document.getElementById ('check-btn')
const resultOutput1 = document.getElementById ('output1')
const resultOutput2 = document.getElementById ('output2')
const resultOutput3 = document.getElementById ('output3')

const randomNumbersArr = [];
const userNumbersArr = [];

/*
-----------------------------------------------------------------------------
- Visualizzare in pagina 5 numeri casuali.
*/

while (randomNumbersArr.length < 5){
    let numberPulled = Math.floor(Math.random() * 20 ) + 1;
    
    if (randomNumbersArr.includes(numberPulled) == false) { 
        randomNumbersArr.push(numberPulled);
    }

    console.log(randomNumbersArr)
}

/* Dove stampo i numeri estratti? */
numbersDisplayed.innerHTML = randomNumbersArr; 



/*
-----------------------------------------------------------------------------
- Da lì parte un timer di 30 secondi.
*/

function timer() {
    let counter = 29;
    let timer = setInterval(function() {
      document.getElementById("timer").innerHTML = counter;
      counter--;
      if (counter < 0) { /* PER BLOCCARLO ALLO 0 */
        clearInterval(timer);
      }
    }, 1000);
  }
timer();





/*
-----------------------------------------------------------------------------
- Dopo aver nascosto i numeri (passati i 30 secondi)...
*/
setTimeout(timerCountdown, 1000);

function timerCountdown() {

    titleDisplayed.innerHTML = "Quali erano i numeri visualizzati precedentemente?"
    numbersDisplayed.style.display = 'none';
    numbersInput.style.display = "block";
    checkBtn.style.display = "block";
}



/*
-----------------------------------------------------------------------------
- ...chiedete all'utente di inserirli in ordine, uno alla volta.
*/

checkBtn.addEventListener('click', function() {

  if (userNumbersArr.length < 5){
    for(i = 0; i < 1; i++) {
      userNumbersArr.push(parseInt(numbersInput.value));
      console.log(userNumbersArr)
      numbersInput.value= "";
    }
/*
-----------------------------------------------------------------------------
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri sono stati individuati.
*/
  } else {
    let score = [];
    for (i = 0; i < userNumbersArr.length; i++){
      if (randomNumbersArr[i] == userNumbersArr[i]){
        score.push(userNumbersArr[i])
      }
    }
    titleDisplayed.innerHTML = "GIOCO CONCLUSO!";
    numbersInput.style.display = 'none';
    checkBtn.style.display = 'none';
    resultOutput1.innerHTML = "I numeri da te inseriti sono: " + userNumbersArr;
    resultOutput2.innerHTML = "I numeri da ricordare erano: " + randomNumbersArr;
    resultOutput3.innerHTML = "I numeri che hai indovinato sono: " + score;
  }

});
