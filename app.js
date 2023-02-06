const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
	res.sendFile('views/about.html', { root: __dirname });
});
app.get('/work', (req, res) => {
	res.sendFile('views/work.html', { root: __dirname });
});
app.get('/gallery', (req, res) => {
	res.sendFile('views/gallery.html', { root: __dirname });
});

app.listen(port, () => console.log(`🏃‍ on port ${port}`));
