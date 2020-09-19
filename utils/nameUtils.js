// Utility to obtain names to match the product IDs.
// A single request can hold multiple product IDs so this is safe, especially as the results are in the same order.
// Somewhat of a band-aid solution until caching in a local database is done.
// This is my first serious web development project so cut me some slack
const axios = require('axios')

const nameConfig = {
  method: 'get',
  url: 'http://api.tcgplayer.com/v1.39.0/catalog/products/',
  headers: {
    'Authorization': 'Bearer i_zKqUcHFgSt8F21B08dTBvEytTf89sBMg9ECX082smWDx7-ZndGJPcPC29301HfyhM7tE12f20xUYyLo4961STtGOvnGxtYyFszTGuqpa_gu0Xo8MLN26ZQtYtbvbq3jeD4s8hA4wLcoQNpFM8eE5UHAp2UWrfXhs8aZ7y2FpYVGmOHqaEItBV8uV429B7FLTcqb3sYPiOZBooY5gMnPNcgjAN9D2ueVrFT7aWaumBQ8LMtSBmFVVjZJiKcOPArISzcuWaLMn6xTRzkd_MbWs8SRLd6tn58nuED86RhtRTyb-d5uURvJqbT9SktZteiBPk8hA',
    'Cookie': 'AWSALB=h9qlB/EYZb2TiecRGIaPrXQrJS0QBVuH9bpOU8HWG5CSfCHxCHp0FJCP5IJk7JiUYRztv10o+TsWMcDw7IvufNTvMkhdlHJbdPFXzcObk36lxJiMd7abKI57Wnuw'
  }
}

const saveProductId = async() => {

}
/*
const getNameForProduct = async (productId) => {
  const result = await PriceData.find({productId: productId})
  if(result.length == 1) {
    return result[0].name
  }
  else if(result.length > 0) {
    return "Multiple items with the same product ID for some reason"
  }
  else {
    return "No result"
  }
}
*/
const obtainNameForSingleProduct = async (productId) => {
  let nameConfigQueryUrl = 'http://api.tcgplayer.com/v1.39.0/catalog/products/' + productId
  let newConfig = {
    method: nameConfig.method,
    url: nameConfigQueryUrl,
    headers: nameConfig.headers
  }
  const nameResponse = await axios(newConfig)
  return nameResponse.data.results[0].name
}
const obtainNames = async (productIds) => {
  let nameConfigQueryUrl = 'http://api.tcgplayer.com/v1.39.0/catalog/products/'
  for(let k = 0; k < productIds.length; k++) {
    nameConfigQueryUrl = nameConfigQueryUrl + productIds[k]
    if(k < productIds.length - 1) {
      nameConfigQueryUrl = nameConfigQueryUrl + ','
    }
  }

  let newConfig = {
    method: nameConfig.method,
    url: nameConfigQueryUrl,
    headers: nameConfig.headers
  }

  const nameResponse = await axios(newConfig)
  return nameResponse.data.results
}

module.exports = {
  obtainNames,
  obtainNameForSingleProduct
}
