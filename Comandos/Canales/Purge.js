const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: "purge",
  alias: ["purge"],
	permisos: ["MANAGE_MESSAGES"],
 
execute (bot, message, args){
  
  if (!args[0]) { //En caso que solo haya puesto el comando y no argumentos le retornará un embed
    let noN = new Discord.MessageEmbed()
      .setDescription("Establece una cantidad inferior a ``100`` y superior a ``0``")
      .setColor("RED");
    return message.channel.send(noN);
  }
  
  let number = args[0];
  if (isNaN(number))
    return message.channel.send("Necesita introducir números para poder borrar con aquella cantidad");
  
  number = parseInt(number); //Se convertirá en número
  
  if (number >= 101 || number <= 0)
    return message.channel.send("El valor no es correcto, asegurese de poner menor de 100 y mayor de 0");
  
  
  message.channel.bulkDelete(number + 1)
    .then(() => {})
    .catch((error) => {
      const errorEmbed = new Discord.MessageEmbed()
        .setDescription(`${error.message}`)
        .setFooter("Purge command")
        .setColor("RED");
        
      message.channel.send(errorEmbed);
    });
  }
 
}