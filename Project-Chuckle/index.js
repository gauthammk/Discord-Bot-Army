const Discord = require("discord.js");
const { exit } = require("process");
const {
  token,
  clientId,
  clientSecret,
  username,
  userAgent,
  password,
} = require("./config.json");
const snoowrap = require("snoowrap");

// start client
const client = new Discord.Client();

// check if the bot is running
client.on("ready", async () => {
  console.log("Bot is running!");

  // establish channel to send the message in
  const channel = client.channels.cache.get("732489019493056553");

  try {
    // reddit OAuth
    const r = new snoowrap({
      userAgent: userAgent,
      clientId: clientId,
      clientSecret: clientSecret,
      username: username,
      password: password,
    });

    const subreddit = await r.getSubreddit("dankmemes");
    const topDaily = await subreddit.getTop({ time: "day", limit: 1 });
    if (!topDaily.length) {
      channel.send("Oops! that was a bad request :(");
    } else {
      console.log(topDaily[0].url);
      channel.send(topDaily[0].url);
    }
  } catch (error) {
    console.log(error);
    channel.send("Oops! that was a server error :(");
  }
});

// exit after 10s
setTimeout(function () {
  return exit(0);
}, 10000);

client.on("error", (err) => console.log(err));

// authenticate using the BOT token
client.login(token);
