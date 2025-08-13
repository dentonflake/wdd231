import fetchData from './fetch.js'
import createCard from './create-post-card.js'

const cast = await fetchData('data/cast.json')

const main = async () => {
  const posts = await fetchData('data/posts.json')
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  posts.forEach(post => createCard(post, cast, 'posts-cards'))
}

main()