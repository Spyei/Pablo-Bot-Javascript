const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')
module.exports = {
    name: "eval",
    aliases: ['ev'],
		description: "Executa um comando Disocord.JS",
run: async(client, message, args) => {
try {
    if (message.author.id !== "955095844275781693") return message.channel.send('**( ❌ ) Só meu dono pode executar este comando**')
    if (!args[0]) return message.channel.send('**( ❌ ) Digite algo para que eu possa executar**')
    let entrada = args.join(" ");
    let saida = eval(entrada);
    if (typeof saida !== "string")
    saida = require("util").inspect(saida, { depth: 0 });
  	const embed = new EmbedBuilder()
		.setTitle('**( <a:dev:1022221804732956752> ) Eval**')
    .setColor('#303136')
    .addFields(
        { name: `**Entrada:**`, value: `\`\`\`js\n${entrada}\`\`\`` },
        { name: `**Saída:**`, value: `\`\`\`js\n${saida}\`\`\`` }
    )
    .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
    message.channel.send({ embeds: [embed] });
} catch (err) {
		let entrada = args.join(" ");
    const embed = new EmbedBuilder()
    .setTitle('**( <a:dev:1022221804732956752> ) Eval**')
    .setColor('#303136')
    .addFields(
        { name: `**Entrada:**`, value: `\`\`\`js\n${entrada}\`\`\`` },
        { name: `**Saída:**`, value: `\`\`\`js\n${err}\`\`\`` }
    )
    .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
    message.channel.send({ embeds: [embed] });    
}
}}