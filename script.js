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


// Function to show the selected project and hide others
function showProject(index) {
    // Get all the project content divs and navigation buttons
    var projects = document.querySelectorAll('.projects-content');
    var buttons = document.querySelectorAll('.projects-navigation button');
    
    // Hide all projects and remove active button state
    projects.forEach(function(proj, idx) {
        proj.classList.remove('active');
        buttons[idx].classList.remove('active');
    });

    // Show the selected project and add active button state
    document.getElementById('project-' + index).classList.add('active');
    buttons[index].classList.add('active');
}

// Function to open image in a modal
function zoomImage(imgElement) {
    // Create a modal element if it doesn't already exist
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.classList.add('modal');
        
        // Create an image element for the modal
        const modalImage = document.createElement('img');
        modalImage.classList.add('modal-content');
        modalImage.id = 'modalImage';
        
        // Append the image to the modal
        modal.appendChild(modalImage);
        document.body.appendChild(modal);
        
        // Add click event to close the modal
        modal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Set the modal image source to the clicked image source
    document.getElementById('modalImage').src = imgElement.src;
    modal.style.display = 'block';
}

// Event listeners for project navigation buttons
document.querySelectorAll('.projects-navigation button').forEach((button, index) => {
    button.addEventListener('click', function() {
        showProject(index);
    });
});

// Event listeners for project images to enable zoom on click
document.querySelectorAll('.projects-content img').forEach(img => {
    img.addEventListener('click', function() {
        zoomImage(this);
    });
});

