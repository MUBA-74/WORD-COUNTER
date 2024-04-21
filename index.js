#! /usr/bin/env node
//This line is called a shebang, it tells the OS to run it with nodejs.
//Import the 'inquire' module,which is a command line interface for node.js.
import inquirer from "inquirer";
//Import the 'chalk' module to make program embellishing and flourishing.
import chalk from "chalk";
// Print the welcome message of the program.
console.log(chalk.magentaBright.bold("               WELCOME TO MUHAMMAD UMAR BIN AAMIR'S CLI BASED WORD COUNTER      "));
//Declare the constant 'answer' and assign it to the result of inquirer.prompt function.
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: chalk.greenBright.bold("Enter Your Sentence To Count the Word: "),
    }
]);
const words = answers.Sentence.trim().split(" ");
//Print the array of words to the console.
console.log((words));
//Print the word count of the sentence to the console.
console.log(chalk.yellowBright.bold(`Your Sentence Word Count is :${words.length}`));
