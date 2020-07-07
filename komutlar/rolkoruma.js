const Discord = require('discord.js');
const db = require('quick.db');
////FORCEX TARAFINDAN HAZIRLANDI
exports.run = async(client, message, args) => {
  ////FORCEX TARAFINDAN HAZIRLANDI
  ////FORCEX TARAFINDAN HAZIRLANDI
  ////FORCEX TARAFINDAN HAZIRLANDI
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
      let kanal = message.mentions.channels.first() || args[0]
      if(!kanal) return message.channel.send('Rol koruma log kanalını belirtmelisin')
      db.set(`rolk_${message.guild.id}`, kanal.id)
      message.channel.send('Rol koruma sistemi aktif edildi, log kanalı <#'+kanal+'> Olarak ayarlandı.')

      if(args[0] === 'kapat') {
          if(!db.fetch(`rolk_${message.guild.id}`)) message.channel.send('Rol koruma sistemi aktif edilmemiş.')
          db.delete(`rolk_${message.guild.id}`)
          message.channel.send('Rol koruma sistemi kapatıldı, log kanalı sıfırlandı')
      }
}
////FORCEX TARAFINDAN HAZIRLANDI
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "rol-koruma"
}