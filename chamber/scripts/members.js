
const membersContainer = document.getElementById('member-cards');
const displayGrid = document.getElementById('grid');
const displayList = document.getElementById('list');

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

const createMembers = async (style = 'grid') => {

    membersContainer.innerHTML = "";

    const members = await getMembers();

    members.forEach(member => {

        const card = document.createElement("div");
        const details = document.createElement("div");

        if (style === 'grid') {

            membersContainer.classList.add('members__grid');
            membersContainer.classList.remove('members__list');

            card.className = "members__card";
            details.className = "members__card__details";

        } else {

            membersContainer.classList.add('members__list');
            membersContainer.classList.remove('members__grid');

            card.className = "members__list__item";
            details.className = "members__list__item__details";
        }

        if (style === 'grid') {
            const image = document.createElement("img");
            image.src = `images/${member.image}`;
            image.alt = `${member.name} logo`;
            card.appendChild(image);
        }

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

        if (style === 'grid') {
            const description = document.createElement("p");
            description.textContent = member.description;
            details.appendChild(description);
        }

        card.appendChild(details);
        membersContainer.appendChild(card);
    });
}

const setDisplayGrid = () => {

    createMembers();

    displayGrid.classList.add('members__option__selected');
    displayList.classList.remove('members__option__selected');
}

const setDisplayList = () => {

    createMembers('list');

    displayGrid.classList.remove('members__option__selected');
    displayList.classList.add('members__option__selected');
}

setDisplayGrid();

displayGrid.addEventListener('click', setDisplayGrid);
displayList.addEventListener('click', setDisplayList);