import inquirer from "inquirer"

const answers = await inquirer.prompt([
    {
        "message" : "Enter first number : ",
        "type" : "number",
        "name" : "num1"
    },
    {
        "message" : "Enter second number : ",
        "type" : "number",
        "name" : "num2"
    },
    {
        "message" : "Select an operator to perform calculations",
        "type" : "list",
        "name" : "operator",
        "choices" : ["Addition", "Subtraction", "Multiplication", "Division"]
    }
])


if (answers.operator === "Addition"){
    let sum_of_two_number:number = answers.num1 + answers.num2
    console.log("Sum of two number is : ", sum_of_two_number)
}

else if (answers.operator === "Subtraction"){
    let subtraction_of_two_number:number = answers.num1 - answers.num2
    console.log("Subtraction of two number is : ", subtraction_of_two_number)
}

else if (answers.operator === "Multiplication"){
    let multiple_of_two_number:number = answers.num1 * answers.num2
    console.log("Multiplication of two number is : ", multiple_of_two_number)
}

else if (answers.operator === "Division"){
    let division_of_two_number:number = answers.num1 / answers.num2
    console.log("Division of two number is : ", division_of_two_number)
}