// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    takeOff.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff");
        if (confirmation) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    });
    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });
    missionAbort.addEventListener("click", function() {
        let confirmation = confirm("Confirm that you want to abort the mission");
        if(confirmation) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });
    up.addEventListener("click", function() {
        rocket.style.position ="relative";
        rocket.style.bottom += "10px"
        spaceShuttleHeight.innerHTML = 10000;
    });
    down.addEventListener("click", function() {
        rocket.style.position ="relative";
        rocket.style.top += "10px";
        spaceShuttleHeight.innerHTML = 0;
    });
    right.addEventListener("click", function() {
        rocket.style.position ="relative";
        rocket.style.left += "10px";
    });
    left.addEventListener("click", function() {
        rocket.style.position ="relative";
        rocket.style.right += "10px";
    });
});