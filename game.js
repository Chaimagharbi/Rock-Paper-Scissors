function getComputerChoice() {
    let choice;
    rand = Math.floor(Math.random() * 3) + 1;
    switch(rand) {
        case 1:
            choice = 'Rock';
            break;
        case 2:
            choice = 'Paper';
            break;
        case 3: 
            choice = 'Scissors';
            break;
        default:
            getComputerChoice();
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    pl = playerSelection.toUpperCase();
    co = computerSelection.toUpperCase();
    if (pl === 'ROCK') {
        if (co === 'ROCK') return 'It\'s a tie!';
        else if (co === 'PAPER') return 'You lose! Paper beats Rock!';
        else if (co === 'SCISSORS') return 'You win! Rock beats Scissors!';
    }
    else if (pl === 'PAPER') {
        if (co === 'ROCK') return 'You win! Paper beats Rock!';
        else if (co === 'PAPER') return 'It\'s a tie!';
        else if (co === 'SCISSORS') return 'You lose! Scissors beats Paper!';
    }
    else if (pl === 'SCISSORS') {
        if (co === 'ROCK') return 'You lose! Rock beats Scissors!';
        else if (co === 'PAPER') return 'You win! Scissors beats Paper!';
        else if (co === 'SCISSORS') return 'It\'s a tie!';
    }
}

const playerSelection = 'scissors';
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));