const { Markup } = require("telegraf");

module.exports = {
    start: {
        text: (firstName) =>
            `<b>Assalomu alekum, ${firstName}</b>\n\nSizni botimizda ko'rishdan hursandmiz 😊\n\nMarhamat kerakli  bo'limni tanlang.\n\n<a href ='https://t.me/muzaffarovadham'>Adham Muzaffarov</a>`,
        btns: Markup.keyboard([
            ["Imloviy xatolar", "Lug'at"],
            ["Lotinchaga o'girish", "Kirillchaga o'girish"],
        ]).resize(),
    },
};
