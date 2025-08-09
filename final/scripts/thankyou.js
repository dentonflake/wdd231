
const getQueryParams = () => {
  return Object.fromEntries(new URLSearchParams(window.location.search))
}

const validateRequiredFields = (queryParameters) => {

  const requiredFields = [
    "name",
    "phone",
    "message"
  ]

  return requiredFields.every(key => queryParameters[key] && queryParameters[key] !== "")
}

const formatPhoneNumber = (phone) => {

  const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phone;
};


const queryParameters = getQueryParams()

if (!validateRequiredFields(queryParameters)) {
  window.location.href = "contact.html";
}

const {
  name,
  phone,
  message
} = queryParameters

document.getElementById('name').textContent = `${name}`;
document.getElementById('phone').textContent = formatPhoneNumber(phone);
document.getElementById('message').textContent = `${message}`;

if (localStorage.getItem('hasVisited') === 'true') {
  document.getElementById('subtitle').innerHTML = `<strong>It looks like you have reached out to us before!</strong> We appreciate you contributing to our family story!`
}

localStorage.setItem('hasVisited', 'true');