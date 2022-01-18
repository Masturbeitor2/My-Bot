const Discord = require('discord.js');

module.exports = async (client, emojiDelete) => {

      const embed = new Discord.MessageEmbed()

  .setTitle("Emoji Eliminado")
  .setDescription(`Nombre: **${emojiDelete.name}**\nID: **${emojiDelete.id}**`)
  .setColor("RED")
  .setTimestamp()


  client.channels.cache.get('932753663875764305').send(embed)


 }