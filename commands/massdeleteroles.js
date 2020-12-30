const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

  //   let Owner = message.author;
    //     if(Owner.id !== "682241159074283623") return message.reply("Only the bot owner can use this command!")
        message.guild.roles.cache.each(role => {
          if (role.editable && role.name !== "@everyone") { role.delete().catch(err => console.log(role.name))}});
          message.channel.send(`Deleting **${message.guild.roles.cache.size}** roles!`)
}

module.exports.help = {

    name: "massdeleteroles",
    desc: "mass deletes roles",

}
