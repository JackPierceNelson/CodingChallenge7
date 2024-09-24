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
    function calculateEmployeeSalaries(employee) {
        let totalSalary = employee.salary;
        if (employee.subordinates && employee.subordinates.length > 0) {
            for (let subordinate of employee.subordinates) {
                totalSalary += calculateEmployeeSalaries(subordinate);
            }
        }
        return totalSalary;
    }
    let departmentTotal = 0;
    for (let employee of department.employees) {
        departmentTotal += calculateEmployeeSalaries(employee);
    }
    return departmentTotal;
}
// testing the recursive function
for (let department of company.departments) {
    const totalSalary = calculateDepartmentSalary(department);
    console.log(`Total Salary: ${department.departmentName}: $${totalSalary}`);
}