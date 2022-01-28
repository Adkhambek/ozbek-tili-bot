const { Telegraf } = require("telegraf");
const { TOKEN } = require("./config");
const bot = new Telegraf(TOKEN);
const { start } = require("./locale");

// Error Handling
bot.catch((err, ctx) => {
    console.log(err);
    ctx.reply("Something wrong");
});

// Public
bot.start((ctx) => {
    const firstName = ctx.message.chat.first_name;
    ctx.reply(start.text(firstName), {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...start.btns,
    });
});

bot.on("text", async (ctx) => {
    console.log(ctx);
});

module.exports = bot;
