const catButton = document.getElementById('cat-hobbies');
const maybeCatButton = document.getElementById('maybe-cat');
const listContainer = document.getElementById('hobbies-list');
const list = document.createElement('ul');
const imageContainer = document.getElementById('image-container');
const catImage = document.getElementById('cat-image');
const generateCatButton = document.getElementById('maybe-cat');
const wrongCatButton = document.getElementById('wrong-cat');

const hobbies = ['Hanging out', 'Eating', 'Being fluffy', 'Chasing the red dot', 'Biting stuff sometimes', 'Sleeping'];
let buttonIsPressed = false;

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

async function fetchCatImage() {
	try {
		catImage.src = '';
		const response = await fetch('https://api.thecatapi.com/v1/images/search');
		const data = await response.json();
		catImage.src = data[0].url;
		catImage.style.height = '400px';
		imageContainer.appendChild(catImage);
		imageIsRendered = true;

	} catch (error) {
		console.log(error);
	}
}



window.onload = () => {
	fetchCatImage();


};

catButton.addEventListener('click', createHobbies);
maybeCatButton.addEventListener('click', fetchCatImage);
