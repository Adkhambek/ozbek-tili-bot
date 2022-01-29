const { Markup } = require("telegraf");

module.exports = {
    start: {
        text: (firstName) =>
            `<b>Assalomu alekum, ${firstName}</b>\n\nSizni botimizda ko'rishdan hursandmiz 😊\n\nMarhamat kerakli  bo'limni tanlang.\n\n<a href ='https://t.me/muzaffarovadham'>Adham Muzaffarov</a>`,
        btns: Markup.keyboard([
            ["Imloviy xatolarni tekshirish"],
            ["Lotinchaga o'girish", "Kirillchaga o'girish"],
        ]).resize(),
    },
    imlo: {
        key: "Imloviy xatolarni tekshirish",
        text: "Xatolikni tekshirish uchun matn yoki so'z yuboring:",
        btns: Markup.keyboard([["🔙 Orqaga"]]).resize(),
    },
    lotin: {
        key: "Lotinchaga o'girish",
        text: "Lotinchaga o'girish uchun matn yoki so'z yuboring:",
        btns: Markup.keyboard([["🔙 Orqaga"]]).resize(),
    },
    cyrill: {
        key: "Kirillchaga o'girish",
        text: "Kirillchaga o'girish uchun matn yoki so'z yuboring:",
        btns: Markup.keyboard([["🔙 Orqaga"]]).resize(),
    },
    back: {
        key: "🔙 Orqaga",
        text: "🔝 Asosiy menu",
        btns: Markup.keyboard([
            ["Imloviy xatolarni tekshirish"],
            ["Lotinchaga o'girish", "Kirillchaga o'girish"],
        ]).resize(),
    },
};
