document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from reloading the page

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let role = document.getElementById("role").value;

        if (username === "" || password === "") {
            alert("Please enter a valid username and password.");
            return;
        }

        // Redirect user to their respective dashboard
        switch (role) {
            case "student":
                window.location.href = "";
                break;
            case "teacher":
                window.location.href = "teacher.html";
                break;
            case "admin":
                window.location.href = "admin.html";
                break;
            default:
                alert("Invalid role selected.");
        }
    });
});
