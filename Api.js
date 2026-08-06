// =======================================
// MEALMATE API CONFIGURATION
// =======================================

const API_BASE_URL = "https://mealmate-backend-ejay.onrender.com";


// =======================================
// MOBILE MENU
// =======================================

const menuBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}


// =======================================
// SEARCH INPUT
// =======================================

const searchInput = document.querySelector(".search-list");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        console.log("Searching:", searchInput.value);
    });
}


// =======================================
// PRIMARY BUTTON
// =======================================

const btnPrimary = document.querySelector(".btn-primary");

if (btnPrimary) {
    btnPrimary.addEventListener("click", () => {
        alert("Welcome to MealMate!");
    });
}


// =======================================
// SALES CHART
// =======================================

const ctx = document.getElementById("salesChart");

if (ctx && typeof Chart !== "undefined") {

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "May 15",
                "May 22",
                "May 29",
                "Jun 5",
                "Jun 12"
            ],

            datasets: [{
                label: "Sales",

                data: [
                    20000,
                    60000,
                    40000,
                    80000,
                    65000
                ],

                borderColor: "#e63946",
                backgroundColor: "rgba(230,57,70,.08)",

                borderWidth: 2,

                tension: .4,

                fill: true,

                pointRadius: 4,

                pointBackgroundColor: "#e63946"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    max: 100000,

                    ticks: {

                        stepSize: 20000,

                        callback(value) {

                            return "₦" + (value / 1000) + "k";

                        }

                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    });

}



// =======================================
// CATEGORY FILTER
// =======================================

const categoryItems = document.querySelectorAll(".category-item");

categoryItems.forEach(item => {

    item.addEventListener("click", () => {

        categoryItems.forEach(cat => {

            cat.classList.remove("active");

        });

        item.classList.add("active");

    });

});



// =======================================
// CLEAR FILTERS
// =======================================

const clearButton = document.querySelector(".clear-all-btn");

if (clearButton) {

    clearButton.addEventListener("click", () => {

        // Remove active category

        categoryItems.forEach(item => {

            item.classList.remove("active");

        });

        // Reset delivery radio

        document
            .querySelectorAll(".delivery-option input")
            .forEach(option => {

                option.checked = false;

            });

        // Reset price slider

        if (slider) {

            slider.value = slider.min;

            if (minPrice) {

                minPrice.textContent =
                    "₦" + Number(slider.value).toLocaleString();

            }

        }

    });

}



// =======================================
// PRICE SLIDER
// =======================================

const slider = document.querySelector(".price-slider");

const minPrice = document.querySelector(".min-price");

if (slider && minPrice) {

    slider.addEventListener("input", () => {

        minPrice.textContent =
            "₦" + Number(slider.value).toLocaleString();

    });

}



// =======================================
// SORT DROPDOWN
// =======================================

const sortDropdown = document.querySelector(".sort-dropdown");

if (sortDropdown) {

    sortDropdown.addEventListener("change", () => {

        console.log("Sort by:", sortDropdown.value);

    });

}

// =======================================
// AUTHENTICATION
// =======================================

const cookForm = document.getElementById("cookForm");
const toggleBtn = document.getElementById("toggleBtn");
const toggleInstruction = document.getElementById("toggleInstruction");

const signupFields = document.getElementById("signupFields");
const confirmPasswordContainer = document.getElementById("confirmPasswordContainer");

const formTitle = document.getElementById("formTitle");
const formSub = document.getElementById("formSub");

const submitBtn = document.getElementById("submitBtn");
const responseMsg = document.getElementById("responseMsg");

let isLoginMode = true;


// =======================================
// SWITCH LOGIN / REGISTER
// =======================================

if (toggleBtn && cookForm) {

    toggleBtn.addEventListener("click", (e) => {

        e.preventDefault();

        isLoginMode = !isLoginMode;

        cookForm.reset();

        responseMsg.innerHTML = "";

        if (isLoginMode) {

            formTitle.textContent = "Welcome Back";

            formSub.textContent =
                "Sign in to continue managing your kitchen";

            submitBtn.textContent = "Login";

            toggleInstruction.textContent =
                "Don't have an account?";

            toggleBtn.textContent =
                "Register Kitchen";

            signupFields.classList.add("hidden");

            confirmPasswordContainer.classList.add("hidden");

        } else {

            formTitle.textContent =
                "Create Your Kitchen";

            formSub.textContent =
                "Join hundreds of Nigerian home cooks";

            submitBtn.textContent =
                "Register";

            toggleInstruction.textContent =
                "Already have an account?";

            toggleBtn.textContent =
                "Login";

            signupFields.classList.remove("hidden");

            confirmPasswordContainer.classList.remove("hidden");

        }

    });

}



// =======================================
// FORM SUBMISSION
// =======================================

