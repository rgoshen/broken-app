const axios = require('axios');

async function getUserData(devs) {
  let responses = await axios.all(
    devs.map((dev) => axios.get(`https://api.github.com/users/${dev}`))
  );
  let developers = responses.map((res) => {
    return { name: res.data.name, bio: res.data.bio };
  });

  return developers;
}

module.exports = getUserData;
