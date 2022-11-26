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
        if (co === 'ROCK') return 0;
        else if (co === 'PAPER') return -1;
        else if (co === 'SCISSORS') return 1;
    }
    else if (pl === 'PAPER') {
        if (co === 'ROCK') return 1;
        else if (co === 'PAPER') return 0;
        else if (co === 'SCISSORS') return -1;
    } else if (pl === 'SCISSORS') {
        if (co === 'ROCK') return -1;
        else if (co === 'PAPER') return 1;
        else if (co === 'SCISSORS') return 0;
    } else {
        alert('Choose between Rock, Paper and Scissors: ');
        playRound();
    }
}

/*const playerSelection = 'scissors';
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));*/

function game() {
    let CoScore = 0, PlScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Choose between Rock, Paper and Scissors: ');
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
    if (CoScore > PlScore) { alert('Winner is ..... COMPUTER!!!');}
    else if (CoScore < PlScore) { alert('Winner is ..... PLAYER!!!');}
    else { alert('IT\'S A TIE!!!');}
}
game();