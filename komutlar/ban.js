const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = message.mentions.users.first()
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let kanal = 'LogKanalİD'//Log Kanal İD Yazın//Perts Code

if(!member) return message.channel.send("Bir Üye Etıketle")//Perts Code
//Perts Code
//Perts Code
//Perts Code
if(!sebep) return message.channel.send("Bir Sebep Gir")//Perts Code
//Perts Code
//Perts Code
guild.members.ban(member)

const ban = new Discord.MessageEmbed()//Perts Code
.setThumbnail(message.author.avatarURL())//Perts Code
.setColor('RANDOM')//Perts Code
.addField(`Banlanan Kullanıcı`,member)//Perts Code
.addField(`Yetkili`,message.author)//Perts Code
.addField(`Sebep`,sebep)//Perts Code
client.channels.cache.get(kanal).send(ban)


};
exports.conf = {
  enabled: true, //komutu açmaya yada kapatmaya yarar. / true = açık - false = kapalı
  guildOnly: false, //komutu sunucuya özelmi olucağını belirler.
  aliases: ['yargı'], //komutun diğer adlar buraya ne yazarsanız komut kullanırken bu da geçerli olucaktır.
  permLevel: 0 //komutun yetkisini ayarlar / bu komut için hiç bir yeetkiye gerek yok bu yüzden 0
};
exports.help = {
  name: 'banlaaa', //komutun ismidir. / prefix + paralarım şeklinde çalışır.
  description: 'Kullanıcıya Ban Atar', //komutun açıklamasıdır çok önemi yok!
  usage: '!ban @user <sebep>' //komutun kullanım şeklidir çok önemi yok!
};