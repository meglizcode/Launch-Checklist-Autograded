// Write your helper functions here!
event.preventDefault()

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
    let pilotStatus = document.pilotStatus("pilotStatus")
    let copilotStatus = document.copilotStatus("copilotStatus")
    let fuelStatus = document.fuelStatus("fuelStatus")
    let cargoStatus = document.cargoStatus("cargoStatus")

    if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty"){
    alert("Error:Field Empty, all fields must be filled out")}
    else if (validateInput(pilot) ==="Is a Number" || validateInput(copilot)==="Is a Number"){
        alert("Invalid entry please unsure to enter a name not a number")
    } else if (validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number") {
        alert("Invalid input. Input must be a numberical value")
    }

    if (fuelLevel < 10000){

    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;