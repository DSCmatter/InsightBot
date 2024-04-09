const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Send an embed message.'),
    async execute(interaction) {
        const { options } = interaction;

        const embed = new EmbedBuilder()
            .setTitle("Today's Updates")
            .setDescription("We came in today's updates seeking refreshment")
            .setColor('Random')
            .addFields(
                {
                    name: 'Cry about this!',
                    value: 'Another day - another discord bot bs',
                    inline: true,
                },
                {
                    name: 'Play The FINALS?',
                    value: 'Seek some life bro',
                    inline: true,
                }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
