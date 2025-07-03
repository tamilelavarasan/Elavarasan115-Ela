const axios = require('axios');

const getRequest = async (url, config = {}) => {
    try {
        const response = await axios.get(url, config);
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
};

const postRequest = async (url, data, config = {}) => {
    try {
        const response = await axios.post(url, data, config);
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
};

const handleResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error(`Request failed with status code ${response.status}`);
    }
};

module.exports = {
    getRequest,
    postRequest,
    handleResponse
};