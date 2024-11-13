// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').textContent = `Thank you for reaching out, ${name}! Your message has been received.`;
        document.getElementById('contactForm').reset(); // Reset form fields
    } else {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
    }
});
