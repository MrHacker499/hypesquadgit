const Discord = require("discord.js")
var bot = new Discord.Client()
bot.login(process.env["TOKEN"])
var prefix = "!"

bot.on("ready", () => {
  bot.user.setGame('!help | PREMIUM')
})

bot.on("message", message => {
  if(message.channel.type === "dm") return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    try {
     let commandFile = require(`./commands/${command}.js`);
     commandFile.run(bot, message, args);
    } catch (err) {
      console.log(err);
       message.reply("Cant run file. ```" + err.stack + "```")
        bot.channels.get('1').send("", {
 	       embed: new Discord.RichEmbed()
 	   	   .setTitle(":x: AN ERROR OCCURRED :x:")
 		     .setDescription(err.stack)
 		     .setColor("#ff0000")
         .setTimestamp()
         .setFooter(`${message.author.id} | ${message.guild.name}`, message.guild.iconURL)
 	     });
     }
});