🤖 Latest Updates For Chill Music

✨ Bug Fixes & News
## 📑 Short Feature
- [x] Music
- [x] Playlists System
- [x] Premium System
- [x] Custom Prefix
- [x] Multi Language (98.9%) (can set per guild!)
- [x] SlashCommand
- [x] ContextMenus
- [x] Custom Filters
- [x] Easy to use

## 🎶 Support Source
- [x] Youtube
- [x] SoundCloud
- [x] Spotify
- [x] Deezer
- [x] Facebook 
- [x] Twitch
- [x] Apple
- [x] Bandcamp
- [x] Vimeo
- [x] Https (Radio)

## 🚨 Have a Problem

✈ Join Discord soon:  [Chill Music ♪♪](https://discord.gg/apjZpD2eJu)
   mention me in chat #general ask problem okay! 👌

## 📚 Installation

```
git clone https://github.com/chill-music/chillmusic
cd chillbot
npm install
node .
```

<details><summary>📄 Configuration [CLICK ME]</summary>
<p>

## 📄 Configuration

> **OPTION 1️⃣**

Copy or Rename `.env.example` to `.env` and fill out the values:

```.env
# Bot
TOKEN=REPLACE_HERE
PREFIX=#
NP_REALTIME=true
LEAVE_TIMEOUT=120000
LANGUAGE=en
EMBED_COLOR=#000001

# Devloper
OWNER_ID=REPLACE_HERE

```

> **OPTION 2️⃣**

Go to folder `settings` edit `config.js` and you can fill out the values:

```js
require("dotenv").config();
const { resolve } = require("path");

module.exports = {
    TOKEN: process.env.TOKEN || "YOUR_TOKEN",  // your bot token
    PREFIX: process.env.PREFIX || "-", //<= default is -  // bot prefix
    EMBED_COLOR: process.env.EMBED_COLOR || "#000001", //<= default is "#000001"

    OWNER_ID: process.env.OWNER_ID || "YOUR_OWNER_ID", //your owner discord id example: "298816961293451266"

    NP_REALTIME: process.env.NP_REALTIME || "BOOLEAN", // "true" = realtime, "false" = not realtime :3 // WARNING: on set to "true" = laggy and bot will ratelimit if you have a lot of servers
    LEAVE_TIMEOUT: parseInt(process.env.LEAVE_TIMEOUT || "120000"), // leave timeout default "120000" = 2 minutes // 1000 = 1 seconds

    LANGUAGE: {
      defaultLocale: process.env.LANGUAGE || "en", // "en" = default language
      directory: resolve("languages"), // <= location of language
    },

    DEV_ID: [], // if you want to use command bot only, you can put your id here example: ["298816961293451266", "123456789"]

    MONGO_URI: process.env.MONGO_URI || "YOUR_MONGO_URI", // your mongo uri
    LIMIT_TRACK: parseInt(process.env.LIMIT_TRACK || "100"),  //<= dafault is "100" // limit track in playlist
    LIMIT_PLAYLIST: parseInt(process.env.LIMIT_PLAYLIST || "10"), //<= default is "10" // limit can create playlist

    NODES: [
      { 
        host: process.env.NODE_HOST || "",
        port: parseInt(process.env.NODE_PORT || ""),
        password: process.env.NODE_PASSWORD || "",
      } 
    ],
}
```
After installation or finishes all you can use `node .` to start the bot. or `Run Start.bat`

</p>
</details>

<details><summary>🔩 Features & Commands [CLICK ME]</summary>
<p>

## 🔩 Features & Commands

> Note: The default prefix is '-'

🎶 **Music Commands!** 

- Play (#play, #p, #pplay [song/url])
- Nowplaying (#nowplaying, #np, #now)
- Queue (#queue <page>)
- Repeat (#loop (current, all), #repeat (current, all))
- Loopqueue (#loopall, #lq, repeatall)
- Shuffle (#shuffle, mix)
- Volume control (#vol, #v [10 - 100])
- Pause (#pause, #pa)
- Resume (#resume, #r)
- Skip (#skip, #s)
- Skipto (#skipto, #st [position])
- Clear (#clear)
- Join (#join, #summon)
- Leave (#leave, #dc, #lev, #stop)
- Forward (#forward <second>)
- Seek (#seek <second>)
- Rewind (#rewind <second>)
- Replay (#replay)
- Search (#search [songname])
- 247 (#247)
- Previous (#previous)
- Autoplay (#autoplay)

⏺ **Filter Commands!**
- Bass (#bass)
- Superbass (#superbass, #sb)
- Pop (#pop)
- Treblebass (#treblebass, #tb)
- Soft (#soft)
- Earrape (#earrape, #ear)
- Equalizer (#eq <custom>)
- Speed (#speed <amount>)
- Picth (#pitch <amount>)
- Vaporwave (#vaporwave)
- Nightcore (#nightcore)
- Bassboost (#bassboost, #bb [-10 - 10])
- Rate (#rate)
- Reset (#reset)
- 3d (#3d)
- China (#china)
- Dance (#dance)
- Chipmunk (#chipmunk)
- Darthvader (#darthvader)
- DoubleTime (#doubletime)
- SlowMotion (#slowmotion)
- Tremolo (#tremolo)
- Vibrate (#vibrate)
- Vibrato (#vibrato)
- Daycore (#daycore)
- Television (#Television)
- Jazz (#jazz)
	
📦 **Playlist Commands!**
- Create (#create [name])
- Add (#add [name] [link])
- Private (#private [name])
- Public (#public [name])
- Delete (#delete [name])
- Import (#import [name])
- Detail (#detail [name])
- Remove (#remove [name] [position])
- Savequeu (#savequeue [name])
- View (#view)
	
💎 **Premium Commands!**
- Premium (#premium [plan] [user id])
- Generate (#generate [plan] [amount])
- Redeem (#redeem [code])
	
📑 **Utilities Commands!**
- Restart (#restart, #stopbot)
- DeploySlash (#deploy, #dps) <= only one guild
- ClearSlash (#cdps) <= work only deployslash
- Prefix (#prefix [new prefix])
- Language (#language [lang]) // Example: en, hi
- DeploySlashGlobal (#deployglobal, #dpsg) <= want change need wait 1 - 2 hrs.
- Help (#help, #halp [command])

</p>
</details>


<details><summary>🖼 Picture [CLICK ME]</summary>
<p>
<a href="https://github.com/MrShehabTito/ChillBot"><img src="https://i.imgur.com/fOJQvYp.png" alt="Red - Discord Bot"></a>
<a href="https://github.com/MrShehabTito/ChillBot"><img src="https://i.imgur.com/1V8E7k4.png" alt="Red - Discord Bot"></a>
<a href="https://github.com/MrShehabTito/ChillBot"><img src="https://i.imgur.com/aNH9UNN.png" alt="Red - Discord Bot"></a>
<a href="https://github.com/MrShehabTito/ChillBot"><img src="https://i.imgur.com/5f7wMbp.png" alt="Red - Discord Bot"></a>
</p>
</details>

<details><summary>👏 Credits [CLICK ME]</summary>
<p>

## 👏 THANK
- [ShehabTito](https://discord.gg/apjZpD2eJu)

</p>
</details>
