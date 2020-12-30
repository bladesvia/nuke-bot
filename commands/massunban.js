const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sorry, invalid permissions.');

        message.guild.fetchBans().then(bans => {
            bans.forEach(banInfo => {
              message.guild.members.unban(banInfo.user);
            });
            message.channel.send(`Unbanning **${bans.size}** users!`)
          })
    }

module.exports.help = {

    name: "massunban",
    desc: "unbans all banned users",

}
