const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#6600FF')
.setAuthor(`Kob's Bot`)
.setDescription(`


:white_small_square: **=**  \`!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`!ban\`: **Botun Davetını Gösterir.**
:white_small_square: **=**  \`!unban\`:  **Sunucunuzu   Fraizen Destek Sunucusunda Tanıtırsınız.**
`)
.setImage("https://cdn.discordapp.com/attachments/738074126635237386/738076413441081374/hadiins.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};