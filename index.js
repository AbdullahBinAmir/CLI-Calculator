"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
inquirer_1["default"].prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]).then(function (answers) {
    console.log(chalk_1["default"].blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
});
