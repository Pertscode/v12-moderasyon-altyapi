const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Mesaj Yazmalısın');
  message.delete();
      client.users.cache.forEach(u => {
u.send(mesaj)
})
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ['dmduyur'],
  permLevel: 4
};

exports.help = {
  name: 'dmduyur',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'dmduyur'
};