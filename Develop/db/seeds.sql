INSERT INTO department (name)
VALUES ("sales"),
       ("customer service"),
       ("accounting"),
       ("legal"),
       ("loss prevention");

INSERT INTO role (title, salary, department_id)
VALUES ("sales manager", 45000, 1 ),
       ("customer service rep", 40000, 3),
       ("tech support agent", 50000, 3),
       ("legal analyst", 90000, 5),
       ("investigator", 70000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lance", "Lopez", 1, NULL ),
       ("Justin", "Kaposky", 2, 3),
       ("Tom", "Delonge", 3, NULL),
       ("Lilly", "Palmer", 4, 5),
       ("Charlotte", "DeWitte", 5, NULL);