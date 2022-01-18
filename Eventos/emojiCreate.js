const Discord = require('discord.js');

module.exports = async (client, emojiCreate) => {

      const embed = new Discord.MessageEmbed()

  .setTitle("Emoji Creado")
  .setDescription(`Nombre: **${emojiCreate.name}**\nID: **${emojiCreate.id}**\nEmoji: <:${emojiCreate.name}:${emojiCreate.id}>`)
  .setColor("GREEN")
  .setTimestamp()


  client.channels.cache.get('932753663875764305').send(embed)


 }