import 'bootstrap/dist/css/bootstrap.css'
//import jokes from "./jokes";

document.getElementById("myButton").addEventListener("click", function() {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(response => response.json())
        .then(data => {
            document.getElementById("myDiv").innerHTML = data.joke
        })
})