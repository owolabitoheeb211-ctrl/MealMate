// ==========================================
// MealMate Authentication JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // SHOW / HIDE PASSWORD
    // ================================

    const eyeIcons = document.querySelectorAll(".fa-eye, .fa-eye-slash");

    eyeIcons.forEach((eye) => {

        eye.addEventListener("click", () => {

            const input = eye.previousElementSibling;

            if (!input) return;

            if (input.type === "password") {

                input.type = "text";
                eye.classList.remove("fa-eye");
                eye.classList.add("fa-eye-slash");

            } else {

                input.type = "password";
                eye.classList.remove("fa-eye-slash");
                eye.classList.add("fa-eye");

            }

        });

    });


    // ================================
    // LOGIN FORM
    // ================================

    const loginForm = document.querySelector(".login-box form");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const username = loginForm.querySelector("input[type='text'], input[type='email']");
            const password = loginForm.querySelector("input[type='password']");

            if (!username || username.value.trim() === "") {

                alert("Please enter your Email or Phone Number.");
                return;

            }

            if (!password || password.value.trim() === "") {

                alert("Please enter your password.");
                return;

            }

            alert("Login Successful!");

            loginForm.reset();

            // Redirect after 1 second
            setTimeout(() => {

                window.location.href = "Search.html";

            }, 1000);

        });

    }


    // ================================
    // REGISTER FORM
    // ================================

    const registerForm = document.querySelector(".register-box form");

    if (registerForm) {

        registerForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = registerForm.querySelectorAll("input");

            for (let input of inputs) {

                if (
                    input.type !== "file" &&
                    input.value.trim() === ""
                ) {

                    alert("Please fill all required fields.");
                    input.focus();
                    return;

                }

            }

            const password = registerForm.querySelector("input[type='password']");
            const confirmPassword = registerForm.querySelector("#confirmPassword");

            if (confirmPassword && password.value !== confirmPassword.value) {

                alert("Passwords do not match.");
                return;

            }

            alert("Registration Successful!");

            registerForm.reset();

            // Redirect to Login Page
            setTimeout(() => {

                window.location.href = "Search.html";

            }, 1000);

        });

    }


    // ================================
    // INPUT FOCUS EFFECT
    // ================================

    const inputs = document.querySelectorAll(".input-box input");

    inputs.forEach(input => {

        input.addEventListener("focus", function () {

            this.parentElement.style.borderColor = "#ff9800";

        });

        input.addEventListener("blur", function () {

            this.parentElement.style.borderColor = "#ddd";

        });

    });


    // ================================
    // SMOOTH SCROLL
    // ================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});
// =============================
// FORGOT PASSWORD
// =============================

const forgotPasswordLink = document.getElementById("forgotPasswordLink");

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", async function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (!email) {
            alert("Please enter your email address first.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || "Password reset link has been sent to your email.");
            } else {
                alert(data.message || "Unable to send reset link.");
            }

        } catch (error) {
            console.error(error);
            alert("Network error. Please try again.");
        }
    });
}