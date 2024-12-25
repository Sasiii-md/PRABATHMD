const envv2 = require('./config-v2')
var GITHUB_TOKEN;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
var BOT_NUMBER;94720800391
var SESSION_ID;PRABATH-MD~dARlgRDY#hGMvNMs4ibsWFZqXmB4b4VXwp0EqSRm-l7USqNuDr0E

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}
if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
}else{
SESSION_ID = envv2.SESSION_ID
}




module.exports = {
    SESSION_ID: SESSION_ID,    
    BOT_NUMBER:  BOT_NUMBER,
    GITHUB_USERNAME: username,
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN,
};
