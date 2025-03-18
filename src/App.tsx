import React from 'react'
import {computerChoice} from './rockPaperScissors.ts'

const App: React.FC = () => {
    const playGame = (userChoice: string): void => {
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
        alert(
            `U chose ${userChoice} . Computer chose ${computer}. Result is ${result}`
        );
    };

    return (
        <div>
            <p>Rock Paper Scissors</p>
            <button onClick={() => playGame('rock')}>Rock</button>
            <button onClick={() => playGame('paper')}>Paper</button>
            <button onClick={() => playGame('scissors')}>Scissors</button>
        </div>
    );
};
export default App
