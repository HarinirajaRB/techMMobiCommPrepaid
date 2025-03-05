// document.addEventListener("DOMContentLoaded", function () {
//     const mobileNumberInput = document.getElementById("mobileNumber");
//     const statusMessage = document.getElementById("statusMessage");
//     const registerForm = document.getElementById("registerForm");
//     const joinNowBtn = document.getElementById("joinNow");
//     const usersTableBody = document.getElementById("userTableBody");

//     // Global function for validation triggered by onclick
//     window.validateMobileNumber = function () {
//         const mobile = mobileNumberInput.value.trim();

//         // Validate mobile number: Must start with 6,7,8, or 9 and be exactly 10 digits.
//         const mobilePattern = /^[6789]\d{9}$/;
//         if (!mobilePattern.test(mobile)) {
//             mobileNumberInput.classList.add("is-invalid");
//             statusMessage.innerHTML = '<span class="text-danger">Invalid mobile number format!</span>';
//             return;
//         } else {
//             mobileNumberInput.classList.remove("is-invalid");
//         }

//         // Check if the mobile exists in JSON Server
//         fetch(`http://localhost:3000/users?mobile=${mobile}`)
//             .then(response => response.json())
//             .then(data => {
//                 // Check if any returned user has the operator "Mobi Comm"
//                 let user = data.find(user => user.operator === "Mobi Comm");

//                 if (user) {
//                     statusMessage.innerHTML = '<span class="text-success">Mobile Number Verified for Mobi Comm!</span>';
//                     registerForm.classList.add("d-none");
//                 } else {
//                     statusMessage.innerHTML = '<span class="text-warning">Not a Mobi Comm user. Join now!</span>';
//                     registerForm.classList.remove("d-none");
//                 }
//             })
//             .catch(error => {
//                 console.error("Error fetching user:", error);
//                 statusMessage.innerHTML = '<span class="text-danger">Error connecting to server!</span>';
//             });
//     };

//     // Also allow the form submission to trigger the same validation
//     document.getElementById("validateForm").addEventListener("submit", function (event) {
//         event.preventDefault();
//         validateMobileNumber();
//     });

//     // Redirect to registration page on clicking Join Now
//     joinNowBtn.addEventListener("click", function () {
//         window.location.href = "register.html";
//     });

//     // Function to add new user to the table (if needed)
//     function addUserToTable(user) {
//         const newRow = document.createElement("tr");
//         newRow.innerHTML = `
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.mobile}</td>
//             <td>${user.operator}</td>
//         `;
//         usersTableBody.insertBefore(newRow, usersTableBody.firstChild);
//     }

//     // Example function to simulate adding a new user
//     function addNewUser() {
//         const newUser = {
//             id: 4,
//             name: "New User",
//             mobile: "9123456789",
//             operator: "Mobi Comm"
//         };
//         addUserToTable(newUser);
//     }

//     // Simulate adding a new user after some delay (for demonstration purposes)
//     setTimeout(addNewUser, 5000);
// });



    document.addEventListener("DOMContentLoaded", function () {
      const mobileNumberInput = document.getElementById("mobileNumber");
      const statusMessage = document.getElementById("statusMessage");
      const registerForm = document.getElementById("registerForm");
      const joinNowBtn = document.getElementById("joinNow");
      // Note: The usersTableBody element is used in the code to add new users.
      // Make sure to add it to your HTML if needed. For now, it is left out.

      // Global function for validation triggered by onclick
      window.validateMobileNumber = function () {
        const mobile = mobileNumberInput.value.trim();

        // Validate mobile number: Must start with 6, 7, 8, or 9 and be exactly 10 digits.
        const mobilePattern = /^[6789]\d{9}$/;
        if (!mobilePattern.test(mobile)) {
          mobileNumberInput.classList.add("is-invalid");
          statusMessage.innerHTML = '<span class="text-danger">Invalid mobile number format!</span>';
          return;
        } else {
          mobileNumberInput.classList.remove("is-invalid");
        }

        // Check if the mobile exists in JSON Server
        fetch(`http://localhost:3000/users?mobile=${mobile}`)
          .then(response => response.json())
          .then(data => {
            // Check if any returned user has the operator "Mobi Comm"
            let user = data.find(user => user.operator === "Mobi Comm");

            if (user) {
              statusMessage.innerHTML = '<span class="text-success">Mobile Number Verified for Mobi Comm!</span>';
              window.location.href = "recharge.html";
            } else {
              statusMessage.innerHTML = '<span class="text-warning">Not a Mobi Comm user. Join now!</span>';
              registerForm.classList.remove("d-none");
            }
          })
          .catch(error => {
            console.error("Error fetching user:", error);
            statusMessage.innerHTML = '<span class="text-danger">Error connecting to server!</span>';
          });
      };

      // Allow the form submission to trigger the same validation
      document.getElementById("validateForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validateMobileNumber();
      });

      // Redirect to registration page on clicking Join Now
      joinNowBtn.addEventListener("click", function () {
        window.location.href = "register.html";
      });

      // (Optional) Function to add new user to the table if needed
      // Uncomment or modify if you include a users table in your HTML
      
      const usersTableBody = document.getElementById("userTableBody");
      function addUserToTable(user) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.mobile}</td>
          <td>${user.operator}</td>
        `;
        usersTableBody.insertBefore(newRow, usersTableBody.firstChild);
      }

      // Example function to simulate adding a new user
      function addNewUser() {
        const newUser = {
          id: 4,
          name: "New User",
          mobile: "9123456789",
          operator: "Mobi Comm"
        };
        addUserToTable(newUser);
      }

      // Simulate adding a new user after some delay (for demonstration purposes)
      setTimeout(addNewUser, 5000);
      
    });
