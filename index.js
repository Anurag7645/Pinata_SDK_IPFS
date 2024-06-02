require('dotenv').config();
const { PINATA_API_KEY, PINATA_SECRET_KEY} = process.env;

const pinataSDK = require('@pinata/sdk')
const pinata = new pinataSDK('PINATA_SECRET_KEY','PINATA_API_KEY');

pinata.testAuthentication().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});