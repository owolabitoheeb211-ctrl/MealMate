// =========================================
// MealMate Search & Filter Page
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // CATEGORY SELECTION
    // ==========================

    const categories = document.querySelectorAll(".category-item");

    categories.forEach(category => {

        category.addEventListener("click", () => {

            categories.forEach(item => {
                item.classList.remove("active");
            });

            category.classList.add("active");

        });

    });


    // ==========================
    // CLEAR FILTERS
    // ==========================

    const clearBtn = document.querySelector(".clear-all-btn");

    clearBtn.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        categories[0].classList.add("active");

        document.querySelector(".price-slider").value = 5000;

        document.querySelector(".min-price").textContent = "₦5,000";

        document.querySelector(
            'input[name="delivery"]'
        ).checked = true;

    });


    // ==========================
    // PRICE SLIDER
    // ==========================

    const slider = document.querySelector(".price-slider");
    const minPrice = document.querySelector(".min-price");

    slider.addEventListener("input", () => {

        minPrice.textContent =
            "₦" + Number(slider.value).toLocaleString();

    });


    // ==========================
    // SORT BY PRICE
    // ==========================

    const sort = document.querySelector(".sort-dropdown");
    const grid = document.querySelector(".food-grid");

    sort.addEventListener("change", () => {

        const cards = Array.from(document.querySelectorAll(".food-card"));

        if (sort.value === "Price: Low to High") {

            cards.sort((a, b) => {

                const priceA = parseInt(
                    a.querySelector(".price")
                        .textContent.replace(/[₦,]/g, "")
                );

                const priceB = parseInt(
                    b.querySelector(".price")
                        .textContent.replace(/[₦,]/g, "")
                );

                return priceA - priceB;

            });

        }

        if (sort.value === "Price: High to Low") {

            cards.sort((a, b) => {

                const priceA = parseInt(
                    a.querySelector(".price")
                        .textContent.replace(/[₦,]/g, "")
                );

                const priceB = parseInt(
                    b.querySelector(".price")
                        .textContent.replace(/[₦,]/g, "")
                );

                return priceB - priceA;

            });

        }

        grid.innerHTML = "";

        cards.forEach(card => grid.appendChild(card));

    });


    // ==========================
    // FAVOURITE BUTTON
    // ==========================

    const hearts = document.querySelectorAll(
        '.action-icons img[alt="Favourite"]'
    );

    hearts.forEach(heart => {

        heart.addEventListener("click", () => {

            heart.classList.toggle("liked");

        });

    });


    // ==========================
    // ADD TO CART
    // ==========================

    const carts = document.querySelectorAll(
        '.action-icons img[alt="Add to Cart"]'
    );

    carts.forEach(cart => {

        cart.addEventListener("click", () => {

            alert("Meal added to cart!");

        });

    });


    // ==========================
    // SEARCH
    // ==========================

    const searchHeader = document.querySelector(".search-header h2");

    const searchInput = document.createElement("input");

    searchInput.placeholder = "Search meals...";

    searchInput.className = "live-search";

    searchHeader.after(searchInput);

    const cards = document.querySelectorAll(".food-card");
    const mealsFound = document.querySelector(".meals-found");

    searchInput.addEventListener("keyup", () => {

        let count = 0;

        cards.forEach(card => {

            const meal = card.querySelector(".food-title")
                .textContent
                .toLowerCase();

            if (meal.includes(searchInput.value.toLowerCase())) {

                card.style.display = "";

                count++;

            } else {

                card.style.display = "none";

            }

        });

        mealsFound.textContent = `${count} meals found`;

    });

});