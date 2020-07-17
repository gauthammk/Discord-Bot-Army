const fetch = require("node-fetch");

var res;
// API call
const url =
  "https://ghapi.huchen.dev/repositories?language=&since=daily&spoken_language_code=";

async function main() {
  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  res = getData(url).then((res) => {
    res = res.slice(0, 3);
    res.forEach((element) => {
      console.log(element.name);
    });
  });
}

main();
