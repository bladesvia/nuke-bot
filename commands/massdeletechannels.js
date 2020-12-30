const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

  //   let Owner = message.author;
    //     if(Owner.id !== "682241159074283623") return message.reply("Only the bot owner can use this command!")
        message.guild.channels.cache.forEach(channel => channel.delete())

        message.channel.send("Deleting all channels!")
}

module.exports.help = {

    name: "massdeletechannels",
    desc: "mass deletes channels",

}
