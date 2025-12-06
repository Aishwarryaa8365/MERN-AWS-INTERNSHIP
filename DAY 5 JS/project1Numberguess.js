// 1 We need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Rnadom Number betwenn 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// 2.1 creat a varible of score
let scr = 20;

// Button Functionalities
// 1.event  that we want to occur 2. Callback
checkBtn.addEventListener("click", () => {
  let inputVal = Number(guess.value);
  //no input
  if (!inputVal) {
    alert("Please enter a number");
    msg.textContent = "No Number";
  }
  // 3.1 Input value is equal to random number
  if (inputVal === randomNumber) {
    // 3.1.1 Change the background to green
    document.body.style.backgroundColor = "green";
    // 3.1.2 Instaed of ? put the random Value
    number.textContent = randomNumber;
    //  3.1.3 At highscore we have to put value of score
    if (scr > Number(highScore.textContent)) {
      highScore.textContent = scr;
    }

    // 3.3.2 Show message "Correct Value"
    msg.textContent = "Correct Value";
  } else if (inputVal > randomNumber) {
    // 3.2 if input is greater than random number
    // 3.2.1 Decrease score by 1
    scr -= 1;
    score.textContent = scr;
    // 3.2.2 Show message "Too High"
    msg.textContent = "Too High";
  } else if (inputVal > 0 && inputVal < randomNumber) {
    // 3.2 if input is less than random number
    // 3.2.1 Decrease score by 1
    scr -= 1;
    score.textContent = scr;
    // 3.2.2 Show message "Too Low"
    msg.textContent = "Too Low";
  }
});

// 4.Again Button Function
let init = () => {
  // 4.1 Reset all values to initial value
  scr = 20;
  score.textContent = scr;
  number.textContent = "?";
  guess.value = "";
  msg.textContent = "Start gussing...";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
};
againBtn.addEventListener("click", init);
