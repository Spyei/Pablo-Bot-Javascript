const { EmbedBuilder } = require('discord.js');
const Cooldown = require('cooldown.js');
const cooldown = new Cooldown();
const db = require('secure-db')

module.exports = {
  name: 'work',
	aliases: ['trabalhar'],
  description: 'Trabalha e ganha dinheiro',
  run: async(client, message, args) => {
const workc = new cooldown.Command(message.guild.id,'work',);
const userc = workc.has(message.author.id);
	if (userc) {
		message.channel.send("**( ❌ ) Espere " +userc.secondsleft + ' segundos para trabalhar novamente!**',);
		return;
	}
if (db.get(`${message.author.id}.money`) === null) return message.channel.send('**( ❌ ) Você precisa se registrar na minha database primeiro, use p!registrar**')
function random(min, max) {
  return Math.round((Math.random() * (max - min)) + min)
}
		let randomc = random(50, 300)
		db.sum(`${message.author.id}.money`, randomc)
	  const embed = new EmbedBuilder()
		.setColor('303136')
		.setTitle(`**( 💸 ) Work**`)
		.setDescription(`<@${message.author.id}>, Você Trabalhou e obteve **${randomc.toLocaleString()}** 💸 volte daqui 5 minutos!`)
		.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
workc.add(message.author.id, 1000 * 60);
	}
}