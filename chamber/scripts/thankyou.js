
const getQueryParams = () => {
  return Object.fromEntries(new URLSearchParams(window.location.search))
}

const validateRequiredFields = (queryParameters) => {

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "businessName",
    "membership",
    "timestamp"
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
  window.location.href = "join.html";
}

const {
  firstName,
  lastName,
  email,
  phone,
  businessName,
  membership,
  timestamp,
  description,
  orgTitle
} = queryParameters

document.getElementById('welcome').textContent = `${firstName}`;
document.getElementById('business-name').textContent = businessName;
document.getElementById('membership').textContent = `${membership} Member`;
document.getElementById('name').textContent = `${firstName} ${lastName}`;
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = formatPhoneNumber(phone);
document.getElementById('timestamp').textContent = new Date(timestamp).toLocaleString();