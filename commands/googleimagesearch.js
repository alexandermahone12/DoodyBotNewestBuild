var cheerio = require('cheerio');
var request = require('request');
module.exports = {
    name: "search",
    description: "Generates a google image based on keyword",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
            var search = args.join(' ');
    
            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + search,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function(error, response, responseBody) {
                if (error) {
                    // handle error
                    return;
                }
        
                /* Extract image URLs from responseBody using cheerio */
        
                $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
        
                // In this search engine they use ".image a.link" as their css selector for image links
                var links = $(".image a.link");
        
                // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
                // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                console.log(urls);
                if (!urls.length) {
                    // Handle no results
                    return;
                }
        
                // Send result
                message.channel.send( urls[0] );
        });
 


        }
    }
}