var apiUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0A7CA6E07B05C1D631D0A8694267AE6D&steamids=76561198125798243";



function getMeData() {
  fetch(apiUrl, {
    credentionals: 'same-origin',
    mode: "cors",
    header: {
      'Content-Type': 'application/json'
    }
  })
    .then(function (r) {
      console.log(r)
    })
    .then(function (d) {
      console.log(d)
    })
}

getMeData()