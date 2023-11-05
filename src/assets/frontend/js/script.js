// Function to collapse the navbar when clicking anywhere outside
function collapseNavbar() {
    const navbar = document.querySelector(".navbar-collapse");
    if (window.getComputedStyle(navbar).display !== "none") {
        navbar.classList.remove("show");
    }
}

// Add a click event listener to the document
document.addEventListener("click", function (event) {
    const target = event.target;

    // Add a click event listener to navbar links
    const navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            collapseNavbar(); // Collapse the navbar when a link is clicked
        });
    });

    if (
        !target.closest(".navbar") && // Clicked outside the navbar
        !target.closest(".navbar-collapse.show") // Clicked outside the open collapsible menu
    ) {
        collapseNavbar();
    }
});



