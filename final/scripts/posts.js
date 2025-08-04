import fetchData from './fetch.js'

const postCards = document.getElementById('posts-cards')

const cast = await fetchData('data/cast.json')

const createCard = (post) => {
  const card = document.createElement('div')
  card.className = 'posts__card'

  const gallary = document.createElement('div')
  gallary.classList.add('posts__gallary')
  gallary.classList.add(`grid__${post.images.length}`)

  post.images.forEach((img, i) => {

    const image = document.createElement('img')
    image.src = `images/${img}`
    image.alt = `IMAGE ${i} OF "${post.title}" post`
    gallary.appendChild(image)


    const modal = document.createElement('dialog')

    image.addEventListener('click', () => {

      modal.innerHTML = '';
      const modalImage = image.cloneNode(true);
      const button = document.createElement('button')
      const close = document.createElement('img')
      close.src = 'images/close.png'
      button.appendChild(close)

      close.addEventListener('click', () => {
        modal.close()
      })

      modal.appendChild(modalImage);
      modal.appendChild(button)
      modal.showModal();
    });

    card.appendChild(modal);
  })

  const body = document.createElement('div')
  body.className = 'posts__body'

  const header = document.createElement('div')
  header.className = 'posts__header'

  const title = document.createElement('h3')
  title.textContent = post.title.toUpperCase()
  header.appendChild(title)

  const author = document.createElement('p')
  author.textContent = `Posted By: ${cast.find(member => member.id === post.author).firstName}`.toUpperCase()
  header.appendChild(author)

  body.appendChild(header)

  const description = document.createElement('p')
  description.textContent = post.content
  body.appendChild(description)

  const date = document.createElement('p')
  date.textContent = new Date(post.date).toDateString().toUpperCase()
  date.className = `posts__date`
  body.appendChild(date)

  card.appendChild(body)
  card.appendChild(gallary)
  postCards.appendChild(card)
}

const main = async () => {
  const posts = await fetchData('data/posts.json')
  posts.forEach(createCard)
}

main()