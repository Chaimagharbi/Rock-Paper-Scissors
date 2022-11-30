function getComputerChoice() {
  let choice;
  rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
    default:
      getComputerChoice();
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  pl = playerSelection.toUpperCase();
  co = computerSelection.toUpperCase();
  if (pl === "ROCK") {
    if (co === "ROCK") return "It's a tie!";
    else if (co === "PAPER") return "You lose!";
    else if (co === "SCISSORS") return "You win!";
  } else if (pl === "PAPER") {
    if (co === "ROCK") return "You win!";
    else if (co === "PAPER") return "It's a tie!";
    else if (co === "SCISSORS") return "You lose!";
  } else if (pl === "SCISSORS") {
    if (co === "ROCK") return "You lose!";
    else if (co === "PAPER") return "You win!";
    else if (co === "SCISSORS") return "It's a tie!";
  } else {
    alert("Choose between Rock, Paper and Scissors: ");
    playRound();
  }
}
const buttons = document.querySelectorAll("button");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const container = document.querySelector(".container");
let para = document.createElement("p");
let CoScore = 0,
  PlScore = 0,
  done = 0;
buttons.forEach((button) => {
  //console.log(button);
  button.addEventListener("click", (e) => {
    let para = document.createElement("p");
    /*console.log(e);
    console.log(e.type);*/
    para.textContent = playRound(button.textContent, getComputerChoice());
    if (para.textContent === "You lose!") CoScore++;
    else if (para.textContent === "You win!") PlScore++;
    para.innerText += `\nComputer ${CoScore}: ${PlScore} Player`;
    if (CoScore === 5) {
      para.innerText += `\n****WINNER IS:**** \nCOMPUTER`;
    } else if (PlScore === 5) {
      para.innerText += `\n****WINNER IS:**** \nPLAYER`;
    }
    container.appendChild(para);
  });
});

/*function game() {
  let CoScore = 0,
    PlScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose between Rock, Paper and Scissors: ");
    const computerSelection = getComputerChoice();
    let score = playRound(playerSelection, computerSelection);
    switch (score) {
      case 1:
        PlScore += 1;
        break;
      case -1:
        CoScore += 1;
        break;
      default:
        break;
    }
    alert(`Computer ${CoScore}:${PlScore} Player`);
  }
  if (CoScore > PlScore) {
    alert("Winner is ..... COMPUTER!!!");
  } else if (CoScore < PlScore) {
    alert("Winner is ..... PLAYER!!!");
  } else {
    alert("IT'S A TIE!!!");
  }
}
game();*/
