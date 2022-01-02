var body = document.body;
var timeEl = document.querySelector(".time");
var quizList = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var secondsLeft = 60;

var q1 = {
    question: "ab_dfg",
    answer: ["c","a","d"],
} 

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "time: " + secondsLeft + "s";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
       
      }
  
    }, 1000);
}

function quiz() {

li1.textContent = q1.question;
li2.textContent = q1.answer[0];
li3.textContent = q1.answer[1];
li4.textContent = q1.answer[2];

body.appendChild(quizList);
quizList.appendChild(li1);
quizList.appendChild(li2);
quizList.appendChild(li3);
quizList.appendChild(li4);
}

function answer() {
  li2.addEventListener("click",function(){
    secondsLeft -= 10;
  })
  li2.addEventListener("click",function(){
    secondsLeft -= 10;
  })
  li2.addEventListener("click",function(){
    secondsLeft -= 10;
  })
}

setTime()
quiz();
answer()