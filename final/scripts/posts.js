import fetchData from './fetch.js'
import createCard from './create-post-card.js'

const postCards = document.getElementById('posts-cards')
const cast = await fetchData('data/cast.json')

const main = async () => {
  const posts = await fetchData('data/posts.json')
  posts.sort((a, b) => a.date < b.date)
  posts.forEach(post => createCard(post, cast, postCards))
}

main()