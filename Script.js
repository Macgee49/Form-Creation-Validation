// script.js

// Select the registration form and add an event listener for form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the feedback element and clear any previous messages
    const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = 'none';
    feedbackDiv.innerHTML = '';
  
    // Get and trim the form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    // Initialize an array to collect error messages
    const errors = [];
  
    // Validate username: Check if it's at least 3 characters long
    if (username.length < 3) {
      errors.push('Username must be at least 3 characters long.');
    }
  
    // Validate email: Check for the presence of "@" and a dot (".") after "@"
    const atSymbol = email.indexOf('@');
    const dot = email.lastIndexOf('.');
    if (atSymbol < 1 || dot < atSymbol + 2 || dot + 2 >= email.length) {
      errors.push('Please enter a valid email address.');
    }
  
    // Validate password: Check if it's at least 6 characters long
    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }
  
    // If there are errors, display them; otherwise, show a success message
    if (errors.length > 0) {
      feedbackDiv.style.display = 'block';
      feedbackDiv.style.backgroundColor = '#ffbaba';
      feedbackDiv.style.color = '#d8000c';
      feedbackDiv.innerHTML = errors.join('<br>');
    } else {
      feedbackDiv.style.display = 'block';
      feedbackDiv.style.backgroundColor = '#dff2bf';
      feedbackDiv.style.color = '#4f8a10';
      feedbackDiv.innerHTML = 'Registration successful!';
      // Optionally, reset the form if needed:
      // document.getElementById('registration-form').reset();
    }
  });
  