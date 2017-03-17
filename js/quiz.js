// create 3 questions using a two-dimensional array
// loop through the questions array
// keep track of answers that are both correct and incorrect
// print the results of answers (correct and incorrect) to the page in a list


// two-dimensional array of question/answer pairs
var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

// variable to track correct answers
var correctAnswers = 0;

// variables created to store information later in the program
var question;
var answer;
var response;
var html;

// when a question is answered correctly, push that info here
var correct = [];
var wrong = [];

function print(message){
  // places message in 'output' div
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// function to display results in a list on the page
function buildList(arr) {
  var listHTML = '<ol>';
  // us a for loop to go through correct and wrong arrays
  for (var i = 0; i < arr.length; i++){
    listHTML += '<li>' + arr[i] + '</li>';
    listHTML += '</ol>';
    return listHTML;
  }
}


// loop through questions array: ask a question, see if answer matches, increment correctAnswers if it does.
for (var i = 0; i < questions.length; i++){
  // pull info from the array and store it in a variable...
  //because array is 2D: first access an element from the outer array, then access the question using the 0 index.
  question = questions[i][0];
  // then access the answer through index 1.
  answer = questions[i][1];
  // store the user response in the response variable
  response = parseInt(prompt(question));// because working with numbers, parseInt converts the user's answer (string) to number

  // does response match the answer?
  if (response === answer){
    correctAnswers++;
    correct.push(question); // pushes correct answer to designated array
  } else {
    wrong.push(question);
  }
}

// create a message to the screen
html = "You got " + correctAnswers + " question(s) correct!"
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);

  
