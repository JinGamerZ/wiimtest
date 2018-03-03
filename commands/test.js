module.exports = {
  main: (bot, msg, settings) => {
	//your code goes here
client.on('message', message => {
    if (message.content === '?creadores') {
    	message.reply('Wiim esta creado por @JinGamerZ Y @SrWitherHD.');
  	}
});
  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
