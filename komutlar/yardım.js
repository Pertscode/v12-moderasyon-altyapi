const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`GUARD BOT`)
.setDescription(`


:white_small_square: **=**  \`x!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`x!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`x!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`x!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`x!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`x!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`x!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`x!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`x!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`x!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9fWSqAYpItpZ2azF_QOK6Ew43ty2dq9RlA&usqp=CAU")
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