module.exports = {
  main: (bot, msg, settings) => {
    message.channel.send(There are currently ${message.guildmemberCount} Members on this Server!);
  },
  args: '<string>',
  help: 'List of members',
  hide: false
}
