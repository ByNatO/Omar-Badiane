document.addEventListener('DOMContentLoaded', function() {
    // Get the current path of the page (e.g., "index.html", "experience.html")
    const currentPath = window.location.pathname.split('/').pop();

    // Loop through each nav-link and add 'active' to the current page's link
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();

        // If the link path matches the current path, add 'active' class
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
