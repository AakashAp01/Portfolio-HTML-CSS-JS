AOS.init();
$(document).ready(function() {
    // Check localStorage for the theme preference and apply it
    if (localStorage.getItem('theme') === 'light') {
        $('body').addClass('light-theme');
        $('#theme-toggle i').removeClass('bi-sun-fill').addClass('bi-moon-fill'); // Set to moon icon
        $('#theme-toggle').attr('title', 'Switch to Light Theme'); // Set title for light theme
    } else {
        $('#theme-toggle').attr('title', 'Switch to Dark Theme'); // Set title for dark theme
    }

    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('light-theme');

        const icon = $(this).find('i');
        if ($('body').hasClass('light-theme')) {
            icon.removeClass('bi-sun-fill').addClass('bi-moon-fill'); 
            localStorage.setItem('theme', 'light'); // Store light theme preference
            $(this).attr('title', 'Switch to Light Theme'); // Update title
        } else {
            icon.removeClass('bi-moon-fill').addClass('bi-sun-fill'); 
            localStorage.setItem('theme', 'dark'); // Store dark theme preference
            $(this).attr('title', 'Switch to dark Theme'); // Update title
        }
    });
});

document.addEventListener("mousemove", function(e) {
    let body = document.body;
    let x = e.clientX;
    let y = e.clientY;
    
    body.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 0, 0.2), transparent 100px)`;
});

// Check if the user is visiting for the first time
if (localStorage.getItem('new_user')) {
    // Show the welcome message
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.classList.remove('d-none');
    welcomeMessage.classList.add('show'); // Add show class for transition

    // Set local storage item to prevent showing it again
    localStorage.setItem('new_user', 'true');

    // Hide the message after 3 seconds
    setTimeout(() => {
        welcomeMessage.classList.remove('show'); // Remove show class for fade out
        setTimeout(() => {
            welcomeMessage.classList.add('d-none'); // Finally hide the element
        }, 500); // Wait for the fade-out transition to complete
    }, 3000);
}


