// Todo-List => CLI Application
import inquirer from "inquirer";
import chalk from 'chalk';
let todos = [];
let condition = true;
console.log(chalk.bgRed.bold("\n --------------------- Todo List --------------------- \n"));
// Adding Todo in List
while (condition) {
    let TodoList = await inquirer.prompt([
        {
            message: chalk.yellowBright.bold("\nWhat you want to add in your todos ?"),
            type: 'input',
            name: 'todo'
        },
        {
            message: chalk.yellowBright.bold('Do you want to add more in todo ?'),
            type: 'confirm',
            name: 'addmore',
            default: false,
        }
    ]);
    todos.push(TodoList.todo);
    // Updating the value of condition based on the user's
    condition = TodoList.addmore;
    console.log("Here is your current todo : ", (todos));
    let updateTodo = await inquirer.prompt([{
            message: chalk.yellowBright.bold('Do you want to udpate the todo ? '),
            type: 'confirm',
            name: 'update',
            default: false,
        }]);
    // If update is => yes
    if (updateTodo.update) {
        console.log('Update the todo ! ');
        let updateTodoAns = await inquirer.prompt({
            message: chalk.yellowBright.bold('Select the todo element you want to update ? '),
            type: 'list',
            name: 'updateAns',
            choices: todos,
        });
        // now update the todo with new element
        let writeupdateTodoList = await inquirer.prompt([{
                message: chalk.yellowBright.bold('Write the new todo : '),
                type: 'input',
                name: 'writeUpdate',
                // choices : todos,
            }]);
        let newTodoAnswer = todos.indexOf(updateTodoAns.updateAns);
        if (newTodoAnswer !== -1) {
            todos[newTodoAnswer] = writeupdateTodoList.writeUpdate;
        }
        ;
        console.log(chalk.bgGreenBright.bold("\nTodo were Updated Successfully!"));
        // log the inserted Todo's list
        console.log("\nYour Current Todos List is:", (todos));
        // 
    }
    else {
        console.log(chalk.bgGreenBright.bold("\nNo Todos were Updated!"));
    }
    ;
    // Delete the last one todo
    let deleteTodo = await inquirer.prompt([{
            name: "delete",
            message: chalk.red.bold("\nAre you want to delete the last todo?"),
            type: "confirm",
            default: "false"
        }]);
    if (deleteTodo.delete) {
        todos.pop();
        console.log(chalk.bgGreenBright.bold("\nLast Todo Deleted Successfully!"));
        console.log("\nYour Current Todos List is:", (todos));
    }
    else {
        console.log(chalk.bgGreenBright.bold("\nNo Todos were Deleted!"));
    }
    ;
    // Delete Desired todo element 
    let selectDesiredlement = await inquirer.prompt([{
            message: chalk.yellowBright.bold('Do you want to delete the todo ? '),
            type: 'confirm',
            name: 'delete',
            default: false,
        }]);
    if (selectDesiredlement.delete) {
        let deleteSpecificElement = await inquirer.prompt([{
                name: "deletespecific",
                message: chalk.red.bold("\nSelect the todo element you want to delete ?"),
                type: "list",
                choices: todos,
            }]);
        if (deleteSpecificElement.deletespecific) {
            todos.pop();
            console.log(chalk.bgGreenBright.bold(`"\ ${todos.pop} Todo Deleted Successfully!"`));
            console.log("\nYour Current Todos List is:", (todos));
        }
        else {
            console.log(chalk.bgGreenBright.bold("\nNo Todos were Deleted!"));
        }
    }
    // Now insert todo in first 
}
