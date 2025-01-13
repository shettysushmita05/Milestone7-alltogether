document.addEventListener('DOMContentLoaded', displayStoredData);

document.getElementById('addButton').addEventListener('click', () => {
  const key = document.getElementById('key').value.trim();
  const value = document.getElementById('value').value.trim();
  const message = document.getElementById('message');

  if (!key || !value) {
    message.textContent = 'Both key and value are required!';
    message.style.color = 'red';
    return;
  }

  if (localStorage.getItem(key) !== null) {
    message.textContent = `Key "${key}" already exists! Please use a different key.`;
    message.style.color = 'red';
    return;
  }

  localStorage.setItem(key, value);
  message.textContent = `Key "${key}" added successfully.`;
  message.style.color = 'green';

  clearInputs();
  displayStoredData();
});

document.getElementById('retrieveButton').addEventListener('click', () => {
  const key = document.getElementById('key').value.trim();
  const message = document.getElementById('message');

  if (!key) {
    message.textContent = 'Key is required to retrieve a value!';
    message.style.color = 'red';
    return;
  }

  const value = localStorage.getItem(key);

  if (value) {
    message.textContent = `The value for key "${key}" is "${value}".`;
    message.style.color = 'green';
  } else {
    message.textContent = `No value found for key "${key}".`;
    message.style.color = 'red';
  }
});

document.getElementById('deleteButton').addEventListener('click', () => {
  const key = document.getElementById('key').value.trim();
  const message = document.getElementById('message');

  if (!key) {
    message.textContent = 'Key is required to delete a value!';
    message.style.color = 'red';
    return;
  }

  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    message.textContent = `Key "${key}" deleted successfully.`;
    message.style.color = 'green';
  } else {
    message.textContent = `Key "${key}" does not exist.`;
    message.style.color = 'red';
  }

  clearInputs();
  displayStoredData();
});

function displayStoredData() {
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = ''; // Clear existing rows

  // Retrieve keys and sort them in ascending order
  const sortedKeys = Object.keys(localStorage).sort();

  sortedKeys.forEach((key) => {
    const value = localStorage.getItem(key);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${key}</td>
      <td>${value}</td>
      <td><button onclick="deleteRow('${key}')">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteRow(key) {
  localStorage.removeItem(key);
  displayStoredData();
}

function clearInputs() {
  document.getElementById('key').value = '';
  document.getElementById('value').value = '';
}
