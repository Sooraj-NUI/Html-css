const userEmail = "soorajraju@gmail.com";
const userPassword = "Sooraj@123";

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === userEmail && password === userPassword) {
        window.location.href = "../blog-page/blog.html";
    } else {
        document.getElementById("message").textContent = "Invalid credentials";
    }
});