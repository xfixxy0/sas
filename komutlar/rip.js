const Discord = require("discord.js");
exports.run = async(client, message, args) => {
    message.channel.send( new Discord.MessageEmbed()
    .setImage(`https://api.no-api-key.com/api/v2/rip?user_image=${message.author.avatarURL({ dynamic: true })}`)
    .setTitle(`RIP`)
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: "rip"
};
