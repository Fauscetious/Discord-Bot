const config = require('../config.json');

exports.run = (client) => {
    console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    client.user.setActivity(`${config.prefix}help ☕️`, {type: "PLAYING"});
}
