const Discord = require('discord.js');

module.exports = async (client, messageDelete, user) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Mensaje eliminado")
  .setDescription(`Se borro el mensaje **${messageDelete.content}**\nCanal: **${messageDelete.channel}**`)
  .setTimestamp()
  .setColor("RED")

  client.channels.cache.get('932753663875764305').send(embed)

 }