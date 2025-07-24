
const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear().toString();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const timestampField = document.getElementById('timestamp');

if (timestampField) {
  timestampField.value = new Date().toISOString(); // Example: 2025-07-24T14:52:00.000Z
}