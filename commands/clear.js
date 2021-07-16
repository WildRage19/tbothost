module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args) {
        if(! message.member.hasPermission(["DELETE_MESSAGES"])) return message.channel.send('You do not have the permission to clear messages.')
        if(!args[0]) message.reply("please enter the amount of messages that u want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 100) return message.reply("You can not delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete at least one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}