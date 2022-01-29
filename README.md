# O'zbek tili bot

Ushbu bot orqali siz kiritgan matningizdagi xatolarni topishingiz, lotinchadan kirillchaga va kirillchadan lotinchaga o'girishingiz mumkin.

[matn.uz](https://matn.uz/) APIsidan foydalanib qilingan bot.

Agar siz ham shu API dan foydalanmoqchi bo'lsangiz ushbu so'rovnomani to'ldirib matn.uz adminidan TOKEN olishingiz mumkin: https://matn.uz/api

Matn.uz Telegram gruppasi: [@matnteam](https://t.me/matnteam)

## O'rnatish

```
$ git clone https://github.com/Adkhambek/ozbek-tili-bot.git
$ cd ozbek-tili-bot
$ npm install
```

## Ishga tushirish

1. [@BotFather](https://t.me/BotFather) orqali bo't yasab undan TOKEN oling;
2. https://matn.uz/api so'rovnoma to'ldirib TOKEN olish
3. .env faylini yasab quyidagilarni kiriting:

-   TOKEN
-   PORT
-   BASE_URL
-   SECRET_PATH
-   MATN_TOKEN

( .env.example faylidan foydalansangiz bo'ladi )

4. npm run dev

## Ishlatilgan texnalogiyalar

-   Nodejs
-   Telegraf
-   Express
-   Qo'shimcha: axios, dotenv and cross-env
