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

alert(getComputerChoice());