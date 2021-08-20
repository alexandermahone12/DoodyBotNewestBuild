const GoogleImages = require('google-images');
module.exports = {
    name: "search",
    description: "Generates a google image based on keyword",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata){
        if (message.channel instanceof Discord.DMChannel){
            return message.channel.send("You cannot use this command in DMs")
        }else{
 
            const client = new GoogleImages('1d2a5f5649173afb2', 'AIzaSyCNrPr9riXoc9pFQrrSG52FLn2MHqMnoj0');
             
            client.search('Steve Angello')
                .then(images => {
                    /*
                    [{
                        "url": "http://steveangello.com/boss.jpg",
                        "type": "image/jpeg",
                        "width": 1024,
                        "height": 768,
                        "size": 102451,
                        "thumbnail": {
                            "url": "http://steveangello.com/thumbnail.jpg",
                            "width": 512,
                            "height": 512
                        }
                    }]
                     */
                });
             
            // paginate results
            client.search('Steve Angello', {page: 2});
             
            // search for certain size
            client.search('Steve Angello', {size: 'large'});
 


        }
    }
}