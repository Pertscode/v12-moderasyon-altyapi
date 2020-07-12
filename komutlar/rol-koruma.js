const Discord = require('discord.js')
const db = require('quick.db');
exports.run = (client, message, args) => {
  
   if(args[0] === "kapat") {
      db.delete(`rolKoruma_${message.guild.id}`)
     db.delete(`cezaRol_${message.guild.id}`)
     message.channel.send('Rol koruma kapatıldı')
     return
   }
  
  if(args[0] === "aç") {
    let channel = message.mentions.channels.first()
  if (!channel) {
      const uyari = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('<a:no:679854277711233037> Lütfen bir kanal belirt.')
    return message.channel.send(uyari)
  
  db.set(`rolKoruma_${message.guild.id}`,channel.id)
  let role = args[1]
if (role.length < 1) return message.reply('<a:no:679854277711233037> Ceza rolü için bir rol seçmelisin.');
let role2 = message.guild.roles.cache.find(r => r.name === `${role}`);
if (!role2) return message.reply(`<a:no:679854277711233037> ${role} Rolünü bulamıyorum.`);
db.set(`cezaRol_${message.guild.id}`, role2.id)
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('<a:okey:679854253501710383> Başarılı bir şekilde rol koruma log kanalı' + channel + ' olarak ayarlandı.\n<a:okey:679854253501710383> ' + role2 + ' Adlı rol ceza rolü olarak ayarlandı.')
  message.channel.send(embed)
  }
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "rol-koruma",
  description: "Rollerinizi korumanızı sağlar.",
  usage: "kapat"
};