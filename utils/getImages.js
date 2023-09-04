const puppeteer = require('puppeteer');

const getImages = async (searchTerm) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(`https://en.wikipedia.org/wiki/${searchTerm}`);

  const data = await page.evaluate(() => {
    const pictures = document.getElementsByTagName('img');
    const imageSourceArr = [];

    for (let i = 0; i < pictures.length; i++) {
      imageSourceArr.push(pictures[i].src);
    }
    return imageSourceArr;
  });
  return data;
};

module.exports = { getImages };
