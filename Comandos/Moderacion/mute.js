const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')
const db = require('megadb')
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "mute",
  alias: [],

async execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_ROLES")
  if(!perms) return message.channel.send("No Tienes Permisos para ejecutar el comando")

  let mencionado = message.mentions.members.first()
  if(!mencionado) return message.channel.send("Debes Tambien Mencionar a alguien")

  let time = args[1]
  if(!time) return message.channel.send("Debes decir el tiempo")
  let timer = ms(time)

  var razon = args[2]
  if(!razon){
    razon = ' no hubo ninguna razon '
  }

  if(!muterol.tiene(message.guild.id)) return message.channel.send("el servidor no tiene ningun rol para mutear")

  let rol = await muterol.obtener(message.guild.id)

  if(mencionado.role.cache.has(rol)) return message.channel.send("Este Usuario ya lo habian muteado")

  mencionado.roles.add(rol)

  message.channel.send(`El usuario **${mencionado}** a sido muteado durante **${time}** por la razon de **${razon}**`)

  await setTimeout(async function() {

    await mencionado.roles.remove(rol)

    await message.channel.send("se acabo el tiempo de mute").cath(erro => {
      message.channel.send(`Hubo un error inesperado vuelve a intentarlo **${error}**`)
  })

  }, timer)

 }

}