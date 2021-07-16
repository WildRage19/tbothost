module.exports = async (client) =>{
    const guild = client.guilds.cache.get('864853157442879498');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('865258417206591528');
        channel.setName(`Total members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}