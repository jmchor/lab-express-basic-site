let allCards = document.getElementsByClassName('card');
let allLinks = document.getElementsByClassName('cat-link');


async function catGallery() {
	try {
		const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
		const data = await response.json();


		for (let i = 0; i < data.length; i++) {
			let newCat = document.createElement('img');
		    newCat.style.width = '200px';
            newCat.style.height = '200px';
			let allCardsArray = Array.from(allCards);
            let allLinksArray = Array.from(allLinks);
            allLinksArray[i].href = data[i].url;
			newCat.src = data[i].url;
			allCardsArray[i].appendChild(newCat);
		}
	} catch (error) {
		console.log(error);
	}
}

window.onload = () => {
    catGallery();
};