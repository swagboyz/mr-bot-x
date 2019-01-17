const Discord = require("discord.js");

const PREFIX = "@";





var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "idk"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("IT'S ALIVE!");
});



bot.on('ready', () => { bot.user.setActivity('@help  |  @h') })


bot.on("guildMemberAdd", member => {



bot.on("message", function(message) {
    let guild = member.guild;
    guild.defaultChannel.sendMessage("Welcome ${member.user} to the RaverCityX server! Please state your Xbox gamertag."}.catch(console.error);
});
    


    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        
        case "ping":
            message.channel.send('Pong! Your pong is `' + `${Date.now() - message.createdTimestamp}` + ' ms`')
            break;
        case "8ball": 
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("Can't read that.");
            break;
        case "helpm":
            var embed = new Discord.RichEmbed()
                .addField("kick", "Kick any member by tagging them.")
                .addField("say", "Has the bot say something in chat. Useful for adding rules.")
                .addField("ban", "Ban anyone with a simple command!")
                .setColor(0x000000)
                .setFooter("Developed by SemperP4r4tus#4589", message.author.avatarURL)
            message.channel.send(embed);
            message.delete();
        break;
        case "helpc":
            var embed = new Discord.RichEmbed()
                .addField("stats", "Know the stats of Slashbot!")
                .addField("ping", "Get your pong message!")
                .addField("noticeme", "Your senpai will notice you.")
                .addField("8ball", "Ask Slashbot a question from the mystical magic 8 ball!")
                .addField("help/h", "Get help")
                .setFooter("Not case-sensitive", message.author.avatarURL)
            message.delete();
            message.channel.send(embed);
        break;
        case "help":
        var embed = new Discord.RichEmbed()
        .addField("helpm", "Commands that only the Owner, Admin, and Moderator roles can use.")
        .addField("helpc", "Commands for everyone to use.")
        .setColor(0x000000)
        .setFooter("These are not case-sensitive.")
        .setThumbnail(message.author.avatarURL);
        message.author.send(embed);
        message.channel.send("I sent you a message!")  
        message.delete();

        break;
        case "h":
            message.channel.send("I sent you a message!") 
            message.delete();
            var embed = new Discord.RichEmbed()
                .addField("mhelp", "Commands that only the Owner, Admin, and Moderator roles can use.")
                .addField("ehelp", "Commands for everyone to use.")
                .setColor(0x000000)
                .setFooter("These are not case-sensitive.")
                .setThumbnail(message.author.avatarURL);
            message.author.send(embed);
        break;
        case "noticeme":
            message.channel.send(message.author.toString() + "  *Senpai notices you from afar*");
            break;
        case "say":
                if (!message.member.roles.some(r=>["Owner", "Admin", "Moderator"].includes(r.name))) return message.channel.send("You don't have the permissions for this command!");
                message.delete();
                let text = args.slice(1).join(" ");
                message.channel.send(text);
        break;
        case "kick":
                if (!message.member.roles.some(r=>["Owner", "Admin", "Moderator"].includes(r.name))) return message.channel.send("You don't have the permissions for this command!");
                let member = message.mentions.members.first();
                member.kick();
        break;
        case "ban":
                if (!message.member.roles.some(r=>["Owner", "Admin", "Moderator"].includes(r.name))) return message.channel.send("You don't have the permissions for this command!");
                let banMember = message.guild.member(message.mentions.users.first());
                banMember.ban ()
        break;

    
    }
});

client.login(process.env.BOT_TOKEN);