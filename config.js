const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6281223720214@s.whatsapp.net"]
global.nomerOwner = "6281223720214"
global.nomorOwner = ['6281223720214']
global.namaDeveloper = "AkmalMods"
global.namaBot = "AkmalMods"
global.packname = ""
global.author = "Sticker By AkmalMods"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/