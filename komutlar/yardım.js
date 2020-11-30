const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setTitle(` <a:loading:778930733183402015> Yazar-Bot Yardım Komutları <a:loading:778930733183402015> `)

       .addField("Komutlar", "<a:neonmod:778931098666926081>   **y!moderasyon** = Moderasyon Komutlarını Listeler\n\n<a:ok1:778930992433725450>  **y!kullanıcı** = Kullanıcı Komutlarını Listeler\n\n<a:tik1:778352277362704404>  **y!davet** = Botun Davet Linkini Gösterir")
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=778251429315870750&scope=bot&permissions=805314622)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/WnR627nek8)`  + "**  **" + ` `, false)
       .setFooter(`YazarBot`)
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};