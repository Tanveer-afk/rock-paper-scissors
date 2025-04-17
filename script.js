
/*  0 : Rock 
    1 : Paper
    2 : Scissors
*/

let rounds = 1;
roundsinput();


let userscore = 0 ;
let compscore = 0;
let message = " ";


for( let i = 1 ; i<= rounds ; i++){
    let playerchoice = playerinput();
    play(playerchoice);
}

let finalscorecard = " Player Score : " + userscore + "\n Computer Score : " + compscore;


console.log(finalscorecard);
