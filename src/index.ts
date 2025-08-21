import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config';

const bot = new TelegramBot(process.env.BOT_TOKEN!, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    // send message with button with webapp url
    const url = "https://68b17eb60f6d.ngrok-free.app"
    console.log("Url => ",url)
    bot.sendMessage(chatId, 'Hello!', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: {
                            url:url
                        }
                    }
                ]
            ]
        }
    });
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello!');
});



    