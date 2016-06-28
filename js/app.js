
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Global variables ---*/
  	var gameNumber; /* Generated number between 0 and 100 */
  	var guessNumber; /* Number that the user guesses each time */
  	var differenceNumber; /* Difference between user guess and generated number */
	 
  	/*--- Generating random number ---*/
  	gameNumber = Math.floor((Math.random() * 100) + 0);

  	/*--- Function to display feedback for user after each guess ---*/
  	function userFeedback(){
  		differenceNumber = gameNumber - guessNumber;
  		differenceNumber = Math.abs(differenceNumber);
  		if (guessNumber == gameNumber) {
  			$("#feedback").text("You Won. Click new game to play again");
  		} else if (differenceNumber < 10) {
  			$("#feedback").text("very hot");
  		} else if (differenceNumber < 20) {
  			$("#feedback").text("hot");
  		} else if (differenceNumber < 30) {
  			$("#feedback").text("warm");
  		} else if (differenceNumber < 50) {
  			$("#feedback").text("cold");
  		} else {
  			$("#feedback").text("ice cold");
  		}	
  	};

  	/*--- Function to get user input, validate if number 0-100, display feedback function and add <li> with user guess ---*/
  	function game(){
  		$("#guessButton").on("click", function(e){
  			guessNumber = $("#userGuess").val();
  			if (guessNumber <= 100) {
  				$("#guessList").append("<li>" + guessNumber + "</li>");
  				$("#userGuess").val('');
  				userFeedback();
  			} else if (guessNumber > 100) {
  				alert("Please choose a number between 0 and 100");
  			} else {
  				alert("Please choose a number");
  			}
  			e.preventDefault();
  			$("#count").text($("#guessList li").length);
  	  	});
  	};
  
  	/*--- When clicking on "new game": Clear previous game and start new game ---*/
  	function newGame(){
	  	$(".new").on("click", function(){
	  		$("#guessList li").remove();
	  		$("#count").text("0");
	  		$("#feedback").text("Make your Guess!");
	  		gameNumber = Math.floor((Math.random() * 100) + 1);
	  		console.log(gameNumber);
	  	});
	};

	/*--- Run the game and console log generated number ---*/
   	game();
   	newGame();
  	console.log(gameNumber);

});

