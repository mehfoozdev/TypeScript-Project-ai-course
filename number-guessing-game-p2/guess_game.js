import inquirer from "inquirer";
// 1) Computer will generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// Math.random()  generate values b/w 0 to 1 (e.g 0.8, 0.9 etc)
// Math.floor()   round off the floating values (e.g 1.7 round off to 2, 1.3 round off to 1)
// * 6  it gives a number between 0 to 6 
// + 1  if we dont want 0 in number so we add 1 with 6 so it will gives numbers between 1-6
const answer = await inquirer.prompt([
    {
        name: "user_guess_number",
        type: "number",
        message: "Please Guess a Number between 1-6: ",
    },
]);
if (answer.user_guess_number === randomNumber) {
    console.log("Congratulations! You Guessed the correct number ! 😃");
}
else {
    console.log("You Guessed the wrong number ! 😟");
}
console.log('Computer Generate number is : ', randomNumber);
