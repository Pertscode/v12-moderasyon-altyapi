const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let tag = "₴" // tagınız  
    let sunucu = "690710211501228083"; //sunucu ID
    let boostcuk = "2";
  let erkeğibul = message.guild.roles.get("691057863556202526").members;//erkek rol ID
   let kadınıbul = message.guild.roles.get("691057932946898995").members;//kız rol ID
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
let boost = message.guild.members.filter(r=>r.roles.has(boostcuk)).size
    const embed = new Discord.MessageEmbed()
        .addField("<a:Nightta2:710009174490349578>Toplam Üye<a:Nightta2:710009174490349578> ", message.guild.memberCount)
        .addField("<a:Nightta2:710009174490349578>Aktif Üye<a:Nightta2:710009174490349578> ", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("<a:Nightta2:710009174490349578>Seslideki üye sayısı<a:Nightta2:710009174490349578> ", count)
        .addField("<a:Nightta2:710009174490349578>Bostlayan Üye Sayısı<a:Nightta2:710009174490349578> ", boostcuk)
        .addField("<a:Nightta2:710009174490349578>Taglı Üye Sayısı<a:Nightta2:710009174490349578>", message.guild.members.filter(m => m.user.username.includes("₴")).size) // tagınız yoksa bu satırı silin
        .addField("<a:Nightta2:710009174490349578>**Kadın Üye sayısı:**<a:Nightta2:710009174490349578>", `${kadınıbul.size}`)
        .addField("<a:Nightta2:710009174490349578>**Erkek Üye sayısı:**<a:Nightta2:710009174490349578>", `${erkeğibul.size}`)
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Sunucudaki Ses,Üye,Tag Alan Ve Boost Basan Kullanıcıları Gösterir.',
    usage: 'say'
};