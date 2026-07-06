document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            siteNav.classList.toggle("show");

            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".filterable-card");

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const selectedFilter = button.dataset.filter;

                filterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                projectCards.forEach((card) => {
                    const categories = card.dataset.category.split(" ");

                    if (selectedFilter === "all" || categories.includes(selectedFilter)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
});