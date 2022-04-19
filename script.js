// Write your JavaScript code here!


//code i'm not sure if i added or not. can't remember
// window.addEventListener("invalid"); {
//     document.getElementById("pilotStatus").innerHTML = (`${pilotName} is not ready`);
// }

// window.addEventListener("invalid"); {
//     document.getElementById("copilotStatus").innerHTML = (`${copilotName} is not ready`);

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
//why doesn't this work:
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       if (pilotNameInput.value === "") {
           alert("All fields required");
       }
       event.preventDefault();
    //    alert("submit clicked");
   });
   

});