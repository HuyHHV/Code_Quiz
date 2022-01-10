var record = document.querySelector("#record")
var score = JSON.parse(localStorage.getItem("scoreHistory"))
var quizBtn = document.querySelector("#quizBtn")
var sorted = [];


for (var i =0; i < score.length; i++){
    var li = document.createElement("li");
    li.textContent = score[i].userName + "-" + score[i].lastScore;
    record.appendChild(li);
};  

quizBtn.addEventListener("click",function() {
  window.location = "index.html";
 })