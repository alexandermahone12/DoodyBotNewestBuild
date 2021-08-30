const request = request('requests')
module.exports = {
    name: "code",
    description: "Runs code in python/c",
    cooldown: 5,
    execute(message, args, cmd, client, Discord, profiledata, commonjson) {
        var input = "";
        var language, index;
        if (args[1] == "C" || args[1] == "c") {
            language = "c";
            index = "0";
        } else if (args[1] == "python") {
            language = "python3";
            index = "3";
        }
        var fileName = message.attachments.array()[0];
        for (var i = 2; i < args.length; i++) input += args[i] + " ";

        request.get(fileName.url, (err, response, body) => {
            const runRequestBody = {
            script: body,
            language: language,
            stdin: input,
            versionIndex: index,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            };
            request
            .post({
                url: "https://api.jdoodle.com/execute",
                json: runRequestBody,
            })
            .on("error", (error) => {
                console.log("request.post error", error);
                return;
            })
            .on("data", (data) => {
                const parsedData = JSON.parse(data.toString());
                if (parsedData.error) {
                return;
                } else {
                var output = "";
                for (var i = 0; i < parsedData.output.length; i++) {
                    if (parsedData.output[i] == "\n") output += "\n";
                    else output += parsedData.output[i];
                }
                let outputOfProgram = new Discord.MessageEmbed()
                    .setAuthor(client.user.username)
                    .setDescription("Result!!!")
                    .setColor("33FFB3")
                    .setDescription(output);
                message.channel.send(outputOfProgram);
                return;
                }
            });
        });
    }
}