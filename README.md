# Insight Bot

Insight Bot is a Discord bot also known as Sage, is built using Node.js and the discord.js API. It provides various slash commands for obtaining information about servers and users, as well as the ability to embed messages and display the roundtrip latency or ping of the bot.

## Features

- **Server Info**: Get information about the current server.
- **User Info**: Get information about a specific user.
- **Embed**: Create and send embedded messages.
- **Ping**: Display the roundtrip latency or ping of the bot.

### Server Info
- /server
- This command will display information about the current server, including its name, ID, region, member count, and more.

  ![/server](images/server-info.png)

### User Info
- /user
- This command will display the name of user, and when the user joined.

  ![/user](images/user-info.png)

### Embed
- /embed
- This command will create an embedded message with the provided content and send it to the current channel.

  ![/embed](images/embed.png)

### Ping
- /ping
- This command will display the roundtrip latency or ping of the bot.

  ![/ping](images/ping.png)

## Installation

To host your own instance of Insight Bot, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running:
```
npm init -y
npm i discord.js
npm i nodemon
npm i dotenv
touch env
touch config.json
```

3. Fill in your Discord bot token, ClientId, GuildId from [Discord developer portal](https://discord.com/developers) and sign into it and also your discord server in env file or a config.json and save it.
4. Start the bot by running: ``` nodemon ```

### Sensitive information 
- Sensitive information is being revoked like clientId, GuildID and the token for security purposes.
- The bot is not being currently hosted.

## Contributing

Contributions to Insight Bot are welcome! If you have any ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

Insight Bot is licensed under the MIT License. See the [MIT](LICENSE) file for more information.
