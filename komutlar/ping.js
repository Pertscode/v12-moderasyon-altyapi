const Discord = require("discord.js");


exports.run = async (client, message, args) => {
//Perts Code
  //Perts Code
const exampleEmbed = new Discord.MessageEmbed()//Perts Code
  .addField(`Pingim` ,`${client.ws.ping}ms`)//Perts Code
  message.channel.send(exampleEmbed)//Perts Code
  //Perts Code
  //Perts Code
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping(Bunuda Almayında)',
  usage: 'ping'
}; 