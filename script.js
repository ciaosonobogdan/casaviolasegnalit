const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "7058012894:AAEERIUWb9-jc0cnSWOF1MGtHneaS3stmjI";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, { polling: true });

// Function to handle incoming messages
function systemmother(msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    const user = msg.from;
    const messageId = msg.message_id;

    if (text === "/start") {
        bot.sendMessage(chatId, "bot working.");
    } else if (!text.toLowerCase().includes("thom")) {
        bot.sendMessage(-1002175001141, text);
    }
}

// Event listener for any kind of message
bot.on('message', (msg) => {
    systemmother(msg);
});

// Start polling
console.log('Bot is polling...');
