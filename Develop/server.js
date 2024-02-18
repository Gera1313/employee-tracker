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
          viewAllRoles();
          break;
        case "View all Employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
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

// Function to view all roles
function viewAllRoles() {
  const sql = "SELECT * FROM role";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving roles:", err);
      return;
    }
    // here we process the results and display the roles
    console.log("\nAll Roles:");
    results.forEach((role) => {
      console.log(`${role.id}: ${role.title} - Salary: ${role.salary}`);
    });
  });
}

// Function to view all employees
function viewAllEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
                 FROM employee
                 INNER JOIN role ON employee.role_id = role.id
                 INNER JOIN department ON role.department_id = department.id
                 LEFT JOIN employee AS manager ON employee.manager_id = manager.id`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving employees:", err);
      return;
    }
    // Displays the formatted table
    console.log("\nAll Employees:");
    console.table(results);
  });
}

// Function to add a department
function addDepartment() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "departmentName",
            message: "Enter the name of the new department",
        },
    ])
    .then((answers) => {
        const sql = "INSERT INTO department (name) VALUES (?)";
        const values = [answers.departmentName];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error adding department:", err);
                return;
            }
            console.log("New department added successfully!");
        });
    });
}

startInquire();

// NOTE: looked at INS and STU code from the Modules to get boilerplate code and examples.
