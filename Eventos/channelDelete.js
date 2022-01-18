const Discord = require('discord.js');

module.exports = async (client, channelDelete) => {

  var tipo = channelDelete.type

  if(tipo === 'text'){
    tipo = 'texto'
  }
  if(tipo === 'voice'){
    tipo = 'voz'
  }
  if(tipo === 'news'){
    tipo = 'noticias'
  }

  const embed = new Discord.MessageEmbed()

  .setTitle("Canal Eliminado")
  .setDescription(`Nombre: **${channelDelete.name}**\nCategoria: **${channelDelete.parent}**\nID:**${channelDelete.id}**\nTipo: **${channelDelete.type}**`)
  .setColor("RED")
  .setTimestamp()


  client.channels.cache.get('932753663875764305').send(embed)

 }