if (cookForm) {

    cookForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        responseMsg.innerHTML = "";

        submitBtn.disabled = true;

        submitBtn.innerHTML = "Please wait...";



        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;



        // ===================================
        // REGISTER
        // ===================================

        if (!isLoginMode) {

            const businessName =
                document.getElementById("businessName").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            if (
                businessName === "" ||
                phone === "" ||
                email === "" ||
                password === ""
            ) {

                responseMsg.innerHTML =
                    "Please fill all required fields.";

                responseMsg.style.color = "red";

                submitBtn.disabled = false;

                submitBtn.innerHTML = "Register";

                return;

            }


            if (password !== confirmPassword) {

                responseMsg.innerHTML =
                    "Passwords do not match.";

                responseMsg.style.color = "red";

                submitBtn.disabled = false;

                submitBtn.innerHTML = "Register";

                return;

            }


            const formData = new FormData();

            formData.append("fullName", businessName);

            formData.append("phone", phone);

            formData.append("email", email);

            formData.append("password", password);

            const idFile =
                document.getElementById("idDoc");

            if (
                idFile &&
                idFile.files.length > 0
            ) {

                formData.append(
                    "identityDocument",
                    idFile.files[0]
                );

            }


            try {

                const response = await fetch(

                    `${API_BASE_URL}/api/auth/register`,

                    {

                        method: "POST",

                        body: formData

                    }

                );


                const data = await response.json();


                if (response.ok) {

                    responseMsg.innerHTML =
                        "Registration Successful.";

                    responseMsg.style.color = "green";


                    setTimeout(() => {

                        toggleBtn.click();

                    }, 2000);

                }

                else {

                    responseMsg.innerHTML =
                        data.message || "Registration failed.";

                    responseMsg.style.color = "red";

                }

            }

            catch (error) {

                console.error(error);

                responseMsg.innerHTML =
                    "Unable to connect to server.";

                responseMsg.style.color = "red";

            }

        }



        // ===================================
        // LOGIN
        // ===================================

        else {

            try {

                const response = await fetch(

                    `${API_BASE_URL}/api/auth/login`,

                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            email,

                            password

                        })

                    }

                );


                const data = await response.json();


                if (response.ok) {

                    responseMsg.innerHTML =
                        "Login Successful";

                    responseMsg.style.color =
                        "green";



                    localStorage.setItem(

                        "token",

                        data.token

                    );



                    localStorage.setItem(

                        "user",

                        JSON.stringify(data.user)

                    );



                    setTimeout(() => {

                        window.location.href =
                            "cook-dashboard.html";

                    }, 1000);

                }

                else {

                    responseMsg.innerHTML =
                        data.message || "Invalid Login";

                    responseMsg.style.color =
                        "red";

                }

            }

            catch (error) {

                console.error(error);

                responseMsg.innerHTML =
                    "Server Connection Error.";

                responseMsg.style.color =
                    "red";

            }

        }


        submitBtn.disabled = false;

        submitBtn.innerHTML =

            isLoginMode

                ? "Login"

                : "Register";

    });

}
// =======================================
// AUTH HELPER FUNCTIONS
// =======================================

// Get saved token
function getToken() {
    return localStorage.getItem("token");
}

// Check if user is logged in
function isLoggedIn() {
    return !!getToken();
}

// Get logged-in user
function getCurrentUser() {
    const user = localStorage.getItem("user");

    if (!user) return null;

    return JSON.parse(user);
}



// =======================================
// DISPLAY USER NAME
// =======================================

const usernameElement = document.querySelector(".username");

if (usernameElement) {

    const user = getCurrentUser();

    if (user) {

        usernameElement.textContent =
            user.fullName ||
            user.name ||
            user.email;

    }

}



// =======================================
// PROTECT DASHBOARD PAGES
// =======================================

const protectedPages = [

    "cook-dashboard.html",

    "admin.html",

    "customer.html",

    "vendor.html",

    "orders.html",

    "analytics.html"

];

const currentPage = window.location.pathname.split("/").pop();

if (

    protectedPages.includes(currentPage)

    &&

    !isLoggedIn()

) {

    alert("Please login first.");

    window.location.href = "Register.html";

}



// =======================================
// LOGOUT BUTTON
// =======================================

const logoutBtn = document.querySelector(".logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        alert("Logged out successfully.");

        window.location.href = "Register.html";

    });

}



// =======================================
// API REQUEST HELPER
// =======================================

async function apiRequest(url, method = "GET", body = null) {

    const options = {

        method,

        headers: {

            Authorization:

                `Bearer ${getToken()}`

        }

    };



    if (body) {

        options.headers["Content-Type"] =

            "application/json";

        options.body = JSON.stringify(body);

    }



    try {

        const response = await fetch(

            API_BASE_URL + url,

            options

        );



        if (response.status === 401) {

            localStorage.removeItem("token");

            localStorage.removeItem("user");

            window.location.href = "Register.html";

            return;

        }



        return await response.json();

    }

    catch (error) {

        console.error(error);

    }

}



// =======================================
// LOAD USER PROFILE
// =======================================

async function loadProfile() {

    if (!isLoggedIn()) return;

    const data = await apiRequest("/api/auth/profile");

    console.log(data);

}

loadProfile();



// =======================================
// CHECK LOGIN STATUS
// =======================================

console.log("Logged In:", isLoggedIn());

console.log("Current User:", getCurrentUser());
