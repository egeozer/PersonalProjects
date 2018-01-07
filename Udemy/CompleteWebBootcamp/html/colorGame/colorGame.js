
var squares = [];
var newColorsBtn = document.querySelector("#idNewColors");
var easyBtn = document.querySelector("#idEasyBtn");
var hardBtn = document.querySelector("#idHardBtn");
var veryHardBtn = document.querySelector("#idVeryHardBtn");
var container = document.querySelector("#idContainer");

createSquares(6);
squares.forEach((square) => {
  square.style.backgroundColor = generateRandomColor();
  square.addEventListener("click", generateColors);
});
var randomNumber = Math.floor(Math.random()*squares.length);
var pickedColor = squares[randomNumber].style.backgroundColor;
document.querySelector("#idColor").textContent = pickedColor;

newColorsBtn.addEventListener("click", newColors);
easyBtn.addEventListener("click", easy);
hardBtn.addEventListener("click", hard);
veryHardBtn.addEventListener("click", veryHard);

function generateRandomColor(){
  var redCode = Math.floor(Math.random()*255)+1;
  var greenCode = Math.floor(Math.random()*255)+1;
  var blueCode = Math.floor(Math.random()*255)+1;
  
  return color = "rgb("+  redCode + ", " + greenCode + ", "+blueCode + ")";
}

function generateColors(){
  var clickedColor = this.style.backgroundColor;
  
  if(pickedColor === clickedColor){
    generateSameColor();
    document.querySelector("h2").style.backgroundColor = pickedColor;
    document.querySelector("#idStatus").textContent = "You guessed it!"
  }
  else{
    this.style.backgroundColor = "#232323";
  }
}

function generateSameColor(){
  squares.forEach((square) => {
    square.style.backgroundColor = pickedColor;
  });
}

function newColors(){
  squares.forEach((square) => {
    square.style.backgroundColor = generateRandomColor();
  });
  randomNumber = Math.floor(Math.random()*squares.length);
  pickedColor = squares[randomNumber].style.backgroundColor;
  document.querySelector("#idColor").textContent = pickedColor;
  newGame();
}

function easy(){
  setGameDifficulty(3);
  easyBtn.classList.add("selected");
}

function hard(){
  setGameDifficulty(6);
  hardBtn.classList.add("selected");
}

function veryHard(){
  setGameDifficulty(12);
  veryHardBtn.classList.add("selected");
}

function createSquares(numberOfSquares){
  for (let index = 0; index < numberOfSquares; index++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add("square");
    container.appendChild(newDiv); 
  }
  squares = document.querySelectorAll(".square");
}

function setGameDifficulty(numberOfSquares){
  document.querySelector(".selected").classList.remove("selected");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createSquares(numberOfSquares);
  squares.forEach((square) => {
    square.style.backgroundColor = generateRandomColor();
    square.addEventListener("click", generateColors);
  });
  newColors();
  newGame();
}

function newGame(){
  document.querySelector("h2").style.backgroundColor = "steelBlue";
  document.querySelector("#idStatus").textContent = "What Color is it?";
}
