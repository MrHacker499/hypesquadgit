const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
      if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS") )
          return message.reply("Sorry, you don't have permissions to use this!");

        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Please mention a valid member of this server");
        if(!member.kickable)
          return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

        let reason = args.slice(1).join(' ');
        if(!reason)
          return message.reply("Please indicate a reason for the kick!");

        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't n't kick because of : ${error}`));
        var banmsg = message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`)
        member.send(`You have been banned on ${message.guild.name}, by ${message.author.tag}, because of ${reason}`)
        var logs = message.guild.channels.find("name", "logs")
        if(!logs) {
          message.reply(banmsg + ", but there no logs channels so i can't send in there so create one")
        } else {
          logs.send("", {
            embed: new Discord.RichEmbed()
            .setTitle("A member has been kicked")
            .setDescription(`${member.user.tag} has been kicked by ${message.author.tag} Reason : \n${reason}`)
            .setTimestamp()
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL)
            .setColor("RANDOM")
          })
        }
}
