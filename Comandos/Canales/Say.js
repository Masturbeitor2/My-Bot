const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say",
  alias: [],

execute (client, message, args){

  const messa = args.join(" ")
  if(!messa) return message.channel.send("Debes de escribir un mensaje")

  setTimeout(function(){
    message.delete()
      message.channel.send(`${messa}`)
  }, 100)

}

}