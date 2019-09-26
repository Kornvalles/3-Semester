import 'bootstrap/dist/css/bootstrap.css'
//import jokes from "./jokes";

document.getElementById("myButton").addEventListener("click", function () {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(response => response.json())
        .then(data => {
            document.getElementById("myDiv").innerHTML = data.joke
        })
})

setInterval(() => {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(response => response.json())
        .then(data => {
            document.getElementById("myDiv").innerHTML = data.joke
        })
}, 3600000);

function cloverClick(side) {
    document.getElementById(side).addEventListener("click", function () {
        alert(side.charAt('0').toUpperCase() + side.substr(1))
    })
}

cloverClick("north");
cloverClick("south");
cloverClick("east");
cloverClick("west");