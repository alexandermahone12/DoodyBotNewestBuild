var Scrapper = require('images-scraper');

const google = new Scrapper({
    puppeteer: {
        headless: true
    }
})

module.exports = {

    name: 'search',
    description: "Searches the internet for an image!",
    async execute(message, args, cmd, client, Discord) {
        const imagesearch = args.join(' ');
        if (!imagesearch){
            return message.channel.send("What would you like to search the internet for?")
        }
        const results = await google.scrape(imagesearch, 1);
        message.channel.send(results[0].url);

    }   
    
}