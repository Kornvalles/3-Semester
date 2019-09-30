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
//Comment
```
