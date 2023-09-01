const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to the employees_db database.`)
);

startInquire();

function startInquire() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View all Departments", "View all Roles", "View all Employees",
            "Add a department", "Add a role", "Add an employee",
            "Update employee role",
            "Exit"],
        },
    ])
}

// NOTE: looked at INS and STU code from the Modules to get boilerplate code and examples. 