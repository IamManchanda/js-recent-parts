async function *fetchUrls(urls) {
  for (const url of urls) {
    try {
      const response = await (await fetch(url)).json();
      yield response;
    } catch(error) {
      console.error(error);
      yield undefined;
    }
  }
}

(async function main() {
  const resourceUrl = "https://jsonplaceholder.typicode.com";
  try {
    const users = await (await fetch(`${resourceUrl}/users`)).json(); 
    const filteredOddUsers = users.filter(user => user.id % 2 === 1);
    const postsResources = [];
    for (const user of filteredOddUsers) {
      postsResources.push(`${resourceUrl}/posts?userId=${user.id}`);
    }
    for await (const response of fetchUrls(postsResources)) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
})();
