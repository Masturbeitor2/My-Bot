const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "sayembed",
  alias: [],

execute (client, message, args){

  const messa = args.join(" ")
  if(!messa) return message.channel.send("Debes de escribir un mensaje")

  setTimeout(function(){
    message.delete()
  }, 100)

    const embedPrinsipal = new Discord.MessageEmbed()

  .setTitle("Mensaje del Bot")
  .setDescription(`**${messa}**`)
  .setColor("GREEN")

   message.channel.send(embedPrinsipal)

}
}