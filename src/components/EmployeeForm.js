import React, { useState } from 'react';
const EmployeeForm = () => {
    // Step 6: State for form fields
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        email: ''
    });

    // Step 6: Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    // Step 7: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Employee:', employee);
        // Reset the form
        setEmployee({ name: '', position: '', department: '', email: '' });
    };

    // Step 5: Add input fields and submit button
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="text"
                name="position"
                value={employee.position}
                onChange={handleChange}
                placeholder="Position"
                required
            />
            <input
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                placeholder="Department"
                required
            />
            <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
