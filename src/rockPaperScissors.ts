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
