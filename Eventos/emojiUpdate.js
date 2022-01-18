const Discord = require('discord.js');

module.exports = async (client, oldEmoji, newEmoji) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Emoji Actualizado")
  .setDescription(`Antiguo Nombre: **${oldEmoji.name}**\nNuevo Nombre: **${newEmoji.name}**\nID: **${newEmoji.id}**\nEmoji: <:${newEmoji.name}:${newEmoji.id}`)
  .setColor("BLACK")
  .setTimestamp()

  
  client.channels.cache.get('932753663875764305').send(embed)

 }