import 'bootstrap/dist/css/bootstrap.css'

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}


fetch('https://kornval.com/CORS_And_HOSTING-1.0-SNAPSHOT/api/user/all')
    .then(handleHttpErrors)
    .then(data => {
        document.getElementById("myPTag").innerHTML = data.name;
    })



