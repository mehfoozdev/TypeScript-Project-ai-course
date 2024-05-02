#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
const currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.76,
    CAD: 1.25,
    AUD: 1.32,
    NZD: 1.44,
    AED: 3.67,
    SAR: 3.75,
    CNY: 6.40,
    TRY: 13.5,
    INR: 75.50,
    PKR: 278.12 // 1 USD = 277.54 PKR        Pakistani Rupee
};
while (condition) {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: chalk.black.bgYellowBright.underline.bold("\nEnter From Currency:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"]
        },
        {
            name: "to",
            message: chalk.black.bgYellowBright.underline.bold("\nEnter To Currency:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"]
        },
        {
            name: "amount",
            message: chalk.black.bgCyanBright.underline.bold("\nEnter Your Amount:"),
            type: "number"
        }
    ]);
    // storing the currency of a "from" input in a variable
    let fromAmount = currency[userAnswer.from]; // Dynamic Approach
    // storing the currency of a "to" input in a variable
    let toAmount = currency[userAnswer.to];
    // storing the amount of a user input in a variable
    let amount = userAnswer.amount;
    // converting the amount in a USD because USD is our "Base Currency" 
    let baseAmount = amount / fromAmount;
    // converting in desired currency by just multiplying the "calculated USD (baseAmount)" with desired currency
    let convertAmount = baseAmount * toAmount;
    console.log(`${userAnswer.amount} ${userAnswer.from} to ${userAnswer.to} is: ${parseFloat(convertAmount.toFixed(2))}`);
    // Continue or not
    let askAnswer = await inquirer.prompt([{
            name: "answer",
            message: chalk.black.bgYellowBright.underline.bold("\nDo you want continue ? "),
            default: 'false',
            type: "confirm"
        }]);
    condition = askAnswer.answer;
}
