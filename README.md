# Web Scraper Project

I was given the idea to write a web scraper by a friend, so here it is. Well, the backend at least.

This is the important bit. Simple api serving up the result of an instance of a headless puppeteer window.

I wanted to test it out on a website that a certain uniformity to it.

So I deceided to make it a very specific web scraper. One that would only scrape the pictures from wiki articles.

Hence the reason I hardcoded my baseUrl as the wiki domain. The user would enter a search topic in the front end input box. This would then fire off a get request (with a body - being the search params).
And the api handler function would take this param and insert it into the url to scrape.

I had to do some conditional logic to make sure it left out the 'svg's and some other wiki images.

The front end github is here - https://github.com/jamesyuill/webscraper-fe
