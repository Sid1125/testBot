module.exports = (client, message) => {

    if (message.author.bot) return;

    const prefix = 's#';

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    if (!cmd) return;
    if (cmd) cmd.run(client, message, args);
    if (cmd) console.log(cmd);
    if (cmd) console.log(command)
};