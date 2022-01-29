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
        if (text.length > 2000) {
            ctx.reply(
                "Kiritilgan matndagi belgilar soni 2000tadan kam bo'lishi kerak"
            );
            return;
        }
        const response = await util.spellingErrors(text);
        if (response.code === 200) {
            const checkedText = await response.data;
            if (!checkedText.errors) {
                ctx.reply("Hech qanday xato topilmadi");
                return;
            } else {
                let errors = "";
                let count = 1;
                for (const error of checkedText.data) {
                    errors += `<code>${count++}. ${
                        error.word
                    } (o'xshash: ${error.suggestions.join(", ")})</code>\n`;
                }
                ctx.reply(
                    `<b>${checkedText.data.length} ta xato so'z topildi.</b>\n\n<b>Bular:</b>\n${errors}`,
                    { parse_mode: "HTML" }
                );
                return;
            }
        } else {
            ctx.reply(response.message);
            return;
        }
    }
);

const Latin = new Scenes.WizardScene(
    "LOTIN",
    async (ctx) => {
        ctx.reply(locale.lotin.text, locale.lotin.btns);
        return ctx.wizard.next();
    },
    async (ctx) => {
        const text = ctx.message.text;
        if (text === locale.back.key) {
            ctx.reply(locale.back.text, locale.back.btns);
            return ctx.scene.leave();
        }
        if (text.length > 1000) {
            ctx.reply(
                "Kiritilgan matndagi belgilar soni 1000tadan kam bo'lishi kerak"
            );
            return;
        }
        const response = await util.toLatin(text);
        if (response.code === 200) {
            const latinText = await response.data;
            ctx.reply(latinText, {
                parse_mode: "HTML",
            });
            return;
        } else {
            ctx.reply(response.message);
            return;
        }
    }
);

module.exports = new Scenes.Stage([Imlo, Latin]);
