
const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear().toString();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;