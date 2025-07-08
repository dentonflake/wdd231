
const spotlightsContainer = document.getElementById('spotlight-cards');

const getMembershipLevel = (level) => {
    switch (level) {
        case 1:
            return 'Basic'
        case 2:
            return 'Silver'
        case 3:
            return 'Gold'
        default:
            return 'Unknown'
    }
}

const getRandomItems = (array, count) => {

    const shuffled = array
        .sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
}

const getMembers = async () => {

    try {

        const response = await fetch('./data/members.json');

        if (!response.ok) {
            throw new Error('Failed to fetch members.json');
        }

        return await response.json();

    } catch (error) {

        console.error('Error loading members:', error);
    }
}

const createMembers = async () => {

    const members = await getMembers();

    const qualified = members.filter(member => member.membershipLevel > 1);
    const spotlightMembers = getRandomItems(qualified, 3);

    spotlightMembers.forEach(member => {

        const card = document.createElement("div");
        const details = document.createElement("div");

        card.className = "members__card";
        details.className = "members__card__details";

        const image = document.createElement("img");
        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = member.name;
        details.appendChild(name);

        const address = document.createElement("p");
        address.textContent = member.address;
        details.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = member.phone;
        details.appendChild(phone);

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = member.website;
        website.target = "_blank";
        details.appendChild(website);

        const description = document.createElement("p");
        description.textContent = `${getMembershipLevel(member.membershipLevel)} Member`;
        details.appendChild(description);

        card.appendChild(details);
        spotlightsContainer.appendChild(card);
    });
}

createMembers();