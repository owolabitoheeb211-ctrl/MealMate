document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    }); 

});

document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", function(e){

        e.preventDefault();

        window.location.href = "link.html";

    });

});
    const searchInput = document.querySelector(".Search-list");

    searchInput.addEventListener("keyup", function (e) {

        if (e.key === "Enter") {

            const value = this.value.trim();

            if (value === "") {

                alert("Please enter what you want to search.");

            } else {

                alert(`Searching for "${value}"`);

                // Future:
                // window.location.href = "Search.html?query=" + value;

            }

        }

    });


    const aboutLink = document.querySelector('a[href="#bottom"]');

    aboutLink.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector("#bottom").scrollIntoView({

            behavior: "smooth"

        });

    });



    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "scale(1.05)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "scale(1)";

        });

    });


    const carousel = document.querySelector(".carousel");

    let scrollAmount = 0;

    function autoSlide() {

        scrollAmount += 320;

        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {

            scrollAmount = 0;

        }

        carousel.scrollTo({

            left: scrollAmount,

            behavior: "smooth"

        });

    }

    setInterval(autoSlide, 3000);


    const hiddenElements = document.querySelectorAll(
        ".hero, .carousel, .Giant, .info-section"
    );

    function reveal() {

        hiddenElements.forEach(section => {

            const top = section.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {

                section.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();


    const navItems = document.querySelectorAll(".nav-list a");

    navItems.forEach(link => {

        link.addEventListener("click", function () {

            navItems.forEach(item => item.classList.remove("active"));

            this.classList.add("active");

        });

    });



    console.log("Welcome to MealMate!");