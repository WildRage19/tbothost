module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        if(! message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send('You do not have the permission to ban a member.')
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('You could not ban that member!');
        }  
    }
}