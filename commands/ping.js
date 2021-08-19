
module.exports = {

    name: 'ping',
    description: "says hi",
    execute(message, args, cmd, client, Discord, profiledata) {
        
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);

    }
 
}