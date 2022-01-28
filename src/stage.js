const { Markup, Scenes } = require("telegraf");
const locale = require("./locale");
const util = require("./util");

const Imlo = new Scenes.WizardScene(
    "IMLO",
    async (ctx) => {
        ctx.reply(locale.imlo.text, locale.imlo.btns);
        return ctx.wizard.next();
    },
    async (ctx) => {
        const text = ctx.message.text;
        if (text === locale.back.key) {
            ctx.reply(locale.back.text, locale.back.btns);
            return ctx.scene.leave();
        }
        const checkedText = await util.spellingErrors(text);
        if (!checkedText.errors) {
            await ctx.reply("Hech qanday xato topilmadi");
            return;
        } else {
            // await checkedText.data
            let errors = "";
            let count = 1;
            for (const error of checkedText.data) {
                errors += `<code>${count++}. ${
                    error.word
                } (o'xshash: ${error.suggestions.join(", ")})</code>\n`;
            }
            await ctx.reply(
                `<b>${checkedText.data.length} ta xato so'z topildi.</b>\n\n<b>Bular:</b>\n${errors}`,
                { parse_mode: "HTML" }
            );
            console.log(checkedText);
            return;
        }

        return ctx.scene.leave();
    }
);

module.exports = new Scenes.Stage([Imlo]);
