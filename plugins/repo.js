

/*
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *CASEYWEB*

> *CASEYWEB REPO:*
*|* https://github.com/caseyweb/CASEYRHODES XMD

> *SUPPORT GROUP:*
*|* https://whatsapp.com/channel/0029Vb5FRYcDzgT39Qiu5S3h
*╰──────────────●●►*

> *CREATED BY CASEYRHODES TECH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363318387454868@newsletter',
      newsletterName: "𝐀ɭι̇ι̇ 𝐌Ɗ 🍁",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝐀ɭι̇ι̇ 𝐌Ɗ 🍁',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/itx-alii-raza/ALI-MD" ,
thumbnailUrl: "https://i.ibb.co/8Dzbtwj2/mrfrankofc.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "script",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🎗️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://whatsapp.com/channel/0029Vb5FRYcDzgT39Qiu5S3h';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒-𝐗𝐌𝐃 𝐖.𝐀 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑!😇👑* 

> *sɪᴍᴘʟᴇ, ɪᴄʏ, ᴄᴏʟᴅ  & ʀɪᴄʜ ʟᴏᴀᴅᴇᴅ ʙᴏᴛ ᴡɪᴛʜ ᴀᴍᴀᴢɪɴɢ ғᴇᴀᴛᴜʀᴇs, ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ.*❄️

*𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐄𝐈𝐍𝐆 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒-𝐗𝐌𝐃🫶* 

> *ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ🌟🍴*

https://github.com/caseyweb/CASEYRHODES-XMD
──────────────────
${readMore}
\`BOT NAME:\`❄️
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/heu4tc.png` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363302677217436@newsletter',
                    newsletterName: '☇ cαsєчrhσdєs suppσrt  ⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/wp4a7x.mp4' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363302677217436@newsletter',
                    newsletterName: '☇ cαsєчrhσdєs suppσrt⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
