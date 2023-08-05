#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimatiom from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome() {
 let rainbowTitle = chalkAnimatiom.rainbow('Welome to Calculator App')
 await sleep()
 rainbowTitle.stop()
 console.log(chalk.green(`
   _______________________
   | 3 * 9 = 27          |
   |_____________________|
 `))
}


async function askQuestion() {
    await welcome()
    const answer = await inquirer.prompt([
        {
            type:'list',
            name:'operator',
            message:'Which operation you want to perform? \n',
            choices: ["Addition","Subtraction","Multiplication","Division"]
        },
        {
            type:'number',
            name:'num1',
            message:'Enter First Number'
        },
        {
            type:'number',
            name:'num2',
            message:'Enter Second Number'
        }
    ])
    const {operator,num1,num2} = answer;
    if(operator === 'Addition'){
        console.log(chalk.yellow(`${num1} + ${num2} = ${num1+num2}`))
    }
    else if(operator === 'Subtraction'){
        console.log(chalk.yellow(`${num1} - ${num2} = ${num1-num2}`))
    }
    else if(operator === 'Multiplication'){
        console.log(chalk.yellow(`${num1} x ${num2} = ${num1*num2}`))
    }
    else if(operator === 'Division'){
        if(num2===0)
            console.log(chalk.red('Second Number cannot be zero'))
        console.log(chalk.yellow(`${num1} / ${num2} = ${num1/num2}`))
    }
}

async function main() {
    do{
        await askQuestion()
        var confirm = await inquirer.prompt({
                type:'input',
                name:'restart',
                message:'\n Press Y for to continue'
            })
    }while(confirm.restart.toLocaleLowerCase() === 'y' || confirm.restart.toLocaleLowerCase() === 'yes')
}

await main()