const { Telegraf } = require("telegraf");
const { TOKEN } = require("./config");
const bot = new Telegraf(TOKEN);

// Error Handling
bot.catch((err, ctx) => {
    console.log(err);
    ctx.reply("Something wrong");
});

// Public
bot.start((ctx) => {
    ctx.reply("Assalomu alekum");
});

bot.on("text", async (ctx) => {
    console.log(ctx);
});

module.exports = bot;
