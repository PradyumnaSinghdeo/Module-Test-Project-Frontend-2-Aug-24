let employees = [];
let idCounter = 1;

document.getElementById('addUserButton').addEventListener('click', addUser);

function addUser() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    const messageElement = document.getElementById('message');

    if (name === "" || profession === "" || age === "") {
        messageElement.textContent = "Error: Please make sure all fields are filled before adding an employee!";
        messageElement.className = 'error';
        return;
    }

    const newEmployee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    employees.push(newEmployee);
    messageElement.textContent = "Success: Employee Added!";
    messageElement.className = 'success';

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';

    updateEmployeeList();
}

function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = ''; // Clear current list

    if (employees.length === 0) {
        employeeList.innerHTML = '<p>You have 0 Employees.</p>';
    } else {
        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.className = 'employee-card';
            employeeDiv.innerHTML = `
                <div>
                    <span>Name: ${employee.name}</span> 
                    <span>Profession: ${employee.profession}</span> 
                    <span>Age: ${employee.age}</span>
                </div>
                <button onclick="deleteUser(${employee.id})">Delete User</button>
            `;
            employeeList.appendChild(employeeDiv);
        });
    }
}

function deleteUser(id) {
    employees = employees.filter(employee => employee.id !== id);
    updateEmployeeList();
}
