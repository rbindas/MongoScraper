// Scraping tools
var cheerio = require("cheerio")
var axios = require("axios");

// Make a request call to grab the HTML body from the site of your choice
request("https://www.npr.org/sections/art-design/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  $("h2.title").each(function(i, element) {

    var link = $(element).children().attr("href");
    var title = $(element).children().text();
    var teaser = $(element).parent().find("p.teaser").find("a").text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link,
      teaser: teaser
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});


module.export = scrape;

