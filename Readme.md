# CheaterGPT
It's a personal project with the sole goal of online test cheating.

---
## What is CheaterGPT ?
Your online test activities may be monitored in some instances, making it impossible for you to open a new tab to cheat.

**CheaterGPT** creates a small popup element within the Browser DOM, and because it is not a new window/tab, it is not flagged as suspicious activity.

---
## How Use ?
1. Login to [OpenAi Console](https://platform.openai.com/)
2. Then go to [View API keys], which is under your profile or click on this (https://platform.openai.com/account/api-keys)
3. Create a new **KEY**
4. At the time of online test, open **Developer's Console** `F12` or `Fn + F12`, then navigate to **Console** and type this
```javascript
document.body.appendChild(document.createElement('script')).src='https://shivamsuyal.github.io/cheaterGPT/cheater.js';
```
#### OR
If you are a lasy bum like me who don't want to paste this code everytime then, I've also coded a Chromium-Browser based extension
[Extension](https://github.com/shivamsuyal/cheaterGPT/tree/master/download)

5. Enter your Api key
6. And then **CHEAT**

## Special Feature
1. As here we are opening any new window/tab so no history is being created
1. Incase, someone notices you, you just press **[`] Backtick** to hide/show the popup window


