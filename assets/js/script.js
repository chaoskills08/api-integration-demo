var gameId = 0;
//this is going to be set to whatever the logic is going to be from the game data.
var ingredientsUrl = 'https://api.spoonacular.com/recipes/random?apiKey=ce59c3857d88456a8cfdea4cbb92dd54&cuisine=' + id;
var img = document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var buttonName = document.getElementById('genBtn');
var ingredients = document.getElementById("ingredientsList");
var img = document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var id = 0 //this is going to be set to whatever the logic is going to be from the game data.
var apiUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&format=json'
var reviewsUrl = 'https:russelldev-cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/reviews/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&filter=score:5&sort=score:asc&format=json&limit=5'
var gameBtns = document.getElementsByClassName("gameButtons");
var gameInfo = document.getElementById("gameInfo");
var descInfo = document.getElementById('descInfo');
var titleFoodEl = document.getElementById("titleFood");
var ingredientsListEl = document.getElementById("ingList");
var stepListEl = document.getElementById("stepList");
var savedData = [];

function getReviews(title) {
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
      // var buttonData = gameBtn.innerText
      // if (document.getElementById('btn1').value() === "Metal Gear Solid 4") {
      if (title === 'Metal Gear Solid 4') {
        // console.log('#btn1')
        var gameCreate = document.getElementById('h2Create')
        var descCreate = document.getElementById('pCreate')
        gameCreate.textContent = null
        descCreate.textContent = null
        gameCreate.textContent = data.results[0].game.name
        descCreate.textContent = data.results[0].deck
        gameInfo.appendChild(gameCreate)
        descInfo.appendChild(descCreate)
        gameId = 1
        idLogic(gameId = 1)
        getApiIngredients(ingredientsUrl)

      }
      else if (title === "Burnout Paradise") {
        var gameCreate = document.getElementById('h2Create')
        var descCreate = document.getElementById('pCreate')
        gameCreate.textContent = null
        descCreate.textContent = null
        gameCreate.textContent = data.results[1].game.name
        descCreate.textContent = data.results[1].deck
        gameInfo.appendChild(gameCreate)
        descInfo.appendChild(descCreate)
        gameId = 2
        idLogic(gameId)
        getApiIngredients(ingredientsUrl)
      }
      else if (title === "Professor Layton and the Curious Village") {
        var gameCreate = document.getElementById('h2Create')
        var descCreate = document.getElementById('pCreate')
        gameCreate.textContent = null
        descCreate.textContent = null
        gameCreate.textContent = data.results[2].game.name
        descCreate.textContent = data.results[2].deck
        gameInfo.appendChild(gameCreate)
        descInfo.appendChild(descCreate)
        gameId = 3
        idLogic(gameId)
        getApiIngredients(ingredientsUrl)
      }
      else if (title === "Condemned 2: Bloodshot") {
        var gameCreate = document.getElementById('h2Create')
        var descCreate = document.getElementById('pCreate')
        gameCreate.textContent = null
        descCreate.textContent = null
        gameCreate.textContent = data.results[3].game.name
        descCreate.textContent = data.results[3].deck
        gameInfo.appendChild(gameCreate)
        descInfo.appendChild(descCreate)
        gameId = 4
        idLogic(gameId)
        getApiIngredients(ingredientsUrl)
      }
      else if (title === "Grand Theft Auto IV") {
        var gameCreate = document.getElementById('h2Create')
        var descCreate = document.getElementById('pCreate')
        gameCreate.textContent = null
        descCreate.textContent = null
        gameCreate.textContent = data.results[4].game.name
        descCreate.textContent = data.results[4].deck
        gameInfo.appendChild(gameCreate)
        descInfo.appendChild(descCreate)
        gameId = 5
        idLogic(gameId)
        getApiIngredients(ingredientsUrl)
      }
    })
}

var gameId = 0
//this is going to be set to whatever the logic is going to be from the game data.



function getApiIngredients(ingredientsUrl) {
  fetch(ingredientsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var name = data.recipes[0].title;
      titleFoodEl.textContent = name;
      var img = document.createElement('img');
      img.setAttribute('id', 'foodImg');
      img.setAttribute('src', data.recipes[0].image);
      titleFoodEl.appendChild(img);
      for (var i = 0; i < data.recipes[0].extendedIngredients.length; i++) {
        var ingredientName = document.createElement('li');
        document.getElementById('foodImg').width = '350';
        document.getElementById('foodImg').height = '300';
        ingredientName.textContent = data.recipes[0].extendedIngredients[i].original;
        ingredientsListEl.append(ingredientName);
      }
      for (var j = 0; j < data.recipes[0].analyzedInstructions[0].steps.length; j++) {
        var stepName = document.createElement('li');
        stepName.textContent = data.recipes[0].analyzedInstructions[0].steps[j].step
        stepListEl.append(stepName);
      }
    }
    )
}


function idLogic(gameId) {

  if (gameId === 1) {
    id = 'Middle_Eastern';
  }
  else if (gameId === 2) {
    id = 'Eastern European';
  }
  else if (gameId === 3) {
    id = 'American';
  }
  else if (gameId === 4) {
    id = 'Japanese';
  }
  else if (gameId === 5) {
    id = 'British';
  }
}



//   Metal Gear Solid 4 1  Middle Eastern
// Battlefield: Bad Company 2  Eastern European
// Burnout Paradise 3  American
// Professor Layton and the Curious Village 4 Japanese 
// Condemned 2: Bloodshot 5 British

// buttonName.addEventListener("click", function () {
//   console.log("This button works");
//   //  getApi(instructionsUrl);
//   getApiIngredients(ingredientsUrl);    //will display data, will probably also run the logic from converting value of game to that of a food" 
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log(data.title);
//     img.src = data.image;
//     for (var i = 0; i < data.extendedIngredients.length; i++) {
//       var ingredientName = document.createElement('li');
//       ingredientName.textContent = data.extendedIngredients[i].name;
//       ingredients.append(ingredientName);
//     }
//   })



function saveData() {
  savedData.push(data.recipes[0].title);
  localStorage.setItem("savedData", JSON.stringify(savedData));
}
function renderMessage() {
  var showData = JSON.parse(localStorage.getItem("savedData"))

}


for (let i = 0; i < gameBtns.length; i++) {
  const gameBtn = gameBtns[i]

  gameBtn.addEventListener('click', function () {
    getReviews(gameBtn.dataset.game) // or pass gameBtn.innerText i don't care
  })
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