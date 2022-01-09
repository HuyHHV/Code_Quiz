var secondsLeft = 101; 
var index = 0;
var timeEl = document.querySelector(".time");
var startBtn = document.querySelector("#startBtn");
var questionTitle = document.querySelector("#questionTitle");
var box= document.querySelector(".box");
var listQ = document.querySelector("#listQ")
var notice= document.querySelector("#alert");
var score
var nextQ
var check
var questions = [
  {
      title: "Commonly used data type Do Not include:---",
      choices: ["strings","booleance","alerts", "numbers"],
      answer : "alerts"    
  },
  {
      title: "The condition in an if/else statement is enclosed within:---",
      choices: ["quotes","Curly brackets","parentheses", "square brackets"],
      answer : "parentheses"    
  },
  {
      title: "Arrays in JavaScript can be used to store:---",
      choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
      answer : "all of the above"    
  },
  {
      title: "String values must be enclosed within --- when being assigned to variables ",
      choices: ["commas","curly brackets","quotes","parentheses"],
      answer : "quotes"    
  },
  {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
      choices: ["JavaScript","terminal/bash","alerts", "console.log"],
      answer : "console.log"    
  },
]

// Press "start" to start the quiz

startBtn.addEventListener("click", start);

function start() {
  console.log(questions.length);
  timer();
  startBtn.style.display = "none" ;
  nextQ = questions[index];
  displayQ(nextQ);
}
// Start the timer
function timer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "time: " + secondsLeft + "s";

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}
// Display question 
function displayQ(question) {
  console.log(index);
  questionTitle.textContent = question.title
  for (var i =0; i < question.choices.length; i++){
    var button = document.createElement("button");
    button.textContent = question.choices[i];
    button.addEventListener("click",displayNextQ)
    button.classList.add("btn")
    listQ.appendChild(button);
  };  
}
// Choose correct anwser by pressing one of them -> right/wrong + penalty + 

function markingQ () {

  if (check) {
    notice.textContent = "Correct!!"
  }
  else {
    notice.textContent = "Incorrect!!"
    secondsLeft -= 10;
  }
 
}
// move to next question
function displayNextQ(e) {
  markingQ
  check = (e.target.innerText == nextQ.answer);
  index++;
  
  if (index < questions.length) {
    nextQ = questions[index];
    questionTitle.innerHTML = "";
    listQ.innerHTML = "";
    displayQ(nextQ);
  }
  else if (index >= questions.length) {
    score = secondsLeft
  }
}

