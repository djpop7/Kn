export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Discord Channel Manager</h1>
            <a
              href="https://github.com/djpop7/Kn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-300 ring-1 ring-red-500/30">
            ⚠️ DESTRUCTIVE OPERATION
          </div>
          <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Discord Channel
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Manager Bot
            </span>
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            A powerful Discord bot that resets your server&apos;s channels with a single command.
            Deletes all existing channels and creates a fresh start.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#setup"
              className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#documentation"
              className="rounded-lg border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-red-300">⚠️ Important Warning</h3>
            <p className="mb-4 text-lg text-red-200">
              This bot performs <strong>DESTRUCTIVE actions</strong> that cannot be undone. When triggered, it will:
            </p>
            <ul className="space-y-2 text-red-200">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Delete ALL channels in your Discord server</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Create only 2 new channels: &quot;chat&quot; and &quot;discord-invites&quot;</span>
              </li>
            </ul>
            <p className="mt-4 text-lg font-semibold text-red-300">
              Use with extreme caution! Make sure you understand the consequences before running this bot.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-12 text-center text-4xl font-bold text-white">Features</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">🗑️</div>
              <h4 className="mb-2 text-xl font-semibold text-white">Channel Deletion</h4>
              <p className="text-gray-300">
                Automatically deletes all existing channels in your server with proper rate limiting
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">✨</div>
              <h4 className="mb-2 text-xl font-semibold text-white">Fresh Start</h4>
              <p className="text-gray-300">
                Creates two new channels: one for chat and one for Discord invites
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">🔒</div>
              <h4 className="mb-2 text-xl font-semibold text-white">Admin Only</h4>
              <p className="text-gray-300">
                Requires Administrator permissions to execute, ensuring security
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">⚡</div>
              <h4 className="mb-2 text-xl font-semibold text-white">Rate Limiting</h4>
              <p className="text-gray-300">
                Built-in 1-second delay between deletions to avoid Discord API limits
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">📊</div>
              <h4 className="mb-2 text-xl font-semibold text-white">Detailed Logging</h4>
              <p className="text-gray-300">
                Comprehensive error handling and logging for all operations
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">🎯</div>
              <h4 className="mb-2 text-xl font-semibold text-white">Simple Command</h4>
              <p className="text-gray-300">
                Just type !nuke to trigger the channel reset process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-12 text-center text-4xl font-bold text-white">Setup Instructions</h3>
          <div className="space-y-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 text-xl font-semibold text-purple-300">1. Create a Discord Bot</h4>
              <ol className="space-y-2 text-gray-300">
                <li>• Go to the Discord Developer Portal</li>
                <li>• Click &quot;New Application&quot; and give it a name</li>
                <li>• Navigate to the &quot;Bot&quot; section and click &quot;Add Bot&quot;</li>
                <li>• Copy the bot token (you&apos;ll need this later)</li>
                <li>• Enable Server Members Intent and Message Content Intent</li>
              </ol>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 text-xl font-semibold text-purple-300">2. Invite Bot to Server</h4>
              <ol className="space-y-2 text-gray-300">
                <li>• In Developer Portal, go to OAuth2 → URL Generator</li>
                <li>• Select &quot;bot&quot; scope</li>
                <li>• Select &quot;Manage Channels&quot;, &quot;Send Messages&quot;, and &quot;Read Messages&quot; permissions</li>
                <li>• Copy the generated URL and open it in your browser</li>
                <li>• Select your server and authorize the bot</li>
              </ol>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 text-xl font-semibold text-purple-300">3. Install & Configure</h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-gray-300">Install dependencies:</p>
                  <code className="block rounded-lg bg-black/50 p-3 text-sm text-green-300">
                    npm install
                  </code>
                </div>
                <div>
                  <p className="mb-2 text-gray-300">Create .env file:</p>
                  <code className="block rounded-lg bg-black/50 p-3 text-sm text-green-300">
                    cp .env.example .env
                  </code>
                </div>
                <div>
                  <p className="mb-2 text-gray-300">Add your bot token to .env:</p>
                  <code className="block rounded-lg bg-black/50 p-3 text-sm text-green-300">
                    BOT_TOKEN=your_actual_bot_token_here
                  </code>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 text-xl font-semibold text-purple-300">4. Run the Bot</h4>
              <code className="block rounded-lg bg-black/50 p-3 text-sm text-green-300">
                npm start
              </code>
              <p className="mt-3 text-gray-300">
                You should see a message indicating the bot is online!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="documentation" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-12 text-center text-4xl font-bold text-white">Usage</h3>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="mb-4 text-lg text-gray-300">
              Once the bot is online and in your server, simply type:
            </p>
            <code className="block rounded-lg bg-black/50 p-4 text-center text-2xl font-bold text-purple-300">
              !nuke
            </code>
            <p className="mt-6 text-gray-300">The bot will:</p>
            <ol className="mt-4 space-y-2 text-gray-300">
              <li>1. Verify you have Administrator permissions</li>
              <li>2. Delete all channels (with 1 second delay between each)</li>
              <li>3. Create two new channels: &quot;chat&quot; and &quot;discord-invites&quot;</li>
              <li>4. Send a completion message in the chat channel</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-12 text-center text-4xl font-bold text-white">Technical Details</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 text-lg font-semibold text-purple-300">Built With</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• discord.js v14</li>
                <li>• Node.js 18+</li>
                <li>• ES6 Modules</li>
                <li>• dotenv for configuration</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 text-lg font-semibold text-purple-300">Required Permissions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Manage Channels</li>
                <li>• Send Messages</li>
                <li>• Read Messages/View Channels</li>
                <li>• Administrator (for users)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 px-6 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl text-center text-gray-400">
          <p className="mb-2">Discord Channel Manager Bot</p>
          <p className="text-sm">
            Use responsibly. This bot is provided as-is without warranty.
          </p>
          <p className="mt-4 text-sm">
            Licensed under ISC License
          </p>
        </div>
      </footer>
    </div>
  );
}
