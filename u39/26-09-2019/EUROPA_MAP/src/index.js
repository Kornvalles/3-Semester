import 'bootstrap/dist/css/bootstrap.css'

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
