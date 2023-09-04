const express = require('express');
const { getImages } = require('../utils/getImages');
const app = express();

const cors = require('cors');

const { PORT = 8080 } = process.env;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/images', async (req, res) => {
  const { searchTerm } = req.query;
  const allImages = await getImages(searchTerm);
  const images = allImages.filter((url) => {
    return url.match(/(commons)/g) && !url.match(/(svg)/g);
  });

  res.status(200).send({ images });
});

app.use((err, req, res, next) => {
  console.log(err, 'Here"s the Error');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
