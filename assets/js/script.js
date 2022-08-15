var apiUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0A7CA6E07B05C1D631D0A8694267AE6D&steamids=76561198125798243";

function getApi(apiUrl) {
  fetch(apiUrl, {
    method: 'GET',
    mode: 'no-cors',
  })
    .then(function (response) {
      console.log(response)
    })
    .then(function (data) {
      console.log(data);
    })
}
getApi(apiUrl);
