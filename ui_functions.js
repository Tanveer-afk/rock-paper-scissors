function playerinput(callback) {
    let actionvalue = null;
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const result = document.querySelector('.result');
    const playerscore = document.querySelector('.yourscorenum');
    const computerscore = document.querySelector('.compscoreval')

    rock.addEventListener('click', () => {
        actionvalue = 0;
        callback(actionvalue);
        playround(actionvalue);
        result.textContent = message;
        playerscore.textContent = userscore;
        computerscore.textContent = compscore;

    })

    paper.addEventListener('click', () => {
        actionvalue = 1;
        callback(actionvalue);
        playround(actionvalue);
        result.textContent = message;
        playerscore.textContent = userscore;
        computerscore.textContent = compscore;
    })

    scissors.addEventListener('click', () => {
        actionvalue = 2;
        callback(actionvalue);
        playround(actionvalue);
        result.textContent = message;
        playerscore.textContent = userscore;
        computerscore.textContent = compscore;
    })





}

function computerchoice() {
    let val = Math.random() * 2;
    val = Math.round(val);
    return val;
}


function playround(playeraction) {
    let computeractions = computerchoice();

    if ((playeraction == 0 && computeractions == 2) || (playeraction == 1 && computeractions == 0) || (playeraction == 2 && computeractions == 1)) {
        userscore++;
        message = " You win! :)"
    }

    else if ((computeractions == 0 && playeraction == 2) || (computeractions == 1 && playeraction == 0) || (computeractions == 2 && playeraction == 1)) {
        compscore++;
        message = " You Lost :("
    }

    else {
        message = " Its a tie "
    }
    console.log(message);

}