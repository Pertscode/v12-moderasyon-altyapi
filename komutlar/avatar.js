const Discord = require("discord.js");
//Perts Code
//Perts Code
exports.run = async (client, message, args) => {//Perts Code
 //Perts Code 
let user = message.mentions.users.first() || message.author//Perts Code  
  //Perts Code
const exampleEmbed = new Discord.MessageEmbed()//Perts Code
 .setImage(user.avatarURL())//Perts Code
  message.channel.send(exampleEmbed)//Perts Code
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 