const createCard = (post, cast, containerId) => {

  const postCards = document.getElementById(containerId)

  const card = document.createElement('div')
  card.className = 'posts__card'

  const gallery = document.createElement('div')
  gallery.classList.add('posts__gallery')
  gallery.classList.add(`grid__${post.images.length}`)

  post.images.forEach((img, i) => {
    
    const wrapper = document.createElement('div');
    wrapper.className = 'image-wrapper';
    wrapper.tabIndex = 0;

    const image = document.createElement('img');
    image.src = `images/${img}`;
    image.alt = `IMAGE ${i} OF "${post.title}" post`;

    const overlay = document.createElement('span');
    overlay.className = 'view-text';
    overlay.textContent = 'VIEW';

    wrapper.appendChild(image);
    wrapper.appendChild(overlay);
    gallery.appendChild(wrapper);

    const modal = document.createElement('dialog');

    const openModal = () => {
      modal.innerHTML = '';
      const modalImage = image.cloneNode(true);
      const button = document.createElement('button');
      const close = document.createElement('img');
      close.src = 'images/close.png';
      button.appendChild(close);

      button.addEventListener('click', () => modal.close());

      modal.appendChild(modalImage);
      modal.appendChild(button);
      modal.showModal();
    };

    wrapper.addEventListener('click', openModal);

    card.appendChild(modal);
  });

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
  date.textContent = post.date
  date.className = `posts__date`
  body.appendChild(date)

  card.appendChild(gallery)
  card.appendChild(body)
  postCards.appendChild(card)
}

export default createCard