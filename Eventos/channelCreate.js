const Discord = require('discord.js');

module.exports = async (client, channelCreate) => {

  var tipo = channelCreate.type

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

  .setTitle("Canal Creado")
  .setDescription(`Nombre: **${channelCreate.name}**\nCategoria: **${channelCreate.parent}**\nID:**${channelCreate.id}**\nTipo: **${channelCreate.type}**`)
  .setColor("GREEN")
  .setTimestamp()


  client.channels.cache.get('932753663875764305').send(embed)

 }