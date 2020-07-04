const Discord = require('discord.js');
exports.run = function(client, message, args) {
  

const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")            
  .setTitle(`${message.guild.name} Adlı Sunucudaki Premium Kodlar!`)
  .setDescription(`\`Koruma\` **__JavaScript__**  İçinde Bırbıdınden Guzel Ucretsız Kodlar Bulunmakda`)
  .setDescription(`\`7 İnvite\` **__JavaScript++__** Yapdıgın Inıvte Deger Kodlar Mevcuttur`)
  .setDescription(`\`10 İnvite\`  **__Altyapı__** Bot Yapmakda Zorlanıyorsan 10 İnvite Yaparak Altyapıları Kullanabılrısın`)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım','help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
};