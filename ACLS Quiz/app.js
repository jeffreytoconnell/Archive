$(document).ready(function () {
	startQuiz();
});

var questions = [{
		title: "What is the max dose of Amiodarone?",
		choices: ["300", "150", "600", "450"],
		correctAnswer: "450",
	},
	{
		title: "What is the initial dose of Adenosine?",
		choices: ["6mg", "8mg", "3mg", "12mg"],
		correctAnswer: "6mg"
	},
	{
		title: "Atropine is what class of drug?",
		choices: ["Antiarrhythmic", "Anticholinergic", "Sympathomimetic", "Parasympathomimetic"],
		correctAnswer: "Anticholinergic"
	},
	{
		title: "Unstable SVT requires which intervention?",
		choices: ["Synchronized Cardioversion", "TCP", "Defibrillation", "Vagal Maneuver"],
		correctAnswer: "Synchronized Cardioversion"
	},
	{
		title: "3rd Degree HB is treated best with:",
		choices: ["Atropine", "TCP", "Synchronized Cardioversion", "IV Epinephrine"],
		correctAnswer: "TCP"
	},
];

function startQuiz() {
	var counter = 0,
		total_points = 0,
		number_of_questions = questions.length,
		current_question;

	function updateScore() {
		$(".total_points").text(total_points);
	}

	function presentQuestion(question) {
		$("h2").text(question.title);
		$("ul").empty();
		for (var index = 0; index < question.choices.length; index = index + 1) {
			$("ul").append("<li>" + question.choices[index] + "</li>")
		}
		current_question = question;
	}

	// 1. SHOW FIRST QUESTION
	presentQuestion(questions[counter]);
	updateScore();

	// 2. PLAYER CHOOSES ANSWER
	$("ul").on("click", "li", chooseAnswer);

	function chooseAnswer() {
		var text = $(this).text();
		checkAnswer(text);
	}

	// 3. CHECK IF CORRECT
	function checkAnswer(text) {
		// CORRECT ANSWER UPDATE SCORE
		if (text === current_question.correctAnswer) {
			console.log('Correct!');
			total_points = total_points + 1;
			updateScore();
		}
		// WRONG ANSWER
		else {
			console.log('Wrong!');
		}
		// ASK NEXT QUESTION
		askNextQuestion();
	}
	// 4. ASK NEXT QUESTION
	function askNextQuestion() {
		counter = counter + 1;
		// 4. More Questions?
		if (counter < number_of_questions) {
			// SHOW NEXT QUESTION (STEP 1)
			presentQuestion(questions[counter]);
		}
		// NO QUESTIONS LEFT
		else {
			var confirmation = confirm('You got ' + total_points + ' correct. Want to try again?');
			if (confirmation) {
				counter = 0;
				total_points = 0;
				updateScore();
				presentQuestion(questions[counter]);
			}
		}
	}
};