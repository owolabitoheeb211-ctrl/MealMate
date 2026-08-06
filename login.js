const eyeIcons = document.querySelectorAll(".fa-eye");

eyeIcons.forEach((eye) => {

    eye.addEventListener("click", () => {

        const input = eye.previousElementSibling;

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
const loginForm = document.querySelector(".login-box form");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = loginForm.querySelector("input[type='text']");
    const password = loginForm.querySelector("input[type='password']");

    if(username.value.trim() === ""){

        alert("Please enter your Email or Phone Number.");
        username.focus();
        return;

    }

    if(password.value.trim() === ""){

        alert("Please enter your password.");
        password.focus();
        return;

    }

    alert("Login Successful!");

    loginForm.reset();

});
const registerForm = document.querySelector(".register-box form");

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = registerForm.querySelectorAll("input");

    for(let input of inputs){

        if(input.value.trim() === ""){

            alert("Please fill all fields.");
            input.focus();
            return;

        }

    }

    alert("Account Created Successfully!");

    registerForm.reset();

});

const inputs = document.querySelectorAll(".input-box input");

inputs.forEach(input => {

    input.addEventListener("focus", function(){

        this.parentElement.style.borderColor = "#ff9800";

    });

    input.addEventListener("blur", function(){

        this.parentElement.style.borderColor = "#ddd";

    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});