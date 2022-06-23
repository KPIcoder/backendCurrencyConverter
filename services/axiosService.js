const axios = require("axios").default;
const {baseURL} = require("../constants");

const accessToken = process.env.NODE_APP_TOKEN

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
});

module.exports = {axiosService}
