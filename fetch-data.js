// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Asynchronously fetch data from the API
        const response = await fetch(apiUrl);
        // Convert the response to JSON format
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of user names
        const userList = document.createElement('ul');

        // Loop through the array of users and create a list item for each user name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // In case of error, clear the loading message and display an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Ensure the function is called after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
