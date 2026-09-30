document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);

            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    }

    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const dob = document.getElementById("dob").value;
            const email = document.getElementById("email").value;
            const firstName = document.getElementById("firstName").value;

            alert(`Welcome to Hogwarts, ${firstName}! \nAn account has been created for ${email}.`);

            window.location.href = "index.html";
        });
    }
});