module.exports = {
    name: 'mute',
    description: "This command mutes a member!",
    execute(message, args, Discord){
        if(! message.member.hasPermission(["MUTE_MEMBERS"])) return message.channel.send('You do not have the permission to mute a member.')
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}