const Discord = require('discord.js');

module.exports = {
    name: "ticket",
    alias: [],

execute (client, message, args) {

  let everyone = message.guild.roles.cache.find(rol => rol.name == "@everyone");

  let e = message.guild.channels.cache.find(canal => canal.name == `ticket ${message.author.username}`)
  if(e) return message.channel.send("No puedes crear un ticket, ya tienes otro abierto.")

  const razon = args.join(" ")
  if(!razon) return message.channel.send("Debes escribir una razon")

  const embed = new Discord.MessageEmbed()

  .setTitle("Ticket creado")
  .setDescription(`El ticket se ha creado por: **${message.author.username}**\n\nMotivo: **${razon}** \n\nTag: <@&897519944462393384> , <@&897519399886528562>`)
  .setColor("RANDOM")

  message.guild.channels.create(`ticke **${message.author.tag}**`, {
    permissionOverwrites: [
      {
        id: everyone.id,
        deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      },
      {
        id: message.author.id,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      }
    ],
     parent: "889243612699824159"

  }).then((c) => c.send(embed)).then((msg) => {
    msg.react("🔐")

    msg.awaitReactions((reactions, user) => {
      if(message.author.id !== user.id) return;
      if(reactions.emoji.name === '🔐'){
      msg.channel.delete()
    }
  })
})

}

}