const Discord = require('discord.js');

module.exports = async (client, message) => {

  let prefix = '.'

  const servidor = message.guild.id

  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send("pong")
  }

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }

}