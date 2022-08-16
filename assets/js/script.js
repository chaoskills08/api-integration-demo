var apiUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&format=json'



function getMeData() {
  fetch(apiUrl, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    format: 'json',
  })

    .then(function (response) {
      console.log(response)
      return response.json()

    })
    .then(function (data) {
      console.log(data)
      var filterData = data.results.filter(function (game) {
        return game.aliases !== null

      })
      console.log(filterData)
    })
}

getMeData()