

const instructions = document.getElementById('instructions');
const sound1 = document.getElementById('hover-sound1');
const sound2 = document.getElementById('hover-sound2');
const button = document.getElementById('warning');


let passwordGuessedTimes = 0;

instructions.addEventListener('mouseover', function() {
  sound1.play();
});

instructions.addEventListener('mouseout', function() {
  sound1.pause();
  sound1.currentTime = 0; // Reset to the beginning
});

button.addEventListener('mouseover', function() {
  sound2.play();
});

button.addEventListener('mouseout', function() {
  sound2.pause();
  sound2.currentTime = 0; // Reset to the beginning
});


function startGame() {
	console.log("welcome to the subway tunnels. what's the password? (say it with your chest) \n ====================================================================================================.\r\nS |   |     |       | |             |   |           |   |             |   |                 |   |   |\r\n| | | | .=. \'== .== | | .== .=====. | | \'======== | | | | ==========. | | | .=============. | | \'=. |\r\n|   | | | |     |   | | |   |     |   |     |     |   | |     |     |   |   |     |       |   |   | |\r\n|===| | | |=====| ==| | | .=| .== \'======== | .=======| \'==== |==== \'===+===| ==. | .=====+=====. | |\r\n|   |   | |     |   |   | | | |     |       | |       |   |   |         |   |   |   |     |     |   |\r\n| ======| | | .==== | .=\' | | | ====\' .=====| | .=======. | .=\' .=======| | | | |===| ==. | .=. \'=. |\r\n|       |   | |     | |   | | |   |   |     | | |   |   |   |   |       | |   | |   |   |   | |   | |\r\n| ====. | ==| | ======\' .=\' | \'=. | ===== | | | | | | | \'===\' ==\' ====. | \'===| | | \'== \'===\' \'=. | |\r\n|     |     |           |       |         |   |   |   |               |       |   |             |   E\r\n\'==================================================================================================== \n _..----.._    _\r\n            .\'  .--.    \"-.(0)_\r\n\'-.__.-\'\"\'=:|   ,  _)_ \\__ . c\\\'-..\r\n             \'\'\'------\'---\'\'---\'-\"");
	setTimeout(password, 8000); //8 seconds
}

function password(){
	passwordGuessedTimes = passwordGuessedTimes + 1;
	let input = window.prompt("","enter the password to proceed... ");
	if (input === 'FUCK ERIC ADAMS') {
		console.log("Yuuuur. Follow me.")
		console.warn("Don't forget to look up. Are you ready to play?")
		// HELP document.getElementById("displayArt").innerHTML = "RAT ASCII"
		//trigger another function that does something or changes the page in some way? 
	}
	else if (input === 'ERIC ADAMS') {
		console.log("Are you Eric Adams?")
		//maybe give you the bad ending
	}
	else {
		console.log("OPP!")
		//gives you a hint 
		if (passwordGuessedTimes == 1){
			console.log("hint: who do you really detest...");
			}		
		else if (passwordGuessedTimes == 2){
			console.log("hint: listen to the warning...the browser never lies");
			}	
		else if (passwordGuessedTimes == 3){
			console.log("hint: keep an eye on the tab...");
			}	
			// etc etc, until
		else {
			console.log("🍅 YOU'RE THE REAL RAT, ERIC ADAMS!🐀");
			}	
		password();
	}
}

startGame();





