var apiUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0A7CA6E07B05C1D631D0A8694267AE6D&steamids=76561198125798243";
var ingredientsUrl = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c';
var instructionsUrl ="https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c" ;
var img =document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var id = 0 //this is going to be set to whatever the logic is going to be from the game data.


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


function getApiIngredients(ingredientsUrl) {
  fetch(ingredientsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.title);
    img.src=data.image;
    for(var i=0;i<data.extendedIngredients.length;i++){
        console.log(data.extendedIngredients[i].name);
    }
  })
}
getApiIngredients(ingredientsUrl);


function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
    fetch(instructionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
    })
  }
getApi(instructionsUrl);