var request = require('request');
var cheerio = require('cheerio');
var link = "https://www.reddit.com/r/" + process.argv[2];

request(link, function(error, response, html) {
    console.log(html);
    var $ = cheerio.load(html);
    var result = [];
    $('p.title').each(function(i, element) {
        var title = $(this).text();
        var link = $(element).children().attr('href');
        var description = $(this).text();

        result.push({
            title: title,
            link: link
        })
    })
    console.log(result);
})
