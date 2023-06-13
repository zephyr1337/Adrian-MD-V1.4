const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'Arxzy'
global.rosekey = 'Rs-Arxzy.Dev'
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Adrian-MD V2.1'
global.namaowner = 'Arxzy お-ぎ'

//—————「 Setting Owner 」—————//
global.owner = '6289513081052'
global.ownernomer = ["6289513081052"]
global.premium = ['6289513081052']

//—————「 Set Wm 」—————//
global.packname = ''
global.author = 'Arxzy お-ぎ'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/54bdfdfaeadbda3984b82.jpg'
global.isLink = `https://youtube.com/@dryanbot`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
