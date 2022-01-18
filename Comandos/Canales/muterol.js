const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "muterol",
  alias: [],

execute (client, message, args){

  var perms = message.member.haspermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes permisos para usar este comando!")

  let rol = message.mentions.roles.first();
  if(!rol) return message.channel.send("Debes de mencionar un rol!")

  muterol.establecer(message.guild.id , rol.id)

  message.channel(`se a establecido el rol **${rol.name}** Como rol para mutear`)

}

}