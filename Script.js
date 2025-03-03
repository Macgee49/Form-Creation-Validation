// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    // Form submission event listener with event prevention
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Retrieve and trim user inputs
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Initialize validation variables
      let isValid = true;
      const messages = [];
  
      // Username Validation: must be at least 3 characters long
      if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
      }
  
      // Email Validation: must include both "@" and "."
      if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Email must include an '@' and a '.'.");
      }
  
      // Password Validation: must be at least 8 characters long
      if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
      }
  
      // Display feedback by making feedbackDiv visible
      feedbackDiv.style.display = 'block';
      if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
      } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
      }
    });
  });
  