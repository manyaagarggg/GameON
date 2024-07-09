document.addEventListener('DOMContentLoaded', function() {
    console.log('Game Platform Loaded');

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Login successful!');
            loginForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    // const navLinks = document.querySelectorAll('nav .nav-links a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href').substring(1);
    //         document.getElementById(targetId).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //         setActiveLink(this);
    //     });
    // });

    // // Highlight Active Link
    // function setActiveLink(link) {
    //     navLinks.forEach(navLink => navLink.classList.remove('active'));
    //     link.classList.add('active');
    // }

    // Login Modal
    const loginButton = document.getElementById('login-button');
    const loginModal = document.getElementById('login-modal');
    const closeModalButton = document.querySelector('.close-button');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Tooltip
    const gameCards = document.querySelectorAll('.game-card');
    const tooltip = document.getElementById('tooltip');

    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const name = this.getAttribute('data-name');
            const description = this.getAttribute('data-description');
            const players = this.getAttribute('data-players');
            tooltip.innerHTML = `<strong>${name}</strong><br>${description}<br>Players: ${players}`;
            tooltip.style.display = 'block';
            // tooltip.innerText = this.querySelector('h3').innerText;
            // tooltip.style.display = 'block';
        });

        card.addEventListener('mousemove', function(event) {
            tooltip.style.left = event.pageX + 100 + 'px';
            tooltip.style.top = event.pageY + 1000 + 'px';
        });

        card.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });

    // Theme Toggle
    // const themeToggleButton = document.createElement('button');
    // themeToggleButton.innerText = 'Toggle Theme';
    // themeToggleButton.classList.add('theme-toggle-button');
    // document.body.appendChild(themeToggleButton);

    const themeToggleButton = document.getElementById('theme-toggle-button');

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        // navLinks.forEach(link => link.classList.toggle('light-theme'));
    });
});

function checkPremiumUser(gameUrl) {
    const isPremiumUser = confirm("Are you a premium user? Click OK if you are, Cancel if you are not.");
    if (isPremiumUser) {
        window.location.href = gameUrl;
    } else {
        alert("Sorry, only premium users can access this game. Please log in as a premium user.");
    }
}
