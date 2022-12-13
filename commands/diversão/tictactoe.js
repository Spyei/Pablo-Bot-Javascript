const TicTacToe = require("discord-tictactoe");
const game = new TicTacToe({ language: 'pt-br' });
module.exports = {
  name: 'ttt',
	aliases: ['tic-tac-toe'],
  description: 'Joga um jogo da velha',
  run: async(client, message, args) => {
game.handleMessage(message);
	}
}