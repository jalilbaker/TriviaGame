$('#start').on('click',function(){
	game.start();
});
$(document).on("click", "#end", function() {
	game.done();
  });
var questions = [{
	question: "Who is StrawHat Luffy",
	answers: ["Pirate", "Sniper", "Coward", "Jerk"],
	correctAnswer: "Pirate",
  }, {
	question: "What are the Strawhat's after?",
	answers: ["Fame","The One Piece","Gold","Pluton"],
	correctAnswer: "The One Piece"
  }, {
	question: "How hard was this homework?",
	answers: ["Meh", "No too bad", "I pulled my hair", "404 error"],
	correctAnswer: "I pulled my hair"
  }];

  var game = {
	  correct: 0,
	  incorrect:0,
	  counter: 120,
	  countdown: function (){
		  game.counter--;
		  $('#counter').html(game.counter);
		  if(game.counter<=0){
			  console.log("Times Up Gameover");
			  game.done();
		  }
	  },
	  start: function(){
		  timer = setInterval(game.countdown, 1000);
		  $('#sub-wrapper').prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
		$('#start').remove();
	for (var i = 0; i < questions.length; i++){
		$('#sub-wrapper').append('<h2>' + questions[i].question + '<h2>');
		for (var j =0; j< questions[i].answers.length; j++){
			$("#sub-wrapper").append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
		}
	}
	$('#sub-wrapper').append("</br><button id='done'>Done</button>");
	  },
	  done: function(){
		  $.each($('#input[name="question 0]":checked'), function(){
			  if($(this).val()==questions[0].correctAnswer){
				  game.correct++;
			  }else{
				  game.incorrect++;
			  }
		  });
		  $.each($('#input[name="question 1]":checked'), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			}else{
				game.incorrect++;
			}
		});
		$.each($('#input[name="question 2]":checked'), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			}else{
				game.incorrect++;
			}
		});
		this.result();
  }, result: function(){
		clearInterval(timer);
		$('#sub-wrapper h2').remove();
		$('#sub-wrapper').html("<h2>All Done!</h2>");
		$('#sub-wrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
		$('#sub-wrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		$('#sub-wrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }

  }







// declare all variables.s
/*var time = 30;
var startScreen;
var gameHTML;
var questions = ["Who is StrawHat Luffy", "What are the Strawhat's after?", "How hard was this homework?"];
var answerArray = [["Prirate", "Sniper", "Coward", "Jerk"], ["Fame","The One Piece","Gold","Pluton"], ["Meh", "No too bad", "I pulled my hair", "404 error"]];
var imageArray = ["<img class='center-block img-right' src='img/australia.png'>", "<img class='center-block img-right' src='img/liberia.png'>", "<img class='center-block img-right' src='img/taiwan.png'>", "<img class='center-block img-right' src='img/japan.png'>", "<img class='center-block img-right' src='img/china.png'>", "<img class='center-block img-right' src='img/turkey.png'>", "<img class='center-block img-right' src='img/colombia.png'>", "<img class='center-block img-right' src='img/india.png'>"];
var correctAnswers = ["A. Prirate", "B. The One Piece", "C. I pulled my hair",];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;*/

/*$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer
	clickSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}		*/