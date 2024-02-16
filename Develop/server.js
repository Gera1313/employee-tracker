const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);

function startInquire() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View all Roles":
          // TODO: come back and write function to view all roles
          break;
        case "View all Employees":
          // TODO: write call function to view all employees
          break;
        case "Add a department":
          // TODO: write call function to add a department
          break;
        case "Add a role":
          // TODO: write call function to add a role
          break;
        case "Add an employee":
          // TODO: write call function to add an employee
          break;
        case "Update employee role":
          // TODO: write call function to update employee role
          break;
        case "Exit":
          // TODO: Handle the exit
          console.log("Exiting...");
          db.end(); //closes the database
          break;
      }
    });
}

// FUNCTIONS in the .then

// Function to view all departments
function viewAllDepartments() {
    const sql = "SELECT * FROM department";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error retrieving departments:", err);
        return;
      }
      // here we process the results and display the departments
      console.log("\nAll Departmenets:");
      results.forEach((department) => {
        console.log(`${department.id}: ${department.name}`);
      });
    });
  }

startInquire();

// NOTE: looked at INS and STU code from the Modules to get boilerplate code and examples.
