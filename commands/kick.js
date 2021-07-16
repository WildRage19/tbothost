module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        if(! message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send('You do not have the permission to kick a member.')
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You could not kick that member!');
        }  
    }
}