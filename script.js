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

//welcome message
$(document).ready(function() {
    // Array of short quotes
    const quotes = [
        "Believe in yourself!",
        "Keep pushing forward.",
        "Dream big, work hard.",
        "Success is a journey, not a destination.",
        "Embrace the process.",
        "Stay positive and strong.",
        "You're capable of amazing things!",
        "Every day is a fresh start.",
        "The best is yet to come.",
        "Hard work pays off!",
        "The journey of a thousand miles begins with one step.",
        "Great things never come from comfort zones.",
        "Your potential is endless.",
        "Dream big, start small, but most of all, start!",
        "Every day is a chance to be better.",
        "The best time for new beginnings is now.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        "Your only limit is your mind.",
        "Start where you are, use what you have, do what you can.",
        "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
        "Believe in the magic of new beginnings."
    ];
    
    // Function to get a random quote
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    // Check if the welcome message has been shown in the current session
    if (!sessionStorage.getItem('welcome_shown')) {
        // Show the welcome message
        const randomQuote = getRandomQuote(); // Get a random quote
        $('#random-quote').text(randomQuote); // Add the random quote to the span

        // Display the welcome message
        $('#welcome-message').removeClass('d-none').addClass('show'); // Show with transition

        // Set session storage item to prevent showing it again in this session
        sessionStorage.setItem('welcome_shown', 'true');

        // Hide the message after 3 seconds
        setTimeout(function() {
            $('#welcome-message').removeClass('show').fadeOut(1000, function() {
                $(this).addClass('d-none'); // Hide after fade-out
            });
        }, 8000); // Adjust the timeout duration if necessary
    }
});




