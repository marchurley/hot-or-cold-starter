
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
	var prevDiffNumb; /* Difference between user guess and generated number from previous guess */
	var numberOfGuesses = 0; /* How many times did the user guess */
	var guessArray = []; /* Array with all the guessed numbers to check double entries */

  	/*--- Generating random number ---*/
  	gameNumber = Math.floor((Math.random() * 100) + 0);

  	/*--- Function to display feedback for user after each guess ---*/
  	function userFeedback(){
  		differenceNumber = gameNumber - guessNumber;
  		differenceNumber = Math.abs(differenceNumber);
	  	if (numberOfGuesses == 0) {	
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
	  	} else {
	  		if (guessNumber == gameNumber) {
	  			$("#feedback").text("You Won. Click new game to play again");
	  		} else if (differenceNumber < prevDiffNumb && differenceNumber < 10) {
	  			$("#feedback").text("it is getting very hot");
			} else if (differenceNumber < prevDiffNumb && differenceNumber < 20) {
	  			$("#feedback").text("it is getting hot");
			} else if (differenceNumber < prevDiffNumb) {
				$("#feedback").text("it is getting warmer");
	  		} else if (differenceNumber > prevDiffNumb) {
	  			$("#feedback").text("it is getting colder");
	  		} 
	  	}	
  	};

  	/*--- Function to get user input, validate if number 0-100, display feedback function and add <li> with user guess ---*/
  	function game(){
  		$("#guessButton").on("click", function(e){
  			guessNumber = parseInt(($("#userGuess").val()), 10);
  			if (guessArray.indexOf(guessNumber) >= 0) {
  				alert ("You already guessed that number");
  			} else if (guessNumber <= 100 && guessNumber === parseInt(guessNumber, 10)){
  				$("#guessList").append("<li>" + guessNumber + "</li>");
  				$("#userGuess").val('');
  				userFeedback();
  				numberOfGuesses = numberOfGuesses +1;
  				guessArray.push(guessNumber);
  			} else if (guessNumber > 100) {
  				alert("Please choose a number between 0 and 100");
  			} else {
  				alert("Please choose a number");
  			}
  			e.preventDefault();
  			prevDiffNumb = differenceNumber;
  			$("#count").text(numberOfGuesses);
  		});
  	};
  
  	/*--- When clicking on "new game": Clear previous game and start new game ---*/
  	function newGame(){
	  	$(".new").on("click", function(){
	  		$("#guessList li").remove();
	  		$("#count").text("0");
	  		$("#feedback").text("Make your Guess!");
	  		guessArray = [];
	  		prevDiffNumb = 0;
	  		numberOfGuesses = 0;
	  		gameNumber = Math.floor((Math.random() * 100) + 1);
	  		console.log(gameNumber);
	  	});
	};

	/*--- Run the game and console log generated number ---*/
   	game();
   	newGame();
  	console.log(gameNumber);

});

