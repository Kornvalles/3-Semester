## Review 30/09/2019

* Hvordan kan vi bruge `setInterval()` i andre context?
```
setInterval(() => {
		fetch("https://studypoints.info/jokes/api/jokes/period/hour")
        .then(res => res.json())
        .then(data => {
            document.getElementById("myDiv").innerHTML = data.joke;
        })
}, 10000)
```
* Hvordan laver man customized exceptions?
* SVG manipulation
[Link](https://github.com/Kornvalles/3-Semester/blob/master/u39/27-09-2019/EUROPA_MAP/src/index.js)
```
document.getElementById("svg2").addEventListener("click", function (e) {
    if(e.target.id != "svg2") {var id = e.target.id} else {return null}
    fetch('http://restcountries.eu/rest/v1/alpha?codes=' + id)
        .then(response => response.json())
        .then(data => {
            let rows = data.map(function (name) {
                let row = "Country: " + name.name + "<br>"
                    + "Population: " + name.population + "<br>"
                    + "Area: " + name.area + "<br>"
                    + "Borders: " + name.borders;
                return row;
            })
            document.getElementById("countryInfo").innerHTML = rows.join("")
        }) 
})
```
