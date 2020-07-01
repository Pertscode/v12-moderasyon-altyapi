const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if(!message.member.roles.cache.has('712394297625804900')) return message.channel.send('Bu komutu kullanabilmek için **₴Register Command** Rolüne Sahıp Olmalısınız')
   let member = message.mentions.users.first() 
   if(!member) {
       return message.channel.send('Bir Üye Etiketlemelisin Yavrum †')
   }
   let erkek = message.guild.roles.cache.find(s => s.name === '₴ Senior')
   
   
   
   let kayıtsız = message.guild.roles.cache.find(r => r.name === '₴ İndiffirent')

   let kayıt = message.guild.member(member)
   let isim = args[1]


   if(!isim) return message.channel.send('İsim belirtmelisin')
  

   kayıt.setNickname(`Nîght₴${isim}`)
  
   kayıt.roles.add(erkek)
  
   kayıt.roles.remove(kayıtsız)
  
   let embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('<a:tik2:712666264304222228> Kayıt işlemi Başarılı <a:tik2:712666264304222228>') 
   .setDesripciton(`<a:tik2:712666264304222228> **Kayıt edilen kullanıcı:** ${member} <a:Nightta2:710009174490349578> \n <a:tik2:712666264304222228> **Kayıt Islemınde Verılen Rol:** <@&691057863556202526> <a:Nightta2:710009174490349578> \n <a:tik2:712666264304222228> ** Kayıt işleminde Alınan Rol: <@&712330085247746132> <a:Nightta2:710009174490349578> \n <a:tik2:712666264304222228> **Kayıt Edildikten Sonra İsim: ** Nîght₴_${isim} <a:Nightta2:710009174490349578> \n ** <a:tik2:712666264304222228> Kayıt İşlemini Yapan Yetkili :** ${message.author.username} <a:Nightta2:710009174490349578>`)
   .setFooter('<a:rainbowkalp:691205991911522357> İyi Eğlenceler <a:rainbowkalp:691205991911522357>')
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "erkek"
}