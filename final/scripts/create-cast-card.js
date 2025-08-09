const createCard = (member, containerId) => {

  const castCards = document.getElementById(containerId)

  const card = document.createElement('div')
  card.className = 'cast__card'

  const header = document.createElement('div')
  header.className = 'cast__header'

  const image = document.createElement('img')
  image.src = member.image ? `images/${member.image}` : 'images/default.jpg'
  image.alt = `IMAGE OF ${member.firstName} ${member.lastName}`
  image.loading = 'lazy'
  header.appendChild(image)

  const role = document.createElement('p')
  role.textContent = member.role?.toUpperCase() || ''
  header.appendChild(role)

  const body = document.createElement('div')
  body.className = 'cast__body'

  const name = document.createElement('h3')
  name.textContent = `${member.firstName} ${member.lastName}`.toUpperCase()
  body.appendChild(name)

  const description = document.createElement('p')
  description.textContent = member.description || ''
  body.appendChild(description)

  card.appendChild(header)
  card.appendChild(body)
  castCards.appendChild(card)
}

export default createCard