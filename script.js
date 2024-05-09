// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel= document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
        
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    destination=pickPlanet(listedPlanets)
    console.log(destination)
 
    let name =destination.name
    let diameter=destination.diameter
    let star=destination.star
    let distance=destination.distance
    let moons =destination.moons
    let imageUrl=destination.imageUrl

    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
    
 });