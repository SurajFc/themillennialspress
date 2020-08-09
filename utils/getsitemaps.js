const axios = require('axios');

module.exports = async function getSiteMaps() {
  let baseUrl = process.env.server_url
  let data
  await axios.get(`${baseUrl}news/mysitemaps`).then(
    res => {

      data = res.data
    }
  )

  return data.map(v => `/${v.category.slug}/${v.slug}`)

}
