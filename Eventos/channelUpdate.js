const Discord = require('discord.js');

module.exports = async (client, oldChannel,  newChannel) => {

   const embed = new Discord.MessageEmbed()

  .setTitle("Canal Actualizado")
  .setDescription(`Antiguo nombre: **${oldChannel.name}**\nNuevo nombre: **${newChannel.name}**\nCategoria: **${newChannel.parent}**\nID: **${newChannel.id}**\nTipo: **${newChannel.type}**`)
  .setColor("BLACK")
  .setTimestamp()


  client.channels.cache.get('932753663875764305').send(embed)

 }