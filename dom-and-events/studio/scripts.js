// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    takeOff.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff");
        if (confirmation) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number("10000");
        }
    });
    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = Number("0");
    });
    missionAbort.addEventListener("click", function() {
        let confirmation = confirm("Confirm that you want to abort the mission");
        if(confirmation) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = Number("0");
        }
    });
});