// Toggle Navigation Menu
document.getElementById("nav-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        // Allow external links (like PDFs) to open normally
        if (!target.startsWith("#")) {
            return;
        }

        e.preventDefault();
        const targetId = target.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar if needed
                behavior: 'smooth'
            });
        }

        // Close Menu After Clicking a Link (for mobile usability)
        document.getElementById("nav-menu").classList.remove("show");
    });
});

// Function to remove the image if screen width is <= 767px
function handleImageVisibility() {
    const skillsImageContainer = document.getElementById("skills-image-container");

    if (skillsImageContainer) {
        if (window.innerWidth <= 767) {
            skillsImageContainer.style.display = "none"; // Hide instead of removing
        } else {
            skillsImageContainer.style.display = "block"; // Show again on larger screens
        }
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", handleImageVisibility);

// Run on window resize
window.addEventListener("resize", handleImageVisibility);
