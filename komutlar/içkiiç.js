const Discord = require('discord.js');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Korkut')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor("Ohh Kafalar 1 Milyon <a:huhu:778352396932874241> ")
    .setColor('RANDOM')
    .setTimestamp()
		.setImage(`https://media.tenor.com/images/9c839b18c736122d287cf2234b3533c9/tenor.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'içkiiç',
  description: 'Bot Sizin KafanızıBulandırmaya Çalışır.',
  usage: 'içkiiç'
};
