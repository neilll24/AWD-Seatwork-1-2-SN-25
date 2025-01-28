// JavaScript for smooth scroll and form validation

// Smooth Scroll to top of the page
window.addEventListener('DOMContentLoaded', (event) => {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑ Scroll to Top';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show button when user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
});

// Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission for validation

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields before submitting!');
        return;
    }

    // Simple Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If everything is valid, show confirmation
    alert('Thank you for reaching out! Your message has been sent.');

    // Clear form after submission
    document.querySelector('.contact-form').reset();
});

// Confirmation message upon form submission
function showConfirmationMessage() {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    document.body.appendChild(confirmationMessage);

    setTimeout(() => {
        confirmationMessage.remove();
    }, 5000); // Remove confirmation message after 5 seconds
}
