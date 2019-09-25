import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementById("myButton").onclick =
    function searchForJoke() {
        var input = document.getElementById("myInput").value
        const foundJoke = jokes.getJokeById(input)
        document.getElementById("output").innerHTML = foundJoke
        document.getElementById("myInput").value = ""
    }
