// =======================================
// MealMate Admin Dashboard
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // CUSTOMER SEARCH
    // ============================

    const searchInputs = document.querySelectorAll("input[type='text']");
    const rows = document.querySelectorAll("tbody tr");

    searchInputs.forEach(input => {

        input.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            rows.forEach(row => {

                row.style.display = row.innerText
                    .toLowerCase()
                    .includes(value)
                    ? ""
                    : "none";

            });

        });

    });


    // ============================
    // ACTIVE SIDEBAR
    // ============================

    const links = document.querySelectorAll(".sidebar-nav a");

    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(item =>
                item.classList.remove("active")
            );

            this.classList.add("active");

        });

    });


    // ============================
    // NOTIFICATION BUTTON
    // ============================

    const bell = document.querySelector(".bell");

    if (bell) {

        bell.addEventListener("click", () => {

            alert("You have 5 new notifications.");

        });

    }


    // ============================
    // FILTER BUTTON
    // ============================

    const filterBtn = document.querySelector(".filter-btn");

    if (filterBtn) {

        filterBtn.addEventListener("click", () => {

            alert("Filter feature coming soon.");

        });

    }


    // ============================
    // VIEW CUSTOMER
    // ============================

    const viewLinks = document.querySelectorAll(".view-link");

    viewLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const customer =
                this.closest("tr")
                .children[0]
                .innerText;

            alert(`Viewing ${customer}'s profile.`);

        });

    });


    // ============================
    // PAGINATION
    // ============================

    const pages = document.querySelectorAll(".page-btn");

    pages.forEach(page => {

        page.addEventListener("click", function (e) {

            e.preventDefault();

            pages.forEach(btn =>
                btn.classList.remove("active")
            );

            this.classList.add("active");

        });

    });


    // ============================
    // TABLE ROW HOVER
    // ============================

    rows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.background = "#f8f8f8";

        });

        row.addEventListener("mouseleave", () => {

            row.style.background = "";

        });

    });


    // ============================
    // PROFILE CARD
    // ============================

    const profile = document.querySelector(".profile-card");

    if (profile) {

        profile.addEventListener("click", () => {

            alert("Admin Profile");

        });

    }


    // ============================
    // WELCOME MESSAGE
    // ============================

    console.log("Welcome to MealMate Admin Dashboard");

});