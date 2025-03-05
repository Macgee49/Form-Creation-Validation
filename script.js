document.addEventListener('DOMContentLoaded', () => {
    // Form and feedback div selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and error messages
        let isValid = true;
        const messages = [];

        // Username must be at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email must contain both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must be a valid email address.");
        }

        // Password must be at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display the feedback message
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            // Optional: change background for success feedback
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            // Join all error messages with a line break
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            // Optional: change background for error feedback
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
