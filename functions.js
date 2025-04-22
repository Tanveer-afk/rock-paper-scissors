function getComputerChoice() {
  let choice = Math.random();
  choice = choice * 3;
  return Math.floor(choice);
}

function roundsinput() {
  rounds = prompt("Enter numnber of rounds : ");
  rounds = parseInt(rounds);
  while (Number.isInteger(rounds) == false) {
    alert("Please enter a valid Integer. ");
    rounds = prompt("Enter numnber of rounds : ");
    rounds = parseInt(rounds);
  }

}

function input() {

  let input = prompt("Enter your choice (rock/paper/scissors):").toLowerCase().trim();
  let inputvalue = null;

  while (inputvalue === null) {


    if (input === "rock") {
      inputvalue = 0;
    } else if (input === "paper") {
      inputvalue = 1;
    } else if (input === "scissors") {
      inputvalue = 2;
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      input = prompt("Enter your choice (rock/paper/scissors):").toLowerCase().trim();
    }
  }

  return inputvalue;
}




function play(user) {
  let comp = getComputerChoice();

  if ((user == 0 && comp == 2) || (user == 1 && comp == 0) || (user == 2 && comp == 1)) {
    userscore++;
    message = " You win! :)"
  }

  else if ((comp == 0 && user == 2) || (comp == 1 && user == 0) || (comp == 2 && user == 1)) {
    compscore++;
    message = " You Lost :("
  }

  else {
    message = " Its a tie !"
  }
  console.log(message);

}