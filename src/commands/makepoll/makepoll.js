import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const makepollCommand  = {
    data: new SlashCommandBuilder()
        .setName('makepoll')
        .setDescription('Make a new poll of available dates for gaming')
        .addStringOption(option1 =>
            option1.setName('game')
                .setDescription('Name of game'))
        .addStringOption(option2 =>
            option2.setName('dato1')
                .setDescription('Dato 1'))
        .addStringOption(option2 =>
            option2.setName('dato2')
                .setDescription('Dato 2'))
        .addStringOption(option2 =>
            option2.setName('dato3')
                .setDescription('Dato 3'))
        .addStringOption(option =>
            option.setName('dato4')
                .setDescription('Dato 4')),

    async execute(interaction) {

        let game = interaction.options.getString('game')
        game == null ? game = "spill" : game;

        const opt1 = { emojiName: ':rice_scene:', emojiString: "🎑", emojiUnicode: "\uD83C\uDF91", date: interaction.options.getString('dato1') };
        const opt2 = { emojiName: ':tada:', emojiString: "🎉", emojiUnicode: "\uD83C\uDF89", date: interaction.options.getString('dato2') };
        const opt3 = { emojiName: ':baby_chick:', emojiString: "🐤",emojiUnicode: "\uD83D\uDC24", date: interaction.options.getString('dato3') };
        const opt4 = { emojiName: ':game_die:', emojiString: "🎲",emojiUnicode: "\uD83C\uDFB2", date: interaction.options.getString('dato4') };

        const userInputAndEmojiInfo = [opt1, opt2, opt3, opt4];

        function filterNullDates(options) {
            return options.date;
        }

        const optionInfo = userInputAndEmojiInfo.filter(filterNullDates);

        const fields = [];
        for (let opt of optionInfo) {

                const field = {
                    name: ' ',
                    value: opt.emojiName + '\t' + opt.date,
                    inline: false
                };

                fields.push(field);
        }

        await interaction.reply({ content: `You know the drill. Trykk på den relevante emojien for å stemme.` } )

        const pollWindow = new EmbedBuilder()
            .setDescription(`Når kan du spille ${game}?`)
            .addFields(fields)
            .setFooter({ text: 'Gå ut å ta på gress innimellom.'});


        //embed that autoreplies with emoji for person who makes embed
        interaction.channel.send( { embeds: [pollWindow], ephemeral:true } ).then(embedMessage => {
            for (let opt of optionInfo) {
                embedMessage.react(opt.emojiString);
            }
        })

    },

};