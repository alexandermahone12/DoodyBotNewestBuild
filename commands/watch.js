module.exports = {
    name: 'watch',
    description: "Sends a link for the wanted show",
    cooldown: 10,
    execute(message, args, cmd, client, Discord, profiledata, commonjson){
        const string = `
        
        Rami Malek	Rami Malek	...	 Elliot Alderson46 episodes, 2015-2019 
        Christian Slater	Christian Slater	...	 Mr. Robot45 episodes, 2015-2019 
        Carly Chaikin	Carly Chaikin	...	 Darlene43 episodes, 2015-2019 
        Martin Wallström	Martin Wallström	...	 Tyrell Wellick38 episodes, 2015-2019 
        Portia Doubleday	Portia Doubleday	...	 Angela Moss36 episodes, 2015-2019 
        Michael Cristofer	Michael Cristofer	...	 Phillip Price32 episodes, 2015-2019 
        Grace Gummer	Grace Gummer	...	 Dominique DiPierro31 episodes, 2016-2019 
        BD Wong	BD Wong	...	 Whiterose22 episodes, 2015-2019 
        Stephanie Corneliussen	Stephanie Corneliussen	...	 Joanna Wellick21 episodes, 2015-2017 
        Vaishnavi Sharma	Vaishnavi Sharma	...	 Elliot's Mother17 episodes, 2015-2019 
        Gloria Reuben	Gloria Reuben	...	 Krista Gordon16 episodes, 2015-2019 
        Sunita Mani	Sunita Mani	...	 Trenton16 episodes, 2015-2019 
        Azhar Khan	Azhar Khan	...	 Mobley15 episodes, 2015-2019 
        Joey Bada$$	Joey Bada$$	...	 Leon13 episodes, 2016-2019 
        Omar Metwally	Omar Metwally	...	 Agent Santiago13 episodes, 2016-2017 
        `
        if(!args.length){
            const embed = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle('Watch command')
            .setDescription('This command sends you info of wanted shows on netflix')
            .setFooter('Use `!watch list` to get the list of shows available')
            message.channel.send(embed)
            return;
        }
        if (args[0] === 'MrRobot' || 'mrrobot'){
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultcolor)
            .setTitle('Netflix -- `MrRobot 2015-2019`')
            .addFields(
                { name:"Description", value:"`Elliot, a cyber-security engineer suffering from anxiety, works for a corporation and hacks felons by night. Panic strikes him after Mr Robot, a cryptic anarchist, recruits him to ruin his company.`", inline: true },
                { name:"Where to watch", value:"`Netflix` \n `Amazon prime` \n `weirdo sites (123movies.com)` ", inline: true},
                { name:"Statistics", value:"`IMDb rating: 8.9/10 (350K)` \n `rottentomatoes rating: Liked by 94%`", inline: true},
                { name:"Cast", value:"`" + `${string}` + "`", inline: true},
            )
            .setFooter('Use `!watch list` to get the list of shows available')
            .setThumbnail('https://www.filmandtvnow.com/wp-content/uploads/2016/07/mrrobot-banner.jpg')
            const mrrobot_button = new MessageButton()
                .setStyle("url")
                .setLabel("Watch here")
                .setURL('https://www.netflix.com/browse?jbv=80045933')
            message.channel.send(embed2, mrrobot_button);
        }
    }
}