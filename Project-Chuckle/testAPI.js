const snoowrap = require("snoowrap");

async function scrapeSubreddit() {
  const r = new snoowrap({
    userAgent: "Joke",
    clientId: "AZfYZhZ_qLKECw",
    clientSecret: "P5SY1iiHI49nqpDmcO5nsivQJjQ",
    username: "i_amgmk",
    password: "ga_mbat0015",
  });

  const subreddit = await r.getSubreddit("dankmemes");
  const topDaily = await subreddit.getTop({ time: "day", limit: 1 });
  let data = [];
  console.log(topDaily[0].url);

  // topDaily.forEach((post) => {
  //   data.push({
  //     link: post.url,
  //     text: post.title,
  //     score: post.selftext,
  //   });
  // });

  // console.log(data);
}
scrapeSubreddit();
