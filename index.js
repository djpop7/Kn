import { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

const BOT_TOKEN = process.env.BOT_TOKEN;
const TRIGGER_COMMAND = '!nuke';

if (!BOT_TOKEN) {
    console.error('❌ Error: BOT_TOKEN is not set in .env file');
    process.exit(1);
}

client.once('ready', () => {
    console.log('✅ Bot is online!');
    console.log(`📝 Logged in as ${client.user.tag}`);
    console.log(`🔧 Use command: ${TRIGGER_COMMAND} to delete all channels and create new ones`);
    console.log('⚠️  WARNING: This bot will DELETE ALL CHANNELS when triggered!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content !== TRIGGER_COMMAND) return;

    const guild = message.guild;
    if (!guild) return;

    const member = message.member;
    if (!member.permissions.has(PermissionFlagsBits.Administrator)) {
        return message.reply('❌ You need Administrator permissions to use this command!');
    }

    const botMember = guild.members.me;
    if (!botMember.permissions.has(PermissionFlagsBits.ManageChannels)) {
        return message.reply('❌ I need "Manage Channels" permission to perform this action!');
    }

    try {
        await message.reply('⚠️ Starting channel deletion process... This cannot be undone!');

        const channels = guild.channels.cache;
        console.log(`🗑️  Deleting ${channels.size} channels...`);

        let deletedCount = 0;
        let failedCount = 0;

        for (const [channelId, channel] of channels) {
            try {
                await channel.delete('Channel nuke command executed');
                deletedCount++;
                console.log(`✅ Deleted: ${channel.name}`);
                
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                failedCount++;
                console.error(`❌ Failed to delete ${channel.name}:`, error.message);
            }
        }

        console.log(`📊 Deletion complete: ${deletedCount} deleted, ${failedCount} failed`);

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('📝 Creating new channels...');

        const chatChannel = await guild.channels.create({
            name: 'chat',
            type: ChannelType.GuildText,
            topic: 'General chat channel',
            reason: 'Channel nuke - creating new chat channel'
        });
        console.log('✅ Created: chat');

        const inviteChannel = await guild.channels.create({
            name: 'discord-invites',
            type: ChannelType.GuildText,
            topic: 'Share Discord server invites here',
            reason: 'Channel nuke - creating invite channel'
        });
        console.log('✅ Created: discord-invites');

        await chatChannel.send(`✅ **Channel reset complete!**\n\n📊 Statistics:\n- Deleted: ${deletedCount} channels\n- Failed: ${failedCount} channels\n- Created: 2 new channels\n\nWelcome to the new server structure!`);

        console.log('🎉 Process completed successfully!');

    } catch (error) {
        console.error('❌ Error during channel management:', error);
        
        try {
            const fallbackChannel = guild.channels.cache.find(ch => ch.type === ChannelType.GuildText);
            if (fallbackChannel) {
                await fallbackChannel.send(`❌ An error occurred: ${error.message}`);
            }
        } catch (sendError) {
            console.error('❌ Could not send error message:', sendError);
        }
    }
});

client.on('error', (error) => {
    console.error('❌ Discord client error:', error);
});

client.login(BOT_TOKEN).catch((error) => {
    console.error('❌ Failed to login:', error);
    process.exit(1);
});
