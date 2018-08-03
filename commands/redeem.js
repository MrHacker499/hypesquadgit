const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Code is invaild, redeemed or error. To buy Premium, go to https://selly.gg/@MrHacker499");
  await msg.react(":X:")
  
  const reactions = await message.awaitReactions(reaction => {
    return reaction.emoji.name === ":X:", {time: 30000}
  });
}