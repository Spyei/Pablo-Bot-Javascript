const { EmbedBuilder } = require('discord.js');
module.exports = {
  name: 'help',
	aliases: ['ajuda'],
  description: 'Mostra a minha lista de comandos',
  run: async(client, message, args) => {
    const embed = new EmbedBuilder()
		.setTitle('**( ❓ ) Help**')
		.setColor('303136')
		.setDescription(`Olá **${message.author.tag}** Abaixo terá uma lista com todos meus comandos`)
		.addFields(
{ 
	name: '**( 🎉 ) Diversão**', value: `
\`p!tic-tac-toe [usuário]\` 
`
},
{
	name: '**( ✨ ) Variados**', value: `
\`p!avatar <usuário>, p!ping, p!random-color, p!server-info, p!user-info <usuário> \`
`
},
{ 
	name: '**( 💸 ) Economia**', value: `
\`p!register, p!bal <usuário>, p!daily, p!work\`
` 
})
		.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
		}
}