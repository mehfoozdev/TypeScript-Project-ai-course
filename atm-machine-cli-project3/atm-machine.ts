// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.

// ATM-Machine project => it will check and verify using PIN-CODE-PASSWORD.
// as per pincode account => Will display Name & Account Type
// It will deduct from balance. 
// It will have three options (
            // 1) Withdraw
            // 2) Fast Cash (ex: 1000, 3000, 5000, 10000, 15000, 20000)
            // 3) Check Balance)


import inquirer from "inquirer"

const myPinCode:number = 1022
let myBalance:number = 75000
let myName:string = "Mehfooz Ali"
let accountType:string = "Current"

console.log('\n--------------------------------------------')
console.log('------------- 🎰 ATM MACHINE -----------------')
console.log('----------------------------------------------\n')

let userPin = await inquirer.prompt({
        "message" : "Enter your pin code : ",
        "type" : "number",
        "name" : "pin"
    })

if (userPin.pin === myPinCode){
    console.log(`Welcome, 🤵 Mr. ${myName}  |  Account Type : ${accountType} \n`)

    let perform_operations = await inquirer.prompt([
        {
            "message" : "Select an option : ",
            "type" : "list",
            "name" : "operation",
            "choices" : ["Widthdraw", "Fast Cash", "Check Balance"]
        }
    ])

    // Perform Withdraw
    if (perform_operations.operation === "Widthdraw"){
        // console.log('Withdraw')

        let withdraw_amount = await inquirer.prompt({
            "message" : "Enter widthraw amount : ",
            "type" : "number",
            "name" : "withdraw"
        })

        if (withdraw_amount.withdraw > myBalance){
            console.log('Sorry, Insufficient Balance 😐 !')
        }

        else if (withdraw_amount.withdraw <= myBalance){
            myBalance -= withdraw_amount.withdraw
            console.log(`Your Remaining Balance is: PKR ${myBalance} 💸 !`);
        }

        else {
            console.log('Error, Please try again later ! 🙃 ')
        }

    }

    // Perform Fast Cash
    else if (perform_operations.operation === "Fast Cash"){
        
        let fast_cash_operation = await inquirer.prompt([{
            "message" : "Select an option : ",
            "type" : "list",
            "name" : "operation",
            "choices" : [1000, 3000, 5000, 10000, 15000, 20000]
        }])

        if (fast_cash_operation.operation === 1000){
            myBalance -= 1000
            console.log(`Your Remaining Balance is: PKR ${myBalance}💸 !`);
        }

        else if (fast_cash_operation.operation === 3000){
            myBalance -= 3000
            console.log(`Your Remaining Balance is: PKR ${myBalance}💸 !`);
        }

        else if (fast_cash_operation.operation === 5000){
            myBalance -= 5000
            console.log(`Your Remaining Balance is: PKR ${myBalance}💸 !`);
        }

        else if (fast_cash_operation.operation === 10000){
            myBalance -= 10000
            console.log(`Your Remaining Balance is: PKR ${myBalance}💸 !`);
        }

        else if (fast_cash_operation.operation === 15000){
            myBalance -= 15000
            console.log(`Your Remaining Balance is: PKR ${myBalance}💸 !`);
        }

        else if (fast_cash_operation.operation === 20000){
            myBalance -= 20000
            console.log(`Your Remaining Balance is: PKR ${myBalance}💸 !`);
        }

    }

    // Perform Check Balance
    else if (perform_operations.operation === "Check Balance"){
        console.log(`Your balance is : PKR ${myBalance}💰`);
    }

}

else{
    console.log('Incorrect Pin 😥, please try again later !')
}
