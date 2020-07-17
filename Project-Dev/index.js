const Discord = require("discord.js");
const fetch = require("node-fetch");
const { exit } = require("process");
const { token } = require("./config.json");

// start client
const client = new Discord.Client();

// check if the bot is running
client.on("ready", async () => {
  console.log("Bot is running!");

  // establish channel to send the message in
  const channel = client.channels.cache.get("732492505500876882");
  var res;

  // API endpoint
  const url =
    "https://ghapi.huchen.dev/repositories?language=&since=daily&spoken_language_code=";

  try {
    const response = await fetch(url);
    const json = await response.json();
    if (!json.length) {
      channel.send("Oops! that was a bad request :(");
    } else {
      // getting the result
      res = json.slice(0, 3);
      // sending the top 3 the GitHub URLs
      res.forEach((element) => {
        console.log(element.url);
        channel.send(element.url);
      });
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
