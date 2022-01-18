const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const canalsgr = new db.crearDB('canalsugerencias')

module.exports = {
  name: "csgr",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No Tienes permisos para ejecutar el comando")

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes de mecionar un canal para las sugerencias")

  message.channel.send("Todo a salido bien Todas las sugerencias seran enviadas al canal que puso")

  canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)

 }

}