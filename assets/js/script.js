var gameId =0;
var id = '0';//this is going to be set to whatever the logic is going to be from the game data.
var ingredientsUrl = 'https://api.spoonacular.com/recipes/random?apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c&cuisine='+id;
var img =document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var buttonName=document.getElementById('genBtn');
var ingredients= document.getElementById("ingredientsList");
var img = document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var id = 0 //this is going to be set to whatever the logic is going to be from the game data.
var apiUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&format=json'
var reviewsUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/reviews/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&filter=score:5&sort=score:asc&format=json&limit=5'
var gameFetch = document.getElementById('gameFetch');
var gameBtn = document.getElementsByClassName("gameButtons");
var gameInfo = document.getElementById("gameInfo");
var gameId = 0


// function getGameData() {
//   fetch(apiUrl, {
//     method: 'GET',
//     header: {
//       'Content-Type': 'application/json'
//     },
//     format: 'json',
//   })

//     .then(function (response) {
//       console.log(response)
//       return response.json()

//     })
//     .then(function (data) {
//       console.log(data)
//     })
// }
var buttonData = gameBtn.innerText
function getReviews() {
  fetch(reviewsUrl, {
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
      if (buttonData === "Metal Gear Solid 4")
        console.log(buttonData)

      console.log(gameBtn); {
        var gameCreate = document.createElement('h2')
        var descCreate = document.createElement('p')
        gameCreate.textContent = data.results[0].game.name
        descCreate.textContent = data.results[0].deck
        gameInfo.appendChild(gameCreate);
        gameInfo.appendChild(descCreate);
      }
    })



}


var gameId = 0
var id = 324694 //this is going to be set to whatever the logic is going to be from the game data.
var img = document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var buttonName = document.getElementById('buttonName');
var ingredients = document.getElementById("ingredientsList");
var recipeSteps = document.getElementById("steps");


function getApiIngredients(ingredientsUrl) {
  fetch(ingredientsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.recipes[0].title);
    var name =data.recipes[0].title;
    steps.append(name);
    var img1 =document.createElement("img");
    img1.setAttribute('src',data.recipes[0].image);
    steps.append(img1);
    for(var i=0;i<data.recipes[0].extendedIngredients.length;i++){
        var ingredientName = document.createElement('li');
        ingredientName.textContent=data.recipes[0].extendedIngredients[i].original;
        ingredients.append(ingredientName);
    for(var j=0;j<data.recipes[0].analyzedInstructions[0].steps.length;j++){
        var stepName = document.createElement('li');
        stepName.textContent=data.recipes[0].analyzedInstructions[0].steps[j].step
        steps.append(stepName);
    }
    }
  })
}


function idLogic(gameId) {
   
  if(gameId===1){
    id='Middle_Eastern';
  }
  else if(gameId===2){
    id = 'Eastern European';
  }
  else if(gameId===3){
    id='American';
  }
  else if(gameId===4){
    id='Japanese';
  }
  else if(gameId===5){
    id='British';
  }
}

// function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
//     fetch(instructionsUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for(var i=0;i<data[0].steps.length;i++){
//         console.log(data[0].steps[i].step);
//         var stepName = document.createElement('li');
//         stepName.textContent=data[0].steps[i].step
//         recipeSteps.append(stepName);
//       }
      
//     })
//   }


//   Metal Gear Solid 4 1  Middle Eastern
// Battlefield: Bad Company 2  Eastern European
// Burnout Paradise 3  American
// Professor Layton and the Curious Village 4 Japanese 
// Condemned 2: Bloodshot 5 British

buttonName.addEventListener("click",function(){
  console.log("This button works");
  //  getApi(instructionsUrl);
   getApiIngredients(ingredientsUrl);    //will display data, will probably also run the logic from converting value of game to that of a food" 
})
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.title);
      img.src = data.image;
      for (var i = 0; i < data.extendedIngredients.length; i++) {
        var ingredientName = document.createElement('li');
        ingredientName.textContent = data.extendedIngredients[i].name;
        ingredients.append(ingredientName);
      }
    })

// getApiIngredients(ingredientsUrl);


function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
  fetch(instructionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.title);
      img.src = data.image;
      for (var i = 0; i < data.extendedIngredients.length; i++) {
        var ingredientName = document.createElement('li');
        ingredientName.textContent = data.extendedIngredients[i].name;
        ingredients.append(ingredientName);
      }
    })
}

function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
  fetch(instructionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data[0].steps.length; i++) {
        console.log(data[0].steps[i].step);
        var stepName = document.createElement('li');
        stepName.textContent = data[0].steps[i].step
        recipeSteps.append(stepName);
      }

    })
}
// getApi(instructionsUrl);


for (let i = 0; i <= gameBtn.length; i++) {
  document.querySelector('.gameButtons').addEventListener('click', getReviews)
  // document.querySelector('.gameButtons').addEventListener("click", function () {
  //   console.log("This button works");
  //   getApi(instructionsUrl);
  //   getApiIngredients(ingredientsUrl);
  // })
}


// buttonName.addEventListener("click", function () {
//     console.log("This button works");
//     getApi(instructionsUrl);
//     getApiIngredients(ingredientsUrl);
