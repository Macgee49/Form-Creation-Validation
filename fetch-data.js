// Wait for the DOM to load before executing the function
document.addEventListener('DOMContentLoaded', fetchUserData);

async function fetchUserData() {
  // Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Select the data container element where user data will be displayed
  const dataContainer = document.getElementById('api-data');

  try {
    // Asynchronously fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create a <ul> element to list user names
    const userList = document.createElement('ul');

    // Loop through each user and create a list item for their name
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // In case of an error, clear the container and display an error message
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}
