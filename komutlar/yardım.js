const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`ssjsjskdkj`)
.setDescription(`


:white_small_square: **=**  \`g!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`g!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`g!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`g!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`g!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`g!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`g!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`g!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`g!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`g!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://media.discordapp.net/attachments/729708966292226069/765614032664395806/cl.PNG?width=259&height=265")
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