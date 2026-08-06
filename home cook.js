// ======================================
// MealMate Home Cook Authentication
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("toggleBtn");
    const formTitle = document.getElementById("formTitle");
    const formSub = document.getElementById("formSub");
    const signupFields = document.getElementById("signupFields");
    const confirmPasswordContainer = document.getElementById("confirmPasswordContainer");
    const submitBtn = document.getElementById("submitBtn");
    const toggleInstruction = document.getElementById("toggleInstruction");
    const responseMsg = document.getElementById("responseMsg");

    const cookForm = document.getElementById("cookForm");

    let isLogin = true;

    // =====================================
    // TOGGLE LOGIN / REGISTER
    // =====================================

    toggleBtn.addEventListener("click", () => {

        isLogin = !isLogin;

        signupFields.classList.toggle("hidden");

        confirmPasswordContainer.classList.toggle("hidden");

        if (isLogin) {

            formTitle.textContent = "Welcome Back";

            formSub.textContent =
                "Sign in to continue managing your kitchen";

            submitBtn.textContent = "Login";

            toggleInstruction.textContent =
                "Don't have an account?";

            toggleBtn.textContent =
                "Register Kitchen";

        } else {

            formTitle.textContent = "Create Kitchen Account";

            formSub.textContent =
                "Register your kitchen to start selling.";

            submitBtn.textContent = "Register";

            toggleInstruction.textContent =
                "Already have an account?";

            toggleBtn.textContent =
                "Login";

        }

        responseMsg.textContent = "";

    });


    // =====================================
    // FORM SUBMISSION
    // =====================================

    cookForm.addEventListener("submit", function (e) {

        e.preventDefault();

        responseMsg.style.color = "red";

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        // Email Validation

        if (!email.includes("@")) {

            responseMsg.textContent =
                "Enter a valid email address.";

            return;

        }

        // Password Validation

        if (password.length < 6) {

            responseMsg.textContent =
                "Password must be at least 6 characters.";

            return;

        }

        // Registration Validation

        if (!isLogin) {

            const businessName =
                document.getElementById("businessName").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const idDoc =
                document.getElementById("idDoc").files[0];

            if (businessName === "") {

                responseMsg.textContent =
                    "Business name is required.";

                return;

            }

            if (phone === "") {

                responseMsg.textContent =
                    "Phone number is required.";

                return;

            }

            if (!idDoc) {

                responseMsg.textContent =
                    "Please upload your Government ID.";

                return;

            }

            if (password !== confirmPassword) {

                responseMsg.textContent =
                    "Passwords do not match.";

                return;

            }

        }

        responseMsg.style.color = "green";

        if (isLogin) {

            responseMsg.textContent =
                "Login Successful! Redirecting...";

        } else {

            responseMsg.textContent =
                "Registration Successful!";

        }

        setTimeout(() => {

            window.location.href = "vendor.html";

        }, 2000);

    });


    // =====================================
    // FILE NAME DISPLAY
    // =====================================

    const fileInput = document.getElementById("idDoc");

    if (fileInput) {

        fileInput.addEventListener("change", function () {

            if (this.files.length > 0) {

                responseMsg.style.color = "#2E7D32";

                responseMsg.textContent =
                    "Selected file: " + this.files[0].name;

            }

        });

    }

});