let myDivs = Array.from(document.getElementsByClassName("mydiv"));

myDivs.forEach(element => {
    element.addEventListener("click", function() {
        document.getElementById("pTag").innerHTML = "Hi from: " + element.id;
    })
});

myDivs.forEach(element => {
    element.addEventListener("click", function() {
        console.log("Hi from: " + this);
    })
});