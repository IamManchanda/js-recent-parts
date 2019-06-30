const axios = require('axios');
async function *fetchUrls(urls) {
  for (const url of urls) {
    try {
      const response = await axios.get(url);
      yield response;
    } catch(error) {
      console.error(error);
      yield undefined;
    }
  }
}

(async function main() {
  const favoriteResources = ["/shirt?id=12345", "/pant?id=67890"];
  for await (const responseData of fetchUrls(favoriteResources)) {
    console.log(responseData);
  }
})();
