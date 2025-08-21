import { Bot, InputFile } from "grammy";
import "dotenv/config"

const bot = new Bot(process.env.BOT_TOKEN!);

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     // send message with button with webapp url
//     const url = "https://68b17eb60f6d.ngrok-free.app"
//     console.log("Url => ",url)
//     bot.api.sendMessage(chatId, 'Hello!', {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     {
//                         text: 'Open Web App',
//                         web_app: {
//                             url:url
//                         }
//                     }
//                 ]
//             ]
//         }
//     });
// });

bot.command("start", (ctx) => {
    ctx.reply("Hello!");
    bot.api.sendDocument(ctx.chat.id, new InputFile("./public/index.html"), {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: {
                            url:"https://68b17eb60f6d.ngrok-free.app"
                        }
                    }
                ]
            ]
        }
    });
});

bot.start({ limit:100, timeout:30, onStart: () => console.log("Bot started") });

    