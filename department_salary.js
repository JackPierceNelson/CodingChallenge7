// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: "Engineering",
            employees: [
                {
                    name: "Alice",
                    salary: 100000,
                    subordinates: [
                        {
                            name: "Bob",
                            salary: 80000,
                            subordinates: [
                                {
                                    name: "Charlie",
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "David",
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: "Sales",
            employees: [
                {
                    name: "Eve",
                    salary: 85000,
                    subordinates: [
                        {
                            name: "Frank",
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Grace",
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    // Check if the employee has subordinates and recursively call itself for each subordinate and adding their salary to the total
    function calculateEmployeeSalaries(employee) {
        let totalSalary = employee.salary;
        if (employee.subordinates && employee.subordinates.length > 0) {
            for (let subordinate of employee.subordinates) {
                totalSalary += calculateEmployeeSalaries(subordinate);
            }
        }
        return totalSalary;
    }
    // initializing the department total to 0 and iterating through each employee salary and adding the result to the department total
    let departmentTotal = 0;
    for (let employee of department.employees) {
        departmentTotal += calculateEmployeeSalaries(employee);
    }
    // returns the final department total
    return departmentTotal;
}
// testing the recursive function
for (let department of company.departments) {
    const totalSalary = calculateDepartmentSalary(department);
    console.log(`Total Salary: ${department.departmentName}: $${totalSalary}`);
}

// Task 3:Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    // Initialzie total company salary variable to 0
    let totalCompanySalary = 0;
    // itierate through each department in the company and call calculateDepartmentSalary Function to add the result to totalCompanySalary
    for (let department of company.departments) {
        totalCompanySalary += calculateDepartmentSalary(department);
    }
    return totalCompanySalary;
}
// test case 
// calls calculateCompanySalary function to iterate through each department of the company and calculates the total salary
const totalCompanySalary = calculateCompanySalary(company);
console.log(`Total company Salary: $${totalCompanySalary}`);