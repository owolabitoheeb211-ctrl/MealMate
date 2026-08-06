// ==========================================
// MealMate - Manage Riders Dashboard
// ==========================================

document.addEventListener("DOMContentLoaded"), () => {

    // ==========================
    // SEARCH RIDERS
    // ==========================

    const searchInputs = document.querySelectorAll("input[type='text']");
    const tableRows = document.querySelectorAll("tbody tr");

    searchInputs.forEach(input => {

        input.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            tableRows.forEach(row => {

                const text = row.innerText.toLowerCase();

                row.style.display = text.includes(value) ? "" : "none";

            });

        });

    });


    // ==========================
    // ACTIVE SIDEBAR MENU
    // ==========================

    const sidebarLinks = document.querySelectorAll(".sidebar-nav a");

    sidebarLinks.forEach(link => {

        link.addEventListener("click", function () {

            sidebarLinks.forEach(item => {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });


    // ==========================
    // FILTER BUTTON
    // ==========================

    const filterBtn = document.querySelector(".filter-btn");

    if (filterBtn) {

        filterBtn.addEventListener("click", () => {

            alert("Filter functionality will be available soon.");

        });

    }


    // ==========================
    // NOTIFICATION BUTTON
    // ==========================

    const bell = document.querySelector(".bell");

    if (bell) {

        bell.addEventListener("click", () => {

            alert("You have 4 new rider notifications.");

        });

    }


    // ==========================
    // VIEW RIDER DETAILS
    // ==========================

    const viewLinks = document.querySelectorAll(".view-link");

    viewLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const riderName = this.closest("tr").children[0].textContent;

            alert(`Viewing profile for ${riderName}`);

            // Future:
            // window.location.href = "rider-details.html";

        });

    });


    // ==========================
    // PAGINATION
    // ==========================

    const pageButtons = document.querySelectorAll(".page-btn");

    pageButtons.forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            pageButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            this.classList.add("active");

        });

    });


    // ==========================
    // TABLE ROW HOVER EFFECT
    // ==========================

    tableRows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.backgroundColor = "#f7f7f7";

        });

        row.addEventListener("mouseleave", () => {

            row.style.backgroundColor = "";

        });

    });


    // ==========================
    // PROFILE CARD
    // ==========================

    const profileCard = document.querySelector(".profile-card");

    if (profileCard) {

        profileCard.addEventListener("click", () => {

            alert("Admin Profile");

        });

    };


    // ==========================
    // WELCOME MESSAGE
    // ==========================

    console.log("Welcome to MealMate Rider Management Dashboard"); }