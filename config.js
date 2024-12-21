const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_31_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUzLFxuICAgICAgICA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitXbGcxRVBZaTRwVXdHblRlMDQ4dTFTbTFHR0l4Qm5rMVRIVzZEb3VMRVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjB6aldNTnQzVEdPQ2ZMTkhNWExMWndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmNiZmFlZjMtOTBjNy00ZGRkLWI0Y2MtOGU5OTMxOWJiOGY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDQ0LFxuICAgICAgNixcbiAgICAgIDE1NSxcbiAgICAgIDIwMyxcbiAgICAgIDQ4LFxuICAgICAgNCxcbiAgICAgIDIwNSxcbiAgICAgIDI0NyxcbiAgICAgIDIyMyxcbiAgICAgIDE5NixcbiAgICAgIDEwLFxuICAgICAgMTU5LFxuICAgICAgMjIxLFxuICAgICAgMjEzLFxuICAgICAgMTk1LFxuICAgICAgMTc3LFxuICAgICAgMjQ2LFxuICAgICAgMTQzLFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDIwNixcbiAgICAgIDk4LFxuICAgICAgNTUsXG4gICAgICA2NixcbiAgICAgIDYwLFxuICAgICAgMTM2LFxuICAgICAgMjA4LFxuICAgICAgMzAsXG4gICAgICA2MixcbiAgICAgIDMsXG4gICAgICAxNDIsXG4gICAgICAxMCxcbiAgICAgIDE1NSxcbiAgICAgIDI0MSxcbiAgICAgIDUsXG4gICAgICA1NyxcbiAgICAgIDE4NCxcbiAgICAgIDY5LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjNMMlREUFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTA1NDM5NjE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwODk2NTc1NzMzOTc1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStSN05RRUVLdWZuYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQWmxPcGtjWVpSZWJ1OTR0WFpwSGNjRkRNWWxndGhqajdUNmVwQXkrdGxvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlE0SzBXRTM4d3Q3NDVySlhhNlFJN3BqK09LTWNvdjM2MkdBUW93SVVuZVppZjA3S0tPaE4wTGM4UEg2T0oybWVOVDQvektXeTVXYXZ6V2tnWUJOREJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkYyNVRuRlV3c1pROWFlR0pwdGs0SkxIamNjeGdoOWVtOGRWS1V6c1FvSFhlMlJQMmpELy9EV3F5SVptVHVITEJUTW5Cemp4T3lFNFlIOVVrY0hiRmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTA1NDM5NjE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDgyMzg1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxvaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTG9oLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUWtoZTU5UDkwK3FQdUJjZW90OWpwVmczUVJvTWZ1L3Z4TjZDeDYzQStyaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjUxNjc0MjU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ4MjM4NjEyMjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
