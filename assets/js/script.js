var secondsLeft = 60; 
var index = 0;
var timeEl = document.querySelector(".time");
var startBtn = document.querySelector("#startBtn");
var questionTitle = document.querySelector("#questionTitle");
var box= document.querySelector(".box");
var listQ = document.querySelector("#listQ")
var notice= document.querySelector("#alert");
var nameInput = document.querySelector("#name")
var addscore = document.querySelector("#addscore")
var btnScore = document.querySelector("#btnScore")
var score
var nextQ
var check
var scoreHistory = []
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
  // Get stored todos from localStorage
  var storedScore = JSON.parse(localStorage.getItem("scoreHistory"));
  // If todos were retrieved from localStorage, update the todos array to it
  if (storedScore !== null) {
    scoreHistory = storedScore;
  }
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
      index = questions.length + 1 
      clearInterval(timerInterval);
      notice.textContent = "Game Over!!"
      box.classList.add("d-none");
      timeEl.classList.add("d-none");
      score = 0
      gameOver()
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
    button.className=("btn btn-primary mb-4 btn-block")
    listQ.appendChild(button);
  };  
}
// Choose correct anwser by pressing one of them -> right/wrong + penalty + 

function markingQ (check) {

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
  check = (e.target.innerText == nextQ.answer);
  markingQ (check)
  index++;
  
  if (index < questions.length) {
    nextQ = questions[index];
    questionTitle.innerHTML = "";
    listQ.innerHTML = "";
    displayQ(nextQ);
  }
  else if (index >= questions.length) {
    score = secondsLeft
    gameOver()
  }
}

// Ask user name

function gameOver (){
  addscore.classList.remove("d-none");
  box.classList.add("d-none");
  timeEl.classList.add("d-none");
  btnScore.addEventListener("click",submit);
}

// submit user name + score and redirect to scoreboard
function submit(e) {
  e.preventDefault();
  var inforQ = {
    userName : nameInput.value.trim(),
    lastScore : score,
  }
  console.log(inforQ);
  scoreHistory.push(inforQ)
  localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
  window.location = "scoreboard.html";
}
