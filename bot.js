const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//--------------------------------KOMUTLAR-------------------------------\\
client.on('message' , msg => {
  
if(msg.content == '!tag')
  msg.channel.send("Nîght₴")
})

  client.on('message' , msg => {
if(msg.content == 'tag')
  msg.channel.send("Nîght₴")
})



client.on("guildMemberAdd", member => { 
  const emoji = client.emojis.get('710009174490349578');
  const kanal = "712292800237928520";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.Messagembed()
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '  **__Bu Hesap Güvenilir Değil__**  '
if (kurulus > 1296000000) kontrol = '   **__Bu Hesap Güvenilir Gözüküyor__**  '
  moment.locale("tr");
  let buse = client.channels.cache.get(kanal);
buse.send(`
${emoji} Hoşgeldin! ${member} Seninle Birlikte ${member.guild.memberCount} Kişiyiz.

${emoji} Müsait olduğunda ✞ ses teyit  Odalarından Birine Geçip Kaydını Yaptırabilirsin..

${emoji} <@&712391143819837502> seninle ilgilenicektir.

${emoji} Hesabın Oluşturulma Tarihi: ${moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**")}

${emoji} ${kontrol} 

${emoji} Tagımızı alarak Nîght₴ bize destek olabilirsin.`)
  
buse.send({
  file: "https://media.discordapp.net/attachments/608711476219478045/660404777523347470/harley.gif"
})

});

///////////////şüpheli Hsap/////////////////
///////////////şüpheli Hsap/////////////////


client.on("guildMemberAdd", async (member) => {
    let gkisi = client.users.cache.get(member.id);
      const ktarih = new Date().getTime() - gkisi.createdAt.getTime();   

    if (ktarih < 2592000001) {
    member.roles.add("727563548120580229")
    
    }else{
    
      member.roles.add("727563530806755359")
    
      }
});


/////DM HG
client.addListener("guildMemberAdd", async function(member) {
  if (member.user.bot) return;
  return member.user.send(`Sunucumuza Hg`)
})