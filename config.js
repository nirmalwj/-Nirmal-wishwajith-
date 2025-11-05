const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/nirmalwj/-Nirmal-wishwajith-/refs/heads/main/images/OIP.webp",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Wishwa Bots Is Alive Now😍*",
BOT_OWNER: '94769787408',  // Replace with the owner's phone number



};
