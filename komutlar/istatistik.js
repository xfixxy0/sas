  const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
  let msg = message
   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Yazar-Bot \'Buyur Benim İstatistiklerim', bot.user.avatarURL)
   
  .addField("<a:ok1:778930992433725450> __**Botun Sahibi**__", "@Yzr_Edits#8537")
   
  .addField("<a:loading:778930733183402015>  __**Geliştirici**__ ","@Llarance#8702")
   
  .addField(":satellite:  __**Bellek kullanımı**__", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
   
  .addField(':musical_note:  __**Müzik Çalınan Sunucu Sayısı**__;', bot.voiceConnections.size)
   
  .addField(':man_technologist:  __**Kullanıcılar**__:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
   
.addField(":loudspeaker:  __**Sunucular**__", bot.guilds.size.toLocaleString(), true)
   
  .addField(":link:  __**Kanallar**__", bot.channels.size.toLocaleString(), true)
   
  .addField(":lock:  __**Discord.JS sürüm**__", "v"+Discord.version, true)
   
  .addField(":gear:  __**Node.JS sürüm**__", `${process.version}`, true)
   
  .addField(":construction:  __**Ping**__", bot.ping+" ms", true)
   
  .addField(":warning: __**CPU**__", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
   
  .addField(":cd:   __**Bit**__", `\`${os.arch()}\``, true)
   
  .addField(":computer:   __**İşletim Sistemi**__", `\`\`${os.platform()}\`\``)
   
   //devtr
 return message.channel.send(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};