import fetchData from './fetch.js'
import createCard from './create-cast-card.js'


const main = async () => {

  const cast = await fetchData('data/cast.json')

  if (cast && Array.isArray(cast)) {
    cast.forEach(member => createCard(member, 'cast-cards'))
  }

}

main()