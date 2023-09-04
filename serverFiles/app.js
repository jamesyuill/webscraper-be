const express = require('express');
const { getImages } = require('../utils/getImages');
const app = express();

const { PORT = 8080 } = process.env;

app.get('/images', async (req, res) => {
  const images = await getImages();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
