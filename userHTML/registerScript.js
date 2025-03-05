document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const statusMessage = document.getElementById("statusMessage");
    const usersTableBody = document.getElementById("userTableBody");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let mobile = document.getElementById("mobile").value.trim();

        if (name === "" || email === "" || mobile === "") {
            alert("⚠️ Please enter all details!");
            return;
        }

        let newUser = {
            "name": name,
            "email": email,
            "mobile": mobile,
            "operator": "Mobi Comm",
            "rechargeHistory": []
        };

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            statusMessage.innerHTML = '<span class="text-success">✅ User added successfully to Mobi Comm!</span>';
            registerForm.reset();
            addUserToTable(data);
        })
        .catch(error => {
            console.error("Error adding user:", error);
            statusMessage.innerHTML = '<span class="text-danger">❌ Failed to add user!</span>';
        });
    });

    // Function to add new user to the table
    function addUserToTable(user) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.operator}</td>
        `;
        usersTableBody.insertBefore(newRow, usersTableBody.firstChild);
    }
});