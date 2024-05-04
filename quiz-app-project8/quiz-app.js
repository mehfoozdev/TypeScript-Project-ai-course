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
    let answer1 = await inquirer.prompt({
        name: "q1",
        message: chalk.yellowBright.bold("Who is the founder of Pakistan ?"),
        type: "list",
        choices: ["A. Quaid-e-Azam Muhammad Ali Jinnah", "B. Allama Iqbal", "C. Liaquat Ali Khan", "D. Sir Syed Ahmed Khan"]
    });
    if (answer1.q1 === "A. Quaid-e-Azam Muhammad Ali Jinnah") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 2
    let answer2 = await inquirer.prompt({
        name: "q2",
        message: chalk.yellowBright.bold("What is the national language of Pakistan ?"),
        type: "list",
        choices: ["A. Urdu", "B. English", "C. Punjabi", "D. Sindhi"]
    });
    if (answer2.q2 === "A. Urdu") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 3
    let answer3 = await inquirer.prompt({
        name: "q3",
        message: chalk.yellowBright.bold("Which city is known as the City of Gardens in Pakistan?"),
        type: "list",
        choices: ["A. Lahore", "B. Islamabad", "C. Karachi", "D. Peshawar"]
    });
    if (answer3.q3 === "A. Lahore") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 4
    let answer4 = await inquirer.prompt({
        name: "q4",
        message: chalk.yellowBright.bold("Who wrote the National Anthem of Pakistan?"),
        type: "list",
        choices: ["A. Allama Iqbal", "B. Hafeez Jullundhri", "C. Faiz Ahmed Faiz"]
    });
    if (answer4.q4 === "B. Hafeez Jullundhri") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 5
    let answer5 = await inquirer.prompt({
        name: "q5",
        message: chalk.yellowBright.bold("When did Pakistan become a nuclear power ?"),
        type: "list",
        choices: ["A. 1974", "B. 1988", "C. 1998", "D. 2003"]
    });
    if (answer5.q5 === "C. 1998") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 6
    let answer6 = await inquirer.prompt({
        name: "q6",
        message: chalk.yellowBright.bold("Which mountain range is located in the north of Pakistan?"),
        type: "list",
        choices: ["A. Himalayas", "B. Karakoram", "C. Hindu Kush"]
    });
    if (answer6.q6 === "B. Karakoram") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 7
    let answer7 = await inquirer.prompt({
        name: "q7",
        message: chalk.yellowBright.bold("What is the currency of Pakistan?"),
        type: "list",
        choices: ["A. Rupee", "B. Taka", "C. Dollar", "D. Rial"]
    });
    if (answer7.q7 === "A. Rupee") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 8
    let answer8 = await inquirer.prompt({
        name: "q8",
        message: chalk.yellowBright.bold("Which river is known as the lifeline of Pakistan?"),
        type: "list",
        choices: ["A. Indus", "B. Jhelum", "C. Ravi", "D. Sutlej"]
    });
    if (answer8.q8 === "A. Indus") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 9
    let answer9 = await inquirer.prompt({
        name: "q9",
        message: chalk.yellowBright.bold("Who was the first Prime Minister of Pakistan?"),
        type: "list",
        choices: ["A. Liaquat Ali Khan", "B. Zulfikar Ali Bhutto"]
    });
    if (answer9.q9 === "A. Liaquat Ali Khan") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    // Question 10
    let answer10 = await inquirer.prompt({
        name: "q10",
        message: chalk.yellowBright.bold("When was the independence of Pakistan declared?"),
        type: "list",
        choices: ["A. August 14, 1947", "B. August 15, 1947", "C. July 4, 1948"]
    });
    if (answer10.q10 === "A. August 14, 1947") {
        obtainedMarks += 10;
        correctAnswer += 1;
        console.log(chalk.greenBright.bold("Correct Answer! \n"));
    }
    else {
        console.log(chalk.redBright.bold("Wrong Answer!\n"));
    }
    console.log(chalk.yellowBright.bold('-------------- Here is your result ----------'));
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
