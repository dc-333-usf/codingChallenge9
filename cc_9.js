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
    let annSalary = (this.salary * 12);
    return `Annual Salary: ${annSalary}`; //the method will return the annual salary
}
};

const empl = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(empl.getDetails());
console.log(empl.calculateAnnualSalary());