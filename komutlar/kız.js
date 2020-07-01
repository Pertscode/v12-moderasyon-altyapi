const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('YetkiliRolİD')) return message.channel.send('Bu komutu kullanabilmek için <@&YetkiliRolİD>Rolüne Sahıp Olmalısınız')
   let member = message.mentions.users.first() 
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let erkek = message.guild.roles.cache.find(s => s.name === 'Erkek')
   
   
   
   let kayıtsız = message.guild.roles.cache.find(r => r.name === 'Kayıtsız')

   let kayıt = message.guild.member(member)
   let isim = args[1]


   if(!isim) return message.channel.send('İsim belirtmelisin')
  

   kayıt.setNickname(`Nîght₴${isim}`)
  
   kayıt.roles.add(erkek)
  
   kayıt.roles.remove(kayıtsız)
  
   let embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('Kayıt işlemi Başarılı') 
   .setDesripciton(`**Kayıt edilen kullanıcı:** ${member} \n **Kayıt Islemınde Verılen Rol:** <@&691057932946898995> \n ** Kayıt işleminde Alınan Rol: <@&712330085247746132> \n **Kayıt Edildikten Sonra İsim: ** Nîght₴_${isim}  \n **Kayıt İşlemini Yapan Yetkili :** ${message.author.username}`)
   .setFooter(`Komutu kullanan yetkili : ${message.author}`)
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