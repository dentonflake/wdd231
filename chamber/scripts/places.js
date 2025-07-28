
const getPlaces = async () => {

    try {

        const response = await fetch('./data/places.json');

        if (!response.ok) {
            throw new Error('Failed to fetch places.json');
        }

        return await response.json();

    } catch (error) {

        console.error('Error loading places:', error);
    }
}

const createCards = async () => {

    placesContainer.innerHTML = "";

    const places = await getPlaces();

    places.forEach(place => {

        const card = document.createElement("div");
        card.className = "places__card"

        const details = document.createElement("div");
        details.className = "places__details"

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = place.image;
        img.alt = `Image of ${place.name}`;
        figure.appendChild(img);

        // const caption = document.createElement("figcaption");
        // caption.textContent = place.name;
        // figure.appendChild(caption);

        card.appendChild(figure);
        
        const name = document.createElement("h2");
        name.textContent = place.name;
        details.appendChild(name);

        const address = document.createElement("address");
        address.textContent = place.address;
        details.appendChild(address);

        const description = document.createElement("p");
        description.textContent = place.description;
        details.appendChild(description);

        const more = document.createElement("button");
        more.textContent = "LEARN MORE"
        details.append(more);

        card.appendChild(details);
        placesContainer.appendChild(card);
    });
}

const placesContainer = document.getElementById('places-cards');

createCards();

const lastVisited = localStorage.getItem('lastVisited');
const message = document.getElementById('message');

if (lastVisited) {

    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const millisecondsSinceLastVisit = new Date().getTime() - new Date(lastVisited).getTime()
    const daysSinceLastVisit = Math.floor(millisecondsSinceLastVisit / millisecondsInADay)

    if (millisecondsSinceLastVisit > millisecondsInADay) {

        message.textContent = `You visited ${daysSinceLastVisit} day${ daysSinceLastVisit > 1 ? "s" : ""} ago.`

    } else {

        message.textContent = `Back so soon! Awesome!`
    }
}

localStorage.setItem(`lastVisited`, new Date().toISOString());