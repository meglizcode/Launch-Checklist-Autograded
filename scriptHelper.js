// Write your helper functions here!
// event.preventDefault()

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML =
                `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
          return "Empty";
    } else if (isNaN(testInput) === true) {
          return "Not a Number";
    } else {
          return "Is a Number";
    };
 };  

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")

    list.style.visibility = "visible";

// Input Validation //
    if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty"){ 
        alert("Error: Field Empty, all fields must be filled out")}

    else if (validateInput(pilot) ==="Is a Number" || validateInput(copilot)==="Is a Number"){
        alert("Error: Please ensure to enter a valid name")

    } else if (validateInput(cargoLevel)==="Not a Number") {
        alert("Error: Cargo Mass must be a numberical value")
    } else if (validateInput(fuelLevel)==="Not a Number") {
        alert("Error: Fuel Level must be a numberical value")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`     
    }

// Display Conformations //

// Header //
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.style.color = 'green'
        launchStatus.innerHTML = 'Shuttle is Ready for Launch'
    } else {
        launchStatus.style.color = 'red'
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    }

// Fuel //
    if (fuelLevel >= 10000) {
         fuelStatus.style.color = 'green'
         fuelStatus.innerHTML = `Fuel level high enough for launch`
        } else {
        fuelStatus.style.color = 'red'
        fuelStatus.innerHTML = `Fuel level too low for launch`
    }

// Cargo //
    if (cargoLevel <= 10000) {
         cargoStatus.style.color = 'green'
         cargoStatus.innerHTML = `Cargo mass low enough for launch`
    } else {
        cargoStatus.style.color = 'red'
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 console.log(planetsReturned)
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let i =Math.floor(Math.random() * planets.length)
console.log(planets[i])
    return planets[i]
 }

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;