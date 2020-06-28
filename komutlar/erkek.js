const Discord = require("discord.js");
const db = require ("quick.db");

exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sayaç sistemini ayarlamak için yeterli yetkin yok!");
  
  let kanal = message.mentions.channels.first();
  let sayı = args[0]
  
  
if(!kanal) return message.channel.send(":pencil: Kanal etiketlemeyi unuttun! `Doğru Kullanım: -sayaç-ayarla <sayı> #kanal`")
  
  if(!sayı) return message.channel.send("Lütfen sayı belirt")
  
  if(args[0] < message.guild.members.size)
  return message.channel.send(":exclamation:Bu sayı çok küçük ve zaten o sayıya ulaşmışsın")
  
  db.set(`sayaçK_${message.guild.id}`, kanal.id);
  db.set(`sayaç_${message.guild.id}`, sayı);
 
    
    message.channel.send(`Sayacı ${sayı} kanalını ise ${kanal} olarak ayarladım`)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-ayarla',
  description: 'Sayaç sistemini ayarlamaya yarar.',
  usage: '-sayaç-ayarla #kanal'
};