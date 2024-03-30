#! /usr/bin/env node
import inquirer from "inquirer";
let todos=[];
let condition=true;

while(condition){
    let addtask=await inquirer.prompt([
        {
            type:"input",
            name:"todo",
            message:"What do you want to add in your todos?",
        },{
            type:"confirm",
            name:"addmore",
            message:"Do you want to add more?",
            default:"false"
        }
    ]);
    todos.push(addtask.todo);
    condition=addtask.addmore
    console.log(todos);
}