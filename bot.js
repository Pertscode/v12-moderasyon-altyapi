const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
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
    } catch (e){
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
    } catch (e){
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
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
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

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//--------------------------------KODLAMALAR-------------------------------\\
//----------------------------------HOSGELDIN-----------------------------//

client.on("guildMemberAdd", member => {
 const ok_embed = {
    thumbnail: {
      url: "https://media.giphy.com/media/JoVCQYf3A3R15ONWvb/giphy.gif"//user_image_url
    },
    image: {
      url: "https://media.giphy.com/media/JoVCQYf3A3R15ONWvb/giphy.gif"
    },
    description:
      "<a:6196cd02c06942349f1952b060cec63a:692442144547536976>  " +
      //"<@" +
      member.user.username +
      //">" +
      " Seninle birlikte **" +
      member.guild.memberCount +
      "** Kişiyiz \n\n <a:6196cd02c06942349f1952b060cec63a:692442144547536976> Kaydının yapılması için **ses kanallarına** girebilirsin. \n\n <a:6196cd02c06942349f1952b060cec63a:692442144547536976> Bu kullanıcı : **GÜVENLİ** \n\n <a:6196cd02c06942349f1952b060cec63a:692442144547536976> Hesap kuruluş zamanı: **" +
      moment(member.user.createdAt).format("DD MMMM YYYY dddd") +
      "**",
    timestamp: new Date()
  };

  const err_embed = {
    thumbnail: {
      url:"https://media.giphy.com/media/JoVCQYf3A3R15ONWvb/giphy.gif" //user_image_url
    },
    image: {
      url: "https://media.giphy.com/media/JoVCQYf3A3R15ONWvb/giphy.gif"
    },
    description:
      "<a:6196cd02c06942349f1952b060cec63a:692442144547536976>  " +
      //"<@" +
      member.user.username +
      //">" +
      " Seninle birlikte **" +
      member.guild.memberCount +
      "** Kişiyiz \n\n <a:6196cd02c06942349f1952b060cec63a:692442144547536976> Kaydının yapılması için **ses kanallarına** girebilirsin. \n\n <a:hayir:686600377537134664> Bu kullanıcı : **TEHLİKELİ** \n\n <a:6196cd02c06942349f1952b060cec63a:692442144547536976> Hesap kuruluş zamanı: **" +
      moment(member.user.createdAt).format("DD MMMM YYYY dddd") +
      "**",
    timestamp: new Date()
  };
});
////////////////////////////////////////////////////////////////////////////


client.on('ready', ()=>{

})


client.on('message', (message)=>{
  if(message.content===".")
    {
        
    }
})



//----------------------------------HOSGELDIN-----------------------------//
client.on("guildMemberAdd", member => {
  
})
//----------------------------------HOSGELDIN-----------------------------//
client.on("guildMemberAdd", async member => {
  const kanal = member.guild.channels.find("name", "678543790033600522");
  kanal.sendMessage(
      `Selam ${member} HOŞGELDİN.`
  );
});
//----------------------------------HOSGELDIN-----------------------------//