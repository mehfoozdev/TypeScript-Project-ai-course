// Word Counter
// userInput string will split and trim

import inquirer from "inquirer";
import chalk from "chalk";


let condition : boolean = true;

while (condition) {
    
    const userAnswer: {Sentence: string} = await inquirer.prompt(
        [
            {
                name: "Sentence",
                message: "\nEnter any string : ",
                type: "input",
            },
        ]
    );

    // console.log(userAnswer.Scentence.split(" "))
    

    const words = userAnswer.Sentence.trim().split(" ");
    // .trim(): This is a string method in JavaScript that removes whitespace from both ends of a string. 

    // .split(" "): This is another string method that splits a string into an array of substrings based 
    // on a specified separator. In this case, the separator is a space (" "), so the string is split into
    // an array of words based on spaces.It will split the string wherever it encounters a space.
    

    // Print the words
    console.log("\nYour Words: " + chalk.bgBlue.bold(words));
    
    // Print the words count of the text to the console
    console.log("\nTotal Words in your given input : ",chalk.bgBlue.bold(" "+words.length+" "));
    

    // Continue or not
    let askAnswer = await inquirer.prompt([{
        name: "answer",
        message: chalk.black.bgYellowBright.underline.bold("\nDo you want continue ? "),
        default: 'false',
        type: "confirm"

    }]);

    condition = askAnswer.answer

} 

