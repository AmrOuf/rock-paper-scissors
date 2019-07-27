window.onload = function()
{
	// var temp = document.querySelectorAll('.game-area .row img');
	// temp[0].style = "visibility: hidden";
	// console.log(temp[0]);
}

var rock = document.getElementById("rock");
rock.addEventListener("click", addChoice);

var paper = document.getElementById("paper");
paper.addEventListener("click", addChoice);

var scissors = document.getElementById("scissors");
scissors.addEventListener("click", addChoice);

var playerScore = 0;
var computerScore = 0;

var restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', function(){
	location.reload();
});


function addChoice(e)
{
	// console.log(e.target.id);
	var playerChoice = document.getElementById("player-move");
	// console.log(playerChoice);
	playerChoice.innerHTML = '<img src="imgs/'+e.target.id+'.png" class="img-fluid">';

	var playerRandom;
	if (e.target.id === 'rock') {
		playerRandom = 0;
	}
	else if (e.target.id === 'paper') {
		playerRandom = 1;
	}
	else {
		playerRandom = 2;
	}


	//Computer choice
	var compChoice = document.getElementById("comp-move");
	//Return random integer between 0 and 2
	var compRandom = Math.floor(Math.random() * 3); 
	// console.log(compRandom);


	if (compRandom === 0) {	
		compChoice.innerHTML = '<img src="imgs/rock.png" class="img-fluid">';
	}
	else if (compRandom === 1) {
		compChoice.innerHTML = '<img src="imgs/paper.png" class="img-fluid">';
	}
	else {
		compChoice.innerHTML = '<img src="imgs/scissors.png" class="img-fluid">';
	}

	// console.log('playerRandom: '+playerRandom);
	// console.log('compRandom: '+compRandom);

	judgement(playerRandom, compRandom);
}

function judgement(player, computer)
{
	// console.log('player: '+player);
	// console.log('computer: '+computer);

	var result;

	// Player chose Rock!
	if (player === 0) {
		if (computer === 0)
			result = 'Draw';
		else if (computer === 1)
			result = 'Computer wins!';
		else 
			result = 'Player Wins!';
	}

	// Player chose Paper!
	else if (player === 1) {
		if (computer === 0)
			result = 'Player Wins!';
		else if (computer === 1)
			result = 'Draw';
		else 
			result = 'Computer Wins!';
	}

	// Player chose Scissors!
	else {
		if (computer === 0)
			result = 'Computer Wins!';
		else if (computer === 1)
			result = 'Player Wins!';
		else 
			result = 'Draw';
	}


	var resultText = document.getElementById('result-text');

	if (result === 'Draw')
		resultText.innerHTML = '<h2 class="text-dark">It\'s a DRAW!</h2>';
	else if (result === 'Player Wins!') {
		resultText.innerHTML = '<h2 class="text-light bg-success" style="border-radius: 15px;">YOU WIN!</h2>';
		playerScore++;
		document.getElementById('player-result').innerHTML = 'Player: '+playerScore;
	}
	else {
		resultText.innerHTML = '<h2 class="text-light bg-danger" style="border-radius: 15px;">YOU LOSE!</h2>';
		computerScore++;
		document.getElementById('computer-result').innerHTML = 'Computer: '+computerScore;
	}



}

