
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

console.log(queryParameters)

document.getElementById('business-name').textContent = businessName;
document.getElementById('membership').textContent = membership;
document.getElementById('name').textContent = `${firstName} ${lastName}`;
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = phone;
document.getElementById('timestamp').textContent = new Date(timestamp).toLocaleString();
document.getElementById('description').textContent = description?.trim() || "No description provided.";

// Add optional org title if present
if (orgTitle) {
  const domOrgTitle = document.createElement('span');
  domOrgTitle.className = "request__position";
  domOrgTitle.textContent = `, ${orgTitle}`;

  document.getElementById('person').appendChild(domOrgTitle);
}