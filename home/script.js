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
            const password = document.getElementById("password").value;
            const firstName = document.getElementById("firstname").value;
            const lastName = document.getElementById("lastname").value;

            const user = { dob, email, password, firstName, lastName };
            localStorage.setItem(email, JSON.stringify(user));

            alert(`Welcome to Hogwarts, ${firstName}! \nAn account has been created for ${email}.`);
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const storedUserData = localStorage.getItem(email);

            if (storedUserData) {
                const user = JSON.parse(storedUserData);
                if (user.password === password) {
                    sessionStorage.setItem("loggedInUser", user.firstName);
                    alert(`Welcome back, ${user.firstName}!`);
                    window.location.href = "index.html";
                } else {
                    alert("Incorrect password. Please try again.");
                }
            } else {
                alert("No account found with this email. Please sign up.");
            }
        });
    }

    const loggedInUser = sessionStorage.getItem("loggedInUser");
    const userActionsContainer = document.querySelector(".user-actions");

    if (loggedInUser && userActionsContainer) {
        const searchBoxHTML = userActionsContainer.querySelector(".search-box").outerHTML;

        userActionsContainer.innerHTML = `
            ${searchBoxHTML}
            <span style="color: #eed69b; margin-right: 15px; font-weight: 500; font-size: 0.95rem; letter-spacing: 1px;">Welcome, ${loggedInUser}</span>
            <button class="btn btn-outline" id="logoutBtn">LOG OUT</button>
        `;

        document.getElementById("logoutBtn").addEventListener("click", function () {
            sessionStorage.removeItem("loggedInUser");
            window.location.reload();
        });
    }
});