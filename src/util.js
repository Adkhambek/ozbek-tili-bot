const { matnApiUrl, matnToken } = require("./config");
const axios = require("axios");
const { urlencoded } = require("express");

exports.spellingErrors = async (text) => {
    try {
        const request = await axios.post(
            `${matnApiUrl}/suggestions`,
            { text },
            {
                headers: {
                    Authorization: `Bearer ${matnToken}`,
                },
            }
        );
        return await request.data;
    } catch (error) {
        if (error.response.status === 400) {
            return "Kiritilgan ma'lumot to'liq emas";
        }
        if (error.response.status === 500) {
            return "Serverda xatolik yuz berdi";
        }
    }
};
