const { matnApiUrl, matnToken } = require("./config");
const axios = require("axios");

exports.spellingErrors = async (text) => {
    try {
        const request = await axios.post(
            `${matnApiUrl}/suggestions`,
            { text: text.split(" ") },
            {
                headers: {
                    Authorization: `Bearer ${matnToken}`,
                },
            }
        );
        return {
            code: 200,
            status: "Success",
            data: request.data,
        };
    } catch (error) {
        if (error.response.status === 400) {
            return {
                code: 400,
                status: "Fail",
                message: "Kiritilgan ma'lumot to'liq emas",
            };
        }
        if (error.response.status === 500) {
            return {
                code: 500,
                status: "Fail",
                message: "Serverda xatolik yuz berdi",
            };
        }
    }
};
