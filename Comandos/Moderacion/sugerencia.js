const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const cosa = new db.crearDB('canal sugerencias')

module.exports = {

name: "sugerencia",
alias: ["sgr"],

async execute (client, message, args){

const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)

const canalsugerencia = client.channels.cache.get(canal)

if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){ message.channel.send("Este servidor no tiene ningún canal establecido!")

return;

}

const usuario = message.author

const sugerencia = args.join(" ")
if(!sugerencia) return message.channel.send("Debes de decir la sugerencia")

const embed = new Discord.MessageEmbed()

.setTitle("a llegado una nueva sugerencia")
.setAuthor(usuario.tag)
.setDescription(`${sugerencia}`)
.setColor("RANDOM")

const embedbueno = new Discord.MessageEmbed()

.setTitle("Todo ha dalido bien!")
.setDescription("La sugerencia fue enviada al canal establecido")
.setColor("GREEN")
  
  message.channel.send(embedbueno)

  canalsugerencia.send(embed).then(async msg => {
await msg.react('✅')
await msg.react('❎')
})

   }


}