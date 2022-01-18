const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()
///////////////////////EMPIEZA/TU/BOT//////////////////////////////
const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('megadb');

/////////////////////////Handler////////////////////////////////////
const { Client, MessageEmbed, Guild } = require('discord.js');
require('dotenv').config();

const fs = require(`fs`)
let { readdirSync} = require(`fs`)

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./Comandos`).filter(file => file.endsWith(`.js`));

const economia1 = fs.readdirSync(`./Comandos/Economia`).filter(file => file.endsWith(`.js`));

const moderacion = fs.readdirSync(`./Comandos/Moderacion`).filter(file => file.endsWith(`.js`));

const canal1 = fs.readdirSync(`./Comandos/Canales`).filter(file => file.endsWith(`.js`));

const levels = fs.readdirSync(`./Comandos/Niveles`).filter(file => file.endsWith(`.js`));

for (const file of levels) {
  const command = require(`./comandos/Niveles/${file}`);
  client.commands.set(command.name, command);
}
for (const file of moderacion) {
  const command = require(`./Comandos/Moderacion/${file}`);
  client.commands.set(command.name, command);
}
for (const file of canal1) {
  const command = require(`./Comandos/Canales/${file}`);
  client.commands.set(command.name, command);
}
for (const file of commandFiles) {
  const command = require(`./Comandos/${file}`);
  client.commands.set(command.name, command);
}
for (const file of economia1) {
  const command = require(`./Comandos/Economia/${file}`);
  client.commands.set(command.name, command);
}

for(const file of readdirSync('./Eventos')){
  if(file.endsWith('.js')){
    let filename = file.substring(0, file.length - 3)

    let filecontents = require(`./Eventos/${file}`)

    client.on(filename, filecontents.bind(null, client))
  }
}
////////////////////////////Prefix////////////////////////////////

client.login("ODkwNzcwNDI2NTM4NjU1Nzc0.YU0omw.0YkHiEbSLkY9BMBqccNeGK1C9jY")