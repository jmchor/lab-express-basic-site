const catButton = document.getElementById('cat-hobbies');
const listContainer = document.getElementById('hobbies-list');
const list = document.createElement('ul');
let buttonIsPressed = false;

const hobbies = ['Hanging out', 'Eating', 'Being fluffy', 'Chasing the red dot', 'Biting stuff sometimes', 'Sleeping'];

function createHobbies() {
	if (!buttonIsPressed)
		hobbies.forEach((hobby) => {
			let listItem = document.createElement('li');
			listItem.innerText = hobby;
			list.appendChild(listItem);
		});

	listContainer.appendChild(list);
	buttonIsPressed = true;
}

catButton.addEventListener('click', createHobbies);
