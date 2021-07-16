const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = 'r!';

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Uxum is online!');
    client.user.setActivity('Finishing the last touches');
    memberCounter(client);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args, Discord);  
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

    client.login(process.env.DISCORD_TOKEN);
