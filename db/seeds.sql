INSERT INTO department (name)
VALUES ("sales"),
       ("customer service"),
       ("accounting"),
       ("legal"),
       ("loss prevention");

INSERT INTO role (title, salary, department_id)
VALUES ("sales"),
       ("customer service"),
       ("tech support"),
       ("legal"),
       ("loss prevention");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("sales"),
       ("customer service"),
       ("tech support"),
       ("legal"),
       ("loss prevention");