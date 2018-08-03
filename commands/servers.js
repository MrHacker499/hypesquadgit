const _discord = require('discord.js')

exports.run = (bot, message, args) => {
	var authors = ["358053007239282698", "262410813254402048"];
    if(!authors.includes(message.author.id)) {
		const guilds = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.username} :: ${g.members.size} users :: ${g.channels.size} channels`).slice(0, 15).join('\n')
		const guilds2 = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.username} :: ${g.members.size} users :: ${g.channels.size} channels`).slice(16, 31).join('\n')
		const guilds3 = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.tag} :: ${g.members.size} users :: ${g.channels.size} channels`).slice(32, 45).join('\n')
		message.author.send(`= Prisim's Servers Part 1 =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n ${guilds}`, {code:'asciidoc'});
		message.author.send(`= Prisim's Servers Part 2 =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n ${guilds2}`, {code:'asciidoc'});
		message.author.send(`= Prisim's Servers Part 3 =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n ${guilds3}`, {code:'asciidoc'});
		message.channel.send({
            embed: {
                color: 0x503d82,
                description: "Servers list was sent to your DMs :mailbox_with_mail:"
            }
        })
    } else {
			const guilds = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.tag} :: ${g.members.size} users :: ${g.channels.size} channels`).slice(0, 15).join('\n')
			const guilds2 = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.tag} :: ${g.members.size} users :: ${g.channels.size} channels`).slice(16, 31).join('\n')
			const guilds3 = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.tag} :: ${g.members.size} users :: ${g.channels.size} channels`).slice(32, 45).join('\n')
		message.author.send(`= HypeSquad's Servers Part 1 =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n${guilds}`, {code:'asciidoc'});
		message.author.send(`= HypeSquad's Servers Part 2 =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n${guilds2}`, {code:'asciidoc'});
		message.author.send(`= HypeSquad's Servers  Part 3 =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n${guilds3}`, {code:'asciidoc'});
		message.channel.send({
            embed: {
                color: 0x503d82,
                description: "Servers list was sent to your DMs :mailbox_with_mail:"
            }
        })
    }}