var gameId = 0;
//this is going to be set to whatever the logic is going to be from the game data.
var ingredientsUrl = 'https://api.spoonacular.com/recipes/random?apiKey=eef65463463f4606aa3cc0949221a1d6&cuisine=' + id;
var responseText = document.getElementById('response-text');
var buttonName = document.getElementById('genBtn');
var ingredients = document.getElementById("ingredientsList");
var responseText = document.getElementById('response-text');
var id = 0 //this is going to be set to whatever the logic is going to be from the game data.
var reviewsUrl = 'https://www.giantbomb.com/api/reviews/?api_key=aae6cead4d664ca28d5080355fbaefc5085d2381&filter=score:5&sort=score:asc&format=json&limit=5'
var gameBtns = document.getElementsByClassName("gameButtons");
var gameInfo = document.getElementById("gameInfo");
var descInfo = document.getElementById('descInfo');
var titleFoodEl = document.getElementById("titleFood");
var ingredientsListEl = document.getElementById("ingList");
var stepListEl = document.getElementById("stepList");
var savedData = [];
var savedDataFood = [];
var savedDataGame = [];
var foodInfo = document.querySelector('#foodInfo').children;
// console.log(foodInfo)

const getReviews = function(title) {
  fetch(reviewsUrl, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    format: 'json',
  })

    .then(function (response) {
      // console.log(response)
      return response.json()
    })

    .then(function (data) {
      // console.log(data)
      // var buttonData = gameBtn.innerText
      // if (document.getElementById('btn1').value() === "Metal Gear Solid 4") {
      if (title === 'Metal Gear Solid 4') {
        savedDataGame.push(data.results[0].game.name);
        if (savedDataGame.length > 5) { //returns last 5 entries of food titles
          savedDataGame.pop();
        }
        // console.log(savedDataGame)
        localStorage.setItem("savedDataGame", JSON.stringify(savedDataGame));
        var gameCreate = document.getElementById('h2Create')
        var descCreate = document.getElementById('pCreate')
        gameCreate.textContent = null
        descCreate.textContent = null
        gameCreate.textContent = data.results[0].game.name
        descCreate.textContent = data.results[0].deck
        gameInfo.appendChild(gameCreate)
        descInfo.appendChild(descCreate)
        gameId = 1
        idLogic(gameId)
        getApiIngredients(ingredientsUrl)
      }
      else if (title === "Burnout Paradise") {
        savedDataGame.push(data.results[1].game.name);
        if (savedDataGame.length > 5) { //returns last 5 entries of food titles
          savedDataGame.pop();
        }
        localStorage.setItem("savedDataGame", JSON.stringify(savedDataGame));
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
        savedDataGame.push(data.results[2].game.name);
        if (savedDataGame.length > 5) { //returns last 5 entries of food titles
          savedDataGame.pop();
        }
        localStorage.setItem("savedDataGame", JSON.stringify(savedDataGame));
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
        savedDataGame.push(data.results[3].game.name);
        if (savedDataGame.length > 5) { //returns last 5 entries of food titles
          savedDataGame.pop();
        }
        localStorage.setItem("savedDataGame", JSON.stringify(savedDataGame));
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
        savedDataGame.push(data.results[4].game.name);
        if (savedDataGame.length > 5) { //returns last 5 entries of food titles
          savedDataGame.pop();
        }
        localStorage.setItem("savedDataGame", JSON.stringify(savedDataGame));
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
      var name = data.recipes[0].title;
      // console.log(data);
      var header = document.createElement('h2');
      header.setAttribute("class", "foodElement")
      header.textContent = name;
      titleFoodEl.appendChild(header);
      savedDataFood.push(data.recipes[0].title);
      if (savedDataFood.length > 5) { //returns last 5 entries of food titles
        savedDataFood.pop();
      }
      localStorage.setItem("savedDataFood", JSON.stringify(savedDataFood));
      var img = document.createElement('img');
      img.setAttribute('id', 'foodImg');
      img.setAttribute('src', data.recipes[0].image);
      img.setAttribute('class', 'foodElement')
      titleFoodEl.appendChild(img);
      for (var i = 0; i < data.recipes[0].extendedIngredients.length; i++) {
        var ingredientName = document.createElement('li');
        ingredientName.setAttribute('class', 'foodElement')
        ingredientName.setAttribute('class', 'list-group-item')
        ingredientName.textContent = data.recipes[0].extendedIngredients[i].original;
        ingredientsListEl.append(ingredientName);
      }
      for (var j = 0; j < data.recipes[0].analyzedInstructions[0].steps.length; j++) {
        var stepName = document.createElement('li');
        stepName.setAttribute('class', 'foodElement');
        stepName.setAttribute('class', 'list-group-item');
        stepName.textContent = data.recipes[0].analyzedInstructions[0].steps[j].step
        // console.log(data.recipes[0].analyzedInstructions[0].steps[j].step)
        stepListEl.append(stepName);
      }
    })
}
function clearData(gameChoice) {
  var clearDivs = document.getElementById('foodInfo').getElementsByClassName('foodElement')
  // console.log('is trueee')
  for (let i = clearDivs.length - 1; i => 0; i--) {
    var currentElement = clearDivs[i]
    // console.log(currentElement)
    if (currentElement.localName === 'li') {
      currentElement.remove()
    } else if (currentElement.localName === 'img') {
      currentElement.remove()
    } else if (currentElement.localName === 'h2') {
      currentElement.remove()
    }
  }
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

// COMMENTED OUT FOR FUTURE DEV
function renderMessage() {
  var showDataFood = JSON.parse(localStorage.getItem("savedDataFood"))
  var showDataGame = JSON.parse(localStorage.getItem("savedDataGame"))
  for (var k = 0; k < showDataFood.length; k++) {
    var savedStuff = document.createElement('p');
    savedStuff.textContent = showDataGame + " and " + showDataFood;
    savedContainer.append(savedStuff);
  }
}

for (let i = 0; i < gameBtns.length; i++) {
  const gameBtn = gameBtns[i]
  
  gameBtn.addEventListener('click', function () {
    var gameChoice = gameBtn.dataset.game
    if (ingredientsListEl.hasChildNodes()) {
      clearData(gameChoice)
    } else {
      getReviews(gameChoice)
    }
  })
}