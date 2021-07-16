module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff9999')
        .setTitle('Rules')
        .setAuthor('Rage')
        .setDescription('This is an embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Please treat everyone in the server nice and kindly. No rude marks to anyone.'},
            {name: 'Rule 2', value: 'No hate, toxic behavior or racism of any kind.'},
            {name: 'Rule 3', value: 'Disrespecting other members, staff members or servers is not allowed.'},
            {name: 'Rule 4', value: 'Keep all messages in English.'},
            {name: 'Rule 5', value: 'Do not discuss politics or sensitive topics.'},
            {name: 'Rule 6', value: 'Do not advertise. Especially DM advertising another Discord server is strictly forbidden.'},
            {name: 'Rule 7', value: 'When in the voice chats, please do not make excessive loud noises when others are on the call'},
            {name: 'Rule 8', value: 'No NSFW talk or media.'},
            {name: 'Rule 9', value: 'Do not spam, spoil things or flood chat with CAPS.'},
            {name: 'Rule 10', value: 'You are obligated to follow Discords ToS, our rules are based on Discords community guidelines and have to be respected.'}
        )
        .setImage('https://images.wallpapersden.com/image/download/gary-and-spongebob_bGVnZ2uUmZqaraWkpJRobWllrWdma2U.jpg')
        .setFooter('Read the rules');

        message.channel.send(newEmbed);
    }


}    