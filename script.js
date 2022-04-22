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
   //works now:
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
           alert("All fields required");
       }
    //  all fields required complete

       if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
           alert("Fuel and Cargo amounts require a number with no punctuation");
       }

       let pilotName = document.getElementById("pilotName");
       let copilotName = document.getElementById("copilotName");
       let fuelLevel = document.getElementById("fuelLevel");
       let cargoMass = document.getElementById("cargoMass");

       pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
  
       copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`

       if (fuelLevel.value < 10000) {
       fuelStatus.innerHTML = `Fuel level too low for launch`;
       launchStatus.innerHTML = `Shuttle not ready for launch`;
       document.querySelector("#launchStatus").style.color = "red";
       document.getElementById("faultyItems").style.visibility = "visible";
       }

       if (cargoMass.value > 10000) {
       cargoStatus.innerHTML = `Cargo level too high for launch`;
       launchStatus.innerHTML = `Shuttle not ready for launch`;
       document.querySelector("#launchStatus").style.color = "red";
       document.getElementById("faultyItems").style.visibility = "visible";
       }

       if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
       launchStatus.innerHTML = `Shuttle ready for launch`;
       document.querySelector("#launchStatus").style.color = "green";
       document.getElementById("faultyItems").style.visibility = "visible";    

       fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  let missionDisplay = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  let i = Math.floor(Math.random()*5);
                  missionDisplay.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol><b>
                      <li>Name: ${json[i].name}</li>
                      <li>Diameter: ${json[i].diameter}</li>
                      <li>Star: ${json[i].star}</li>
                      <li>Distance from Earth: ${json[i].distance}</li>
                      <li>Number of Moons: ${json[i].moons}</li>
                  </b></ol>
                  <img src="${json[i].image}">
                  `;
                });
          });
       }


       event.preventDefault();
    
    
   });
   

});