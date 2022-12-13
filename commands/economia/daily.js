const { EmbedBuilder } = require('discord.js');
const Cooldown = require('cooldown.js');
const cooldown = new Cooldown();
const db = require('secure-db')

module.exports = {
  name: 'daily',
	aliases: ['diario'],
  description: 'Pega o daily da economia',
  run: async(client, message, args) => {
const dailyc = new cooldown.Command(message.guild.id,'daily',);
const userc = dailyc.has(message.author.id);
	if (db.get(`${message.author.id}.money`) === null) return message.channel.send('**( ❌ ) Você precisa se registrar na minha database primeiro, use p!registrar**')
	if (userc) {
		message.channel.send("**( ❌ ) Espere " +userc.hoursleft + ' Horas para resgatar o daily novamente!**',);
		return;
	}
function random(min, max) {
  return Math.round((Math.random() * (max - min)) + min)
}
		let randomc = random(100,1000)
		db.sum(`${message.author.id}.money`, randomc)
	  const embed = new EmbedBuilder()
		.setColor('303136')
		.setTitle(`**( 💸 ) Daily**`)
		.setDescription(`<@${message.author.id}>, Você obteve **${randomc.toLocaleString()}** 💸 pegos nesse daily, volte daqui a 24 horas!`)
		.setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
		message.channel.send({ embeds: [embed] });
dailyc.add(message.author.id, 1000 * 86400);
	}
}