document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const studentTable = document.getElementById("studentTable");

    let students = [];
    
    // Add Student
    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("studentName").value;
        const id = document.getElementById("studentID").value;

        if (name && id) {
            students.push({ name, id });
            updateTable();
            studentForm.reset();
        }
    });

    // Update Table
    function updateTable() {
        studentTable.innerHTML = "";
        students.forEach((student, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.id}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;

            studentTable.appendChild(row);
        });
    }

    // Delete Student
    window.deleteStudent = (index) => {
        students.splice(index, 1);
        updateTable();
    };
});