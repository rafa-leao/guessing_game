// jquery copy
let $ = document.querySelector.bind(document);

let input = $('.input');
input.focus();

let btnChecker = $('.btn-check');
let btnRestart = $('.btn-restart');

let answerArea = $('.answer');

let thoughtNumber = randomNumber();

// where the game happens
btnChecker.addEventListener('click', checkThoughtNumber);
btnRestart.addEventListener('click', restartGame);	

// functions
function randomNumber () {return Math.round(Math.random()*10);}

function checkThoughtNumber() {
	
	if (input.value == thoughtNumber) {
		answerArea.textContent = "You got it!";
		input.disabled = true;
	} else {
		answerArea.textContent = "You are wrong! The number was: " + thoughtNumber;
		input.disabled = true;
	}
}

function restartGame() {

	input.value = "";
	input.disabled = false;
	input.focus();

	answerArea.textContent = "";

	// takes other number on restart
	thoughtNumber = randomNumber();

}
