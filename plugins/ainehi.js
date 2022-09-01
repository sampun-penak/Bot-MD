let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let hellomimim = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus') 
conn.sendFile(m.chat, hellomimim, '', '', m, true)
//conn.sendMessage(m.chat, hellomimim, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: hellomimim }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(hi|hii|hiii|hi mimim|hii mimim|hiii mimim|hy|halo|hallo|helo|hello|hy mimim|halo mimim|hallo mimim|helo mimim|hello mimim)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
