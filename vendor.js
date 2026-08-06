// ===============================
// MealMate Vendor Dashboard
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // SALES CHART
    // ==========================================

    const ctx = document.getElementById("salesChart");

    if (ctx) {

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],

                datasets: [{

                    label: "Revenue",

                    data: [
                        12000,
                        18000,
                        15000,
                        22000,
                        30000,
                        27000,
                        35000
                    ],

                    borderColor: "#2E7D32",

                    backgroundColor: "rgba(46,125,50,.15)",

                    fill: true,

                    tension: .4,

                    pointRadius: 5,

                    pointBackgroundColor: "#2E7D32"

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: false

                    }

                }

            }

        });

    }


    // ==========================================
    // ACTIVE SIDEBAR
    // ==========================================

    const links = document.querySelectorAll(".sidebar_nav-item");

    links.forEach(item => {

        item.addEventListener("click", () => {

            links.forEach(link =>

                link.classList.remove("sidebar_nav-item--active")

            );

            item.classList.add("sidebar_nav-item--active");

        });

    });


    // ==========================================
    // LOGOUT
    // ==========================================

    const logout = document.querySelector(".sidebar_footer-item:last-child");

    if (logout) {

        logout.addEventListener("click", function(e){

            e.preventDefault();

            const confirmLogout = confirm(
                "Are you sure you want to logout?"
            );

            if(confirmLogout){

                window.location.href = "index.html";

            }

        });

    }


    // ==========================================
    // NOTIFICATION
    // ==========================================

    const notification = document.querySelector(".notification-icons");

    if(notification){

        notification.addEventListener("click",()=>{

            alert("You have 3 new notifications.");

        });

    }


    // ==========================================
    // PROFILE
    // ==========================================

    const profile = document.querySelector(".header-profile-contents");

    profile.addEventListener("click",()=>{

        alert("Profile page coming soon.");

    });


    // ==========================================
    // COUNT-UP ANIMATION
    // ==========================================

    const values = document.querySelectorAll(".stat-card__value");

    values.forEach(value=>{

        const finalValue = parseInt(

            value.innerText.replace(/[^0-9]/g,"")

        );

        if(isNaN(finalValue)) return;

        let start = 0;

        const increment = Math.ceil(finalValue / 80);

        const timer = setInterval(()=>{

            start += increment;

            if(start >= finalValue){

                start = finalValue;

                clearInterval(timer);

            }

            if(value.innerText.includes("₦")){

                value.innerText = "₦" +

                start.toLocaleString();

            }

            else{

                value.innerText = start;

            }

        },20);

    });


    // ==========================================
    // CARD HOVER
    // ==========================================

    const cards = document.querySelectorAll(".stat-card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-6px)";

            card.style.transition=".3s";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

});