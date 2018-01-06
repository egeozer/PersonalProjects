var firstPScore = 0;
var secondPScore = 0;

var limitScore = document.querySelector("#idLimit").textContent;
var firstScoreDisplay = document.querySelector("#idFirst");
var secondScoreDisplay = document.querySelector("#idSecond");
var inputTextDisplay = document.querySelector("#idSetLimit");
var gameOver = false;

function playerOne(){
  if(!gameOver){
    firstPScore++;
    firstScoreDisplay.textContent=firstPScore;
    console.log(limitScore)
    if(firstPScore == limitScore){
      gameOver = true;
      document.querySelector("#idStatus").textContent = "Player One Wins!"
    }
  }
}
function playerTwo(){
  if(!gameOver){
    secondPScore++;
    secondScoreDisplay.textContent=secondPScore;
    if(secondPScore == limitScore){
      gameOver = true;
      document.querySelector("#idStatus").textContent = "Player Two Wins!"
    }
  }
}
function typing(){
  document.querySelector("#idLimit").textContent=inputTextDisplay.value;
  limitScore = document.querySelector("#idLimit").textContent;
}
function reset(){
  document.querySelector("#idStatus").textContent = "Good Game!"
  gameOver=false;
  firstPScore=0;
  secondPScore=0;

  document.querySelector("#idFirst").textContent = "0";
  document.querySelector("#idSecond").textContent = "0";
  document.querySelector("#idSetLimit").textContent = "0";
  document.querySelector("#idSetLimit").textContent = "5";
  

}
