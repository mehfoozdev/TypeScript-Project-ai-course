// Quiz System
// The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.
//Django simple quiz
import inquirer from "inquirer";
import chalk from "chalk";
console.log("-------- Pakistan Studies ----------\n");
console.log("There are 10 Questions in this Quiz.\n");
console.log('------------------------------------');
let attemptAns = await inquirer.prompt([
    {
        name: "attempt",
        message: "Are You Want to Attempt this Quiz: ",
        type: "list",
        choices: ["Yes", "No"]
    }
]);
// When attempt is yes
if (attemptAns.attempt === "Yes") {
    let totalMarks = 100;
    let obtainedMarks = 0;
    let correctAnswer = 0;
    let totalQuestions = 10;
    // Question 1
    let answer1 = await inquirer.prompt([
        {
            name: "q1",
            message: chalk.yellowBright.bold("Who is the founder of Pakistan ?"),
            type: "list",
            choices: ["A. Quaid-e-Azam Muhammad Ali Jinnah", "B. Allama Iqbal", "C. Liaquat Ali Khan", "D. Sir Syed Ahmed Khan"]
        }
    ]);
    if (answer1.q1 === "A. Quaid-e-Azam Muhammad Ali Jinnah") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 2
    let answer2 = await inquirer.prompt([
        {
            name: "q2",
            message: chalk.yellowBright.bold("What is the national language of Pakistan ?"),
            type: "list",
            choices: ["A. Urdu", "B. English", "C. Punjabi", "D. Sindhi"]
        }
    ]);
    if (answer2.q2 === "A. Urdu") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    console.log(chalk.greenBright.bold('-------------- Here is your result ----------'));
    console.log(chalk.greenBright.bold(`Congratulations, You got ${obtainedMarks} Marks out of ${totalMarks}`));
    console.log(chalk.greenBright.bold(`You gave ${correctAnswer} correct answer and ${totalQuestions - correctAnswer} wrong answer`));
    console.log(chalk.greenBright.bold('---------------------------------------------'));
    // End
    // When attempt is No
}
else if (attemptAns.attempt === "No") {
    console.log("User don't want to attemp quiz rightnow, try later !");
}
;
