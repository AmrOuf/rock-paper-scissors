//Global variables
var playerScore = 0;
var computerScore = 0;

//On clicking any of the three rock-paper-scissors icons call the function addChoice()
var rock = document.getElementById("rock");
rock.addEventListener("click", addChoice);

var paper = document.getElementById("paper");
paper.addEventListener("click", addChoice);

var scissors = document.getElementById("scissors");
scissors.addEventListener("click", addChoice);

//On pressing "Restart Game", reload the page to reset everything
var restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', function(){
	location.reload();
});

//addChoice() specifies the player input and chooses a random input for the computer to compute the result
function addChoice(e)
{
	//Add the choosen icon by the player to the player side
	var playerChoice = document.getElementById("player-move");
	playerChoice.innerHTML = '<img src="imgs/'+e.target.id+'.png" class="img-fluid">';

	//Map each choice to a number between 0 and 2
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
	//Choose random integer between 0 and 2
	var compRandom = Math.floor(Math.random() * 3); 

	//Add the randomly chosen icon to the computer side
	if (compRandom === 0) {	
		compChoice.innerHTML = '<img src="imgs/rock.png" class="img-fluid">';
	}
	else if (compRandom === 1) {
		compChoice.innerHTML = '<img src="imgs/paper.png" class="img-fluid">';
	}
	else {
		compChoice.innerHTML = '<img src="imgs/scissors.png" class="img-fluid">';
	}

	//Call another function to calculate the winner and update the score result on the screen
	judgement(playerRandom, compRandom);
}

function judgement(player, computer)
{
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


	//Print the result on the screen
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