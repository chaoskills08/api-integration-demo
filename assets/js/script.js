var id = 716429 //this is going to be set to whatever the logic is going to be from the game data.
var ingredientsUrl = 'https://api.spoonacular.com/recipes/'+id+'/information?includeNutrition=false&apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c';
var instructionsUrl ="https://api.spoonacular.com/recipes/"+id+"/analyzedInstructions?apiKey=ebbc0b7a9b7c4b61b20f0c5356d4334c" ;
var img =document.getElementById("placeholder")
var responseText = document.getElementById('response-text');
var buttonName=document.getElementById('buttonName');


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

function getApi(instructionsUrl) { //sometimes this is not properly matched with an ID, should make logic to display that that has occured, and link to the actual website that the info was taken from. //
    fetch(instructionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
    })
  }

buttonName.addEventListener("click",function(){
  console.log("This button works");
   getApi(instructionsUrl);
   getApiIngredients(ingredientsUrl);    //will display data, will probably also run the logic from converting value of game to that of a food" 

})
