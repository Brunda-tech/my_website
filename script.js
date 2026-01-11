function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "farmer" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password");
    }
}

function logout() {
    window.location.href = "login.html";
}