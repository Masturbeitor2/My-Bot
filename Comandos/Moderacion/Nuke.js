const { MessageEmbed, MessageAttachment } = require("discord.js")

module.exports = {
  name: "nuke",
  alias: ["nuke"],
	permisos: ["MANAGE_CHANNELS"],
 
async execute (bot, message, args){

message.channel.clone().then((canal) => {
  message.channel.delete()
 canal.setPosition(posicion)
 canal.send("***Canal Reseteado***", nuke)



    });
  }
 
}