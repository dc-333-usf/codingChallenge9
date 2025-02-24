//Task 1: Creating an employee task. HR system scenario.
class Employee{
    constructor(name, id, department, salary) { //use the constructor to create a template for the employee class
        this.name = name; //setting the variables to be equal to the inputted values. It would be a good idea to put in checks to make sure the right type of data is being entered.
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

getDetails() { //create a method inside the employee class, but ouside the constructor
    return `Employee name: ${this.name}
Employee ID: ${this.id}
Employee department: ${this.department}
Employee salary: $${this.salary}`; //the method will return this template
}

calculateAnnualSalary() { //create a method like the last one, but calculating annual salary
    return `Annual Salary: ${this.salary * 12}`; //the method will return the annual salary
}
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //create a new employee in the class, specfiying the data
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());


//Task 2: Creating a manager class. Inheritance and method overriding.
class Manager extends Employee { //create a new class, extending off the Employee class
    constructor(name, id, department, salary, teamSize) { //specify what data fields are collected
        super(name, id, department, salary); //take these four from the Employee class
        this.teamSize = teamSize; //add the remaining variable
    };

getDetails() { //overwrite the getDetails method from Employee
    return `${super.getDetails()} 
Team size: ${this.teamSize}` //return all the details from the Employee class plus the newly added teamSize variable
};

calculateBonus() { //specify a method in this class to calculate a bonus for the manager
    return `Manager bonus: ${(this.salary * 12) * 0.1}` //return the salary of the manager times 0.1, or ten percent of their salary
}
};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //add a new manager
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());


//Task 3: Creating a company class. Storing and managing employee data scenario.
class Company { //create a new company class
    constructor(name) { //use constructor to accept a name
        this.name = name; //let the input name be set as name
        this.employees = []; //create an empty array to hold employee objects
    };

    addEmployee(employee) { 
        return this.employees.push(employee); //create a method to push the specified employee to the employees array
    };

    listEmployees() {
        console.log(`Company Employees:\n${this.employees.map(employee => employee.getDetails()).join(`\n\n`)}`); //console log the this.employees array with a method that takes each instance of the array, grabs the details for each, and puts them together with 2 lines of blank space for readability
    };
    
}

const company = new Company("TechCorp"); //create a constant, "comapny" to be a new company class named TechCorp
company.addEmployee(emp1); //use the addEmployee method from the company class to take the employee we made earlier and add it to the array
company.addEmployee(mgr1); //same thing, but for the manager
company.listEmployees(); //console log the employees array, modified by the listEmployees method in the company class.