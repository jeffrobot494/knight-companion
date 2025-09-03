const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 3001,
    username: 'bot',
    password: 'bot',
});

bot.on('kicked', (reason, loggedIn) => {
    console.log('Kicked from server:', reason);
    process.exit(1);
});
