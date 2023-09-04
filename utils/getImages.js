const puppeteer = require('puppeteer');

export const getImages = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Simon_Le_Bon');

  const data = await page.evaluate(() => {
    const pictures = document.getElementsByTagName('img');
    const imageSourceArr = [];

    for (let i = 0; i < pictures.length; i++) {
      imageSourceArr.push(pictures[i].src);
    }
    return imageSourceArr;
  });
  console.log(data);
};
