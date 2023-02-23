
module.exports = {
  name: 'av',
  aliases: ['av'],
  category: 'Util',
  utilisation: '{prefix}av <mention user or dont>',
    async run(client,message,args) {
      console.log("test")
       let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
       let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true });
       const embed = new Discord.EmbedBuilder()
        .setTitle(`${member.user.username}'s Avatar`)
        .setImage(avatar)
        .setColor("BLACK")
        .setAuthor(member.user.username);
      message.channel.send({embeds: [embed]});
    },
};

