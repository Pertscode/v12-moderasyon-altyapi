const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`BU ALTYAPI FORCEX TARANFINDAN YAPILMISDIR IYI KULLANMALAR`);  

  client.user.setActivity("Xountex", {
  type: "STREAMING",
  url: "https://www.twitch.tv/xountex"
  });
  //---------YAYIN İÇİN---------
};
