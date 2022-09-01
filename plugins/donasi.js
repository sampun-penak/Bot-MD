let handler = async m => m.reply(`
╭─「 Donasi • Donate 」
│ • Pulsa : [0878-48115476]
│ • Pulsa 2  [0838-1644-6896]
│ • Dana : [0878-48115476]
│ • Ovo : [0878-48115476]
│ • Gopay : [0878-48115476]
│ • MotionPay : [0878-48115476]
│ • Saweria : https://saweria.co/mimimproject
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler