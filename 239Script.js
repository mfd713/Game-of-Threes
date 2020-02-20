/*
Dev Name: Madeilne Friend
Date Started: 12/5/18
Last updated: 12/6/18

r/dailyprogrammer challenge #239: A Game of Threes
Project description here: https://www.reddit.com/r/dailyprogrammer/comments/3r7wxz/20151102_challenge_239_easy_a_game_of_threes/
*/

function myFunction(){
	var finalResult = "";
	var rawInput = document.getElementById("userInput").value;
	
	//start the actual math stuff
	while(rawInput > 1){
		if(rawInput % 3 == 0){
			rawInput  = rawInput/3;
			finalResult += rawInput.toString() + "<br>";
		}
		else if(rawInput % 3 == 1){
			rawInput -= 1;
			rawInput = rawInput/3;
			finalResult += rawInput.toString() + "<br>";
		}
		else if(rawInput % 3 == 2){
			rawInput += 1;
			rawInput = rawInput/3;
			finalResult += rawInput.toString() + "<br>";
		}
	}
	//display the results
	document.getElementById("display").innerHTML= finalResult;
}