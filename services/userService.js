const axios = require('axios');

const getToken = require('../utils/tokengenerator');


//loads all env variables from.env to process.env
require("dotenv").config()



// Create a new user account
const createUserService = async (userData) => {

    const url = `${process.env.SPRING_BASE_URL}/createUser`;
    console.log(url);

    const headers = { 'Content-Type': 'application/json' };

    try {

        const response = await axios.post(url, userData, { headers });

        return { status: response.data.statuscode, data: response.data };

    } catch (error) {

        if (!error.response) {
            return { status: 503, data: "Network error" };
        }

        const { statuscode } = error.response.data;

        const { data } = error.response;

        return { status: statuscode , data };
    }
};

// Login user and generate token
const loginUserService = async (loginData) => {
    
    const url=`${process.env.SPRING_BASE_URL}/login`

    const headers = { 'Content-Type': 'application/json' };

    try {

        const response = await axios.post(url, loginData, { headers });

        const token = getToken(response.data);

        return { status: response.data.statuscode, data: response.data, token };

    } catch (error) {

        if (!error.response) {
            return { status: 503, data: "Network error" };
        }

        const { statuscode } = error.response.data;

        const { data } = error.response;

        return { status: statuscode , data };
    }
};

//Get all items of user
const userItemsService = async (userid) => {
    
    const url=`${process.env.SPRING_BASE_URL}/user/${userid}/getAllitems`

    try {

        const response = await axios.get(url)
        console.log("inside userItemService")
        console.log(response.data)

        return { status: response.data.statuscode, data: response.data};

    } catch (error) {

        if (!error.response) {
            return { status: 503, data: "Network error" };
        }

        const { statuscode } = error.response.data;

        const { data } = error.response;

        return { status: statuscode , data };
    }
};

module.exports = {
    createUserService,
    loginUserService,
    userItemsService
};
