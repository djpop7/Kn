# Discord Channel Manager Bot

A Discord bot that deletes all channels in a server and creates two new ones: one for chat and one for Discord invites.

## ⚠️ WARNING

**This bot performs DESTRUCTIVE actions!** When triggered, it will:
- Delete ALL channels in your Discord server
- Create only 2 new channels: `chat` and `discord-invites`

**Use with extreme caution!** This action cannot be undone. Make sure you understand the consequences before running this bot.

## Features

- Deletes all existing channels in a server
- Creates a "chat" text channel for general conversation
- Creates a "discord-invites" text channel for sharing invite links
- Requires Administrator permissions to execute
- Includes rate limiting protection (1 second delay between deletions)
- Comprehensive error handling and logging

## Prerequisites

- Node.js 18 or higher
- A Discord account
- A Discord server where you have Administrator permissions

## Setup Instructions

### 1. Create a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section in the left sidebar
4. Click "Add Bot" and confirm
5. Under the bot's username, click "Reset Token" and copy the token (you'll need this later)
6. Enable the following Privileged Gateway Intents:
   - Server Members Intent
   - Message Content Intent

### 2. Invite the Bot to Your Server

1. In the Developer Portal, go to "OAuth2" → "URL Generator"
2. Select the following scopes:
   - `bot`
3. Select the following bot permissions:
   - Manage Channels
   - Send Messages
   - Read Messages/View Channels
4. Copy the generated URL and open it in your browser
5. Select your server and authorize the bot

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Bot

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your bot token:
   ```
   BOT_TOKEN=your_actual_bot_token_here
   ```

### 5. Run the Bot

```bash
npm start
```

You should see a message indicating the bot is online.

## Usage

1. Make sure the bot is online and in your server
2. In any text channel, type the command:
   ```
   !nuke
   ```
3. The bot will:
   - Verify you have Administrator permissions
   - Delete all channels (with 1 second delay between each)
   - Create two new channels: `chat` and `discord-invites`
   - Send a completion message in the `chat` channel

## Permissions Required

### User Permissions
- Administrator (to execute the command)

### Bot Permissions
- Manage Channels (to delete and create channels)
- Send Messages (to send status updates)
- Read Messages/View Channels (to read commands)

## Technical Details

- Built with discord.js v14
- Uses ES6 modules
- Implements rate limiting to avoid Discord API limits
- Comprehensive error handling for failed deletions

## Troubleshooting

### Bot doesn't respond to commands
- Make sure the bot is online (check the console for "Bot is online!" message)
- Verify the bot has "Read Messages" permission
- Ensure Message Content Intent is enabled in the Developer Portal

### "I need Manage Channels permission" error
- Go to your server settings → Roles
- Find the bot's role and enable "Manage Channels" permission
- Or give the bot Administrator permission

### Some channels fail to delete
- Some channels may be protected or have special permissions
- The bot will skip failed channels and continue with the rest
- Check the console logs for specific error messages

## Security Notes

- Never share your bot token with anyone
- The `.env` file is gitignored to prevent accidental token exposure
- Only users with Administrator permissions can trigger the bot
- Consider removing the bot from your server after use to prevent accidental triggers

## License

ISC

## Disclaimer

This bot is provided as-is. The authors are not responsible for any data loss or damage caused by using this bot. Always backup important information before running destructive operations.
