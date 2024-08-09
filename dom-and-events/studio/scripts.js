// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    takeOff.addEventListener("click", function(event) {
        let confirmation =  confirm("Confirm that the shuttle is ready for takeoff");
        if (confirmation) {
            flightStatus.innerHTML = "Shuttle in flight";
        }
    })
});