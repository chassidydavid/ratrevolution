

const instructions = document.getElementById('instructions');
const sound1 = document.getElementById('hover-sound1');
const sound2 = document.getElementById('hover-sound2');
const sound3 = document.getElementById('hover-sound3')
const button = document.getElementById('warning');
const ratcity = document.getElementById('ratcity');


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



const displayArt = document.getElementById("displayArt")
convertToAsciiWithSpacing(displayArt)

function startGame() {
	console.log("welcome to the subway tunnels. what's the password? (say it with your chest) \n ====================================================================================================.\r\nS |   |     |       | |             |   |           |   |             |   |                 |   |   |\r\n| | | | .=. \'== .== | | .== .=====. | | \'======== | | | | ==========. | | | .=============. | | \'=. |\r\n|   | | | |     |   | | |   |     |   |     |     |   | |     |     |   |   |     |       |   |   | |\r\n|===| | | |=====| ==| | | .=| .== \'======== | .=======| \'==== |==== \'===+===| ==. | .=====+=====. | |\r\n|   |   | |     |   |   | | | |     |       | |       |   |   |         |   |   |   |     |     |   |\r\n| ======| | | .==== | .=\' | | | ====\' .=====| | .=======. | .=\' .=======| | | | |===| ==. | .=. \'=. |\r\n|       |   | |     | |   | | |   |   |     | | |   |   |   |   |       | |   | |   |   |   | |   | |\r\n| ====. | ==| | ======\' .=\' | \'=. | ===== | | | | | | | \'===\' ==\' ====. | \'===| | | \'== \'===\' \'=. | |\r\n|     |     |           |       |         |   |   |   |               |       |   |             |   E\r\n\'==================================================================================================== \n _..----.._    _\r\n            .\'  .--.    \"-.(0)_\r\n\'-.__.-\'\"\'=:|   ,  _)_ \\__ . c\\\'-..\r\n             \'\'\'------\'---\'\'---\'-\"");
	setTimeout(password, 8000); //8 seconds
	displayArt.innerHTML = "         __             _,-\"~^\"-.\r\n       _\/\/ )      _,-\"~`         `.\r\n     .\" ( \/`\"-,-\"`                 ;\r\n    \/ 6                             ;\r\n   \/           ,             ,-\"     ;\r\n  (,__.--.      \\           \/        ;\r\n   \/\/\'   \/`-.\\   |          |        `._________\r\n     _.-\'_\/`  )  )--...,,,___\\     \\-----------,)\r\n   (((\"~` _.-\'.-\'           __`-.   )         \/\/\r\n         (((\"`             (((---~\"`         \/\/\r\n                                            ((________________\r\n                                            `----\"\"\"\"~~~~^^^```"
	convertToAsciiWithSpacing(displayArt)
	displayArt.addEventListener('mouseover', function() {
  sound3.play();
});

displayArt.addEventListener('mouseout', function() {
  sound3.pause();
  sound3.currentTime = 0; // Reset to the beginning
});
}

function convertToAsciiWithSpacing(element) {
  if (!element) {
    return;
  }

  let html = element.innerHTML;

  // Replace < and > with their HTML entities to prevent them from being interpreted as HTML tags
  html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Replace spaces with &nbsp; to preserve them
  html = html.replace(/ /g, "&nbsp;");

  // Replace new lines with <br> tags for line breaks
  html = html.replace(/\n/g, "<br>");

  // Set the innerHTML of the element to the modified HTML
  element.innerHTML = html;
}

function password(){
	passwordGuessedTimes = passwordGuessedTimes + 1;
	let input = window.prompt("","enter the password to proceed...");
	if (input === 'FUCK ERIC ADAMS') {
		console.log("Yuuuur. Close out the console and follow me.")
		console.warn("Don't forget to look up. Are you ready to play?")
		function Q1() {
			    //window.location.href = 'questionOne.html';
			    // body...
		}
		//window.location.href = "questionOne.html"; ???? how do i change the html page?

		// HELP document.getElementById("displayArt").innerHTML = "RAT ASCII"
		//trigger another function that does something or changes the page in some way? 
	}
	//else if (input === 'ERIC ADAMS') {
		//console.log("Are you Eric Adams?")
		//maybe give you the bad ending
	//}
	else {
		console.log("⚠️ OPP!")
		//gives you a hint 
		if (passwordGuessedTimes == 1){
			console.log("hint: who makes you miss DeBlasio?");
			}		
		else if (passwordGuessedTimes == 2){
			console.log("hint: listen to the warning...the browser tab never lies");
			}	
		else if (passwordGuessedTimes == 3){
			console.log("hint: keep an eye on the tab...");
			}	
		else if (passwordGuessedTimes == 4){
			console.log("hint: SAY IT WITH YOUR CHEST!");
			}		
		else if (passwordGuessedTimes == 5){
			console.log("hint: that means ALL CAPS");
			}
			// etc etc, until
		else {
			console.log("🍅 NICE TRY ERIC ADAMS!🐀");
			}	
		password();
	}
}

function Q1() {
            window.location.href = 'questionOne.html';
       			 }

startGame();





