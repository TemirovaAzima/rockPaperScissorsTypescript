export const score = JSON.parse(localStorage.getItem('score')||'null') ||{
    tie:0,
    loses:0,
    wins:0
}
// export let score = JSON.parse(localStorage.getItem('score'))
// if(score===null) {
//     score= {
//         wins: 0,
//         loses: 0,
//         tie: 0
//     }
// }
// export const score ={
//     wins:0,
//     loses:0,
//     tie:0
// }
export function computerChoice(): string {
    const randomNumber: number= Math.random();
    let computer:string = ""

    if (randomNumber < 1 / 3) {
        computer = "Rock";
    } else if (randomNumber < 2 / 3) {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }
     return computer;
 }

export const playGame = (userChoice: string): void => {
    const computer = computerChoice();
    let result: string = '';
    if (userChoice === 'rock') {
        if (computer === 'Rock') result = 'Tie'
        else if (computer === 'Paper') result = 'U lose'
        else result = 'U win'

    } else if (userChoice === 'paper') {
        if (computer === 'Rock') result = 'U win'
        else if (computer === 'Paper') result = "Tie"
        else result = "U lose"

    } else if (userChoice === 'scissors') {
        if (computer === 'Rock') result = 'U lose'
        else if (computer === 'Paper') result = "U win"
        else result = "Tie"
    }
    // score update
    if(result === 'Tie') score.tie++
    else if (result === "U win") score.wins++
    else if(result === "U lose") score.loses++
    localStorage.setItem('score',JSON.stringify(score))
    alert(
        `U chose ${userChoice} . Computer chose ${computer}. Result is ${result}
         Wins: ${score.wins}
         Loses: ${score.loses}
         Tie: ${score.tie}
        `
    );
};