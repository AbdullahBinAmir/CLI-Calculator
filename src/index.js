import inquirer from "inquirer";
import chalk from "chalk";
inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]).then((answers) => {
    console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
});
