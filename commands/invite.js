module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
		msg.channel.sendMessage("Invite me!").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			newMsg.edit("Invite me! LINK... ");
		});
    },
    help: 'Invitation link'
};
