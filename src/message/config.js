/*
Mau Yang No Enc Luh ?

https://wa.me/6285731947500
*/

const fs = require('fs')
const chalk = require('chalk')


//apikey
global.lolkey = 'ISI_APIKEY_LOLHUMAN'

global.mode = false
global.autodltt = false
global.counttroli = 555999777
global.typemenu = 'document'
global.owner = ['6285878836361'] //Masukin nomor mu
global.ownernomer = "6285878836361" //Masukin nomor mu
global.premium = ['6285878836361'] //Masukin nomor mu
global.ownername = 'rizki' //Masukin nama kamu
global.botname = 'ikybot' //Masukin nama bot kamu
global.fakename = 'ikybot' //Masukin nama mu
global.fakebody = 'Hubungi jika ingin sewabot' // Monggo kalau mau ganti
global.packname = 'Sticker Byikybot' //Gakusah di ubah kalau mau di ubah Monggo 
global.author = '6285878836361' //Monggo kalau mau ubah
global.sessionName = 'KamuNanya' //Gak usah di ubah
global.jumlha = '999' //Gak usah di ubah
global.jumhal = '100000000000000' //Gak usah di ubah
global.jumlah = '1000000000' //Gak usah di ubah
global.prefa = ['','!','.','#','&'] //Gak usah di ubah
global.scmu = 'Sc?\nJoin Gc' //Monggo kalau mau ubah
global.githubmu = 'https://github.com/rizkiwibu' //Isi nama github mu
global.ytmu = 'https://www.youtube.com/@RIZKIIRFAN' //Gak usah di ubah
global.ytvmu = 'https://www.youtube.com/@RIZKIIRFAN' //Gak usah di ubah
global.linkbebas = 'https://chat.whatsapp.com/KcMIbBUddqjIoNmGCrRU5m' //Terserah mau luh isi web apa mau github atau link group juga bisa
global.imglink = 'https://telegra.ph/file/f8af7e61754ab26984fbc.jpg' // isi dengan image link/foto link
global.teksqr = {
gopay: '_Ini kak Qr Gopay nya_',
dana: '_Ini kak Qr Dana nya_',
ovo: '_Ini kak Qr Ovo nya_',
}
global.mess = {
    success: '✅Done',
    admin: '_Fitur Hanya Dapat Di Gunakan Oleh Admin Group!_',
    botAdmin: '_Bot Harus Menjadi Admin Terdahulu!_',
    premium: '_Fitur Hanya Dapat Di Gunakan User Premium!_',
    ban: '_Kamu Telah Di Banned Oleh Bot, Silakan Hubungi Owner Untuk Di Buka!_',
    owner: '_Fitur Hanya Dapat Di Gunakan Oleh Owner Bot!_',
    group: '_Fitur Hanya Dapat Di Gunakan Di Dalam Group!_',
    private: '_Fitur Hanya Dapat Di Gunakan Di Chat Pribadi!_',
    bot: '_Fitur Hanya Dapat Di Gunakan User Bot!_',
    wait: '_Loading . . ._',
    errapi: '_Error Mungkin Apikey Tidak Valid!_',
    errmor: '_Error Kesalahan Sistem_',
}

global.fake = fs.readFileSync('./src/media/image/fake.jpg')
global.thumb = fs.readFileSync('./src/media/image/thumb.jpg')
global.fakevideo = fs.readFileSync('./src/media/video/fakevideo.mp4')

global.apidhaniofc = `https://api.dhaniofc.my.id`
global.dhakey = `exptgl30`



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
