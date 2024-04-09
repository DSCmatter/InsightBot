const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides detailed information about the server.'),
    async execute(interaction) {
        const guild = interaction.guild;
        const owner = await guild.members.fetch(guild.ownerId); // Fetch owner information
        const channels = guild.channels.cache.filter(channel => channel.type !== 'GUILD_CATEGORY').size; // Count non-category channels
        const roles = guild.roles.cache.size - 1; // Exclude @everyone role
        const createdAt = guild.createdAt.toDateString();

        const serverInfo = `
            Server Name: ${guild.name}
            Owner: ${owner.user.tag} 
            Region: ${guild.region}
            Created At: ${createdAt}
            Member Count: ${guild.memberCount}
            Channels: ${channels}
            Roles: ${roles}
        `;

        await interaction.reply(`Here is detailed information about the server:\n\`\`\`${serverInfo}\`\`\``);
    },
};
