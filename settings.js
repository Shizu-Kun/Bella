/**
[ DONT DELETE MY CREDIT ]
- Creator : Kii4Dev
- Support : Chatgpt [ Support System ]
*/  
const fs = require("fs");
const chalk = require("chalk");
let moment = require("moment-timezone");

/*[ WAKTU ]*/
let wibh = moment.tz("Asia/Jakarta").format("HH");
let wibm = moment.tz("Asia/Jakarta").format("mm");
let wibs = moment.tz("Asia/Jakarta").format("ss");
let wktuwib = `${wibh}:${wibm}:${wibs}`;

/*[ TANGGAL ]*/
let d = new Date(new Date() + 3600000);
let locale = "id";

let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
  Math.floor(d / 84600000) % 5
];
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric"
});
global.botdate = date
/*[ OWNER ]*/
global.owner = [
  ["62882005514880", "Kii4Dev", true],
  ["62815420548391", "Bot", true]
];
global.rowner = "62882005514880@s.whatsapp.net";
global.numberbot = "62815420548391";

/*[ APIKEY ]*/
global.skizo = "Chainga";

/*[ SETTING TAMPILAN ]*/
global.APIs = {
  skizo: "https://skizo.tech"
};
global.APIKeys = {
  "https://skizo.tech": "Chainga"
};
global.isPairing = true;
global.max_upload = 200
global.link = "https://chat.whatsapp.com/xxx"; // Source Url (IG/GROUP/YOUTUBE) ALL LINK
global.ig = "https://instagram.com/xxx";
global.confess = "https://telegra.ph/file/03cabea082a122abfa5be.jpg";
/*[ AI LOGIC ]*/
global.logic = "Logic ai";

/*[ AUTHOR SETTING ]*/
global.tampilan = "BaseBot"; // Console ( KANNA MD )
global.author = global.creator = "Kii4Dev"; // Nama Owner dan Author Sticker
global.namebot = "BaseBot"; // Nam Bot
global.packname = "© Powered By Kii4Dev"; // WM / Watermark
global.wm = "BaseBot Created By Kii4Dev";

/*[ GAME SETTING ]*/
global.multiplier = 69; // Levelup

/*[ MESS SETTING ]*/
global.mess = {
  done: "[ ✓ ] Permintaan Berhasil",
  wait: "[ ᯤ ] Permintaan Sedang Di Proses",
  error: "[ ∆ ] Permintaan Sedang Eror, Contact Owner"
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
