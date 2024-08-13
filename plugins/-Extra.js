// Add method all to the lib object
async function all(m) {
  // Globally required modules
  global.fs = require("fs"); // File system module
  global.axios = require("axios"); // HTTP client module
  global.fetch = require("node-fetch"); // Fetch API module
  global.ffmpeg = require("fluent-ffmpeg"); // FFmpeg wrapper module
  global.cheerio = require("cheerio") // Cheerio Require Module
  
  // Custom global variables and functions
  global.backsound = "./Library/Backsound"; // Backsound directory
  global.Func = require("../lib/myfunc"); // Custom functions module
  global.Gets = require("../lib/func"); // Custom functions module
  global.uploadImage = require(".././lib/Upload/uploadImage"); // Custom image uploader module
  global.uploadFile = require(".././lib/Upload/uploadFile"); // Custom file uploader module
  
  // Array of images
  global.thumbnail = Func.pickRandom([
    "https://telegra.ph/file/6687a3845e53eed1fac8a.jpg",
    "https://telegra.ph/file/ea7e9bade8c7dc5ac4439.jpg",
    "https://telegra.ph/file/24af442c91c85221fefda.jpg",
    "https://telegra.ph/file/d1622ff6e03e9bf3cbf89.jpg",
    "https://telegra.ph/file/444c3a9a93421721fa86e.jpg",
    "https://telegra.ph/file/b449f2292b38117c447f6.jpg"
  ]);

  global.icon = Func.pickRandom([
    "https://telegra.ph/file/cbe189eb85440617043b2.jpg",
    "https://telegra.ph/file/15be20f9a3d6ee323c43a.jpg",
    "https://telegra.ph/file/b573234f4edc52a6e2b17.jpg",
    "https://telegra.ph/file/d39334f14537817d95a20.jpg",
    "https://telegra.ph/file/120227c7753a7f3823395.jpg",
    "https://telegra.ph/file/fc5535592dcb16d6e4fa1.jpg",
    "https://telegra.ph/file/aba3bdce91c79867f22db.jpg"
  ]);

  // Fake contact message structure
  global.fkontak = {
    key: {
      remoteJid: "0@s.whatsapp.net", // Remote JID
      participant: "0@s.whatsapp.net", // Participant JID
      id: "" // Message ID
    },
    message: {
      conversation: `*[ Kanna-Multidevice BY TWELVE ]*` // Message content
    }
  }
 }
// Export lib module
module.exports = { all };