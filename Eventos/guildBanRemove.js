const Discord = require('discord.js');

module.exports = async (client, guild, user) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Miembro desbaneado")
  .setDescriprion(`Miembro: **${user.tag}**\n\nID: **${user.id}**`)
  .setTimestamp()
  .setColor("GREEN")

  client.channels.cache.get('932753663875764305').send(embed)

 }