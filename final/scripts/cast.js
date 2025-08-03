
const castCards = document.getElementById('cast-cards')

const fetchData = async (url) => {

  try {

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Recieved a bad response from: ${url}`)
    }

    return await response.json()

  } catch (error) {

    console.error(`Failed to fetch data from: ${url}`, error)
  }
}

const createCard = (member) => {

  const card = document.createElement('div')
  card.className = 'cast__card'







  const header = document.createElement('div')
  header.className = 'cast__header'

  const image = document.createElement("img")
  image.src = `images/${member.image}`
  image.alt = `IMAGE OF ${member.firstName} ${member.lastName}`
  header.appendChild(image)

  const role = document.createElement('p')
  role.textContent = member.role.toUpperCase()
  header.appendChild(role)






  
  const body = document.createElement('div')
  body.className = 'cast__body'

  const name = document.createElement('h3')
  name.textContent = `${member.firstName} ${member.lastName}`.toUpperCase()
  body.appendChild(name)

  const description = document.createElement('p')
  description.textContent = `${member.description}`
  body.appendChild(description)










  card.appendChild(header)
  card.appendChild(body)
  castCards.appendChild(card)
}

const main = async () => {
  const cast = await fetchData('data/cast.json')
  cast.forEach(member => createCard(member))
}

main()



















// const createMembers = async (style = 'grid') => {

//   membersContainer.innerHTML = ""

//   const members = await getMembers()

//   members.forEach(member => {

//     const card = document.createElement("div")
//     const details = document.createElement("div")

//     if (style === 'grid') {

//       membersContainer.classList.add('members__grid')
//       membersContainer.classList.remove('members__list')

//       card.className = "members__card"
//       details.className = "members__card__details"

//     } else {

//       membersContainer.classList.add('members__list')
//       membersContainer.classList.remove('members__grid')

//       card.className = "members__list__item"
//       details.className = "members__list__item__details"
//     }

//     if (style === 'grid') {
//       const image = document.createElement("img")
//       image.src = `images/${member.image}`
//       image.alt = `${member.name} logo`
//       card.appendChild(image)
//     }

//     const name = document.createElement("h3")
//     name.textContent = member.name
//     details.appendChild(name)

//     const address = document.createElement("p")
//     address.textContent = member.address
//     details.appendChild(address)

//     const phone = document.createElement("p")
//     phone.textContent = member.phone
//     details.appendChild(phone)

//     const website = document.createElement("a")
//     website.href = member.website
//     website.textContent = member.website
//     website.target = "_blank"
//     details.appendChild(website)

//     if (style === 'grid') {
//       const description = document.createElement("p")
//       description.textContent = member.description
//       details.appendChild(description)
//     }

//     card.appendChild(details)
//     membersContainer.appendChild(card)
//   })
// }

// const setDisplayGrid = () => {

//   createMembers()

//   displayGrid.classList.add('members__option__selected')
//   displayList.classList.remove('members__option__selected')
// }

// const setDisplayList = () => {

//   createMembers('list')

//   displayGrid.classList.remove('members__option__selected')
//   displayList.classList.add('members__option__selected')
// }

// setDisplayGrid()

// displayGrid.addEventListener('click', setDisplayGrid)
// displayList.addEventListener('click', setDisplayList)