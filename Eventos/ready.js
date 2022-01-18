const Discord = require('discord.js');

module.exports = async (client, readdy) => {

    console.log("listo empezemos!!!!");
    
     client.user.setPresence({
        status: "Onlyne",
        activity: {
            name: "mi prefix es .",
            type: "PLAYING"
        },
 
   });
}