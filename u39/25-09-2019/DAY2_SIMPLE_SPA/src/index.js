import 'bootstrap/dist/css/bootstrap.css'

//Show all users (in a table)
function makeMyTable(array) {
    function makeTable(Obj) {
        return "<tr><td>" + Obj.name + "</td><td>" + Obj.gender + 
               "</td><td>" + Obj.email + "</td><td>" + Obj.age + "</td></tr>\n"
    }
    var table = array.map(makeTable)
    table.unshift("<table><tr><th>Name</th><th>Gender</th><th>Email</th><th>Age</th></tr>")
    table.push("</table>")
    return table
}

fetch('http://localhost:3333/api/users')
        .then(response => response.json())
        .then(data => {
            document.getElementById("myTable").innerHTML = makeMyTable(data).join(" ")
        });


function jsonToString(Obj) {
    return "Name: " + Obj.name + "<br>" +
           "Gender: " + Obj.gender + "<br>" +
           "Email: " + Obj.email + "<br>" +
           "Age: " + Obj.age;
}

function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
   }
   

//Get user by id
document.getElementById("myButton").onclick = function() {
    var id = document.getElementById("myInput").value
    fetch('http://localhost:3333/api/users/' + id)
        .then(handleHttpErrors)
        .then(data => {
            document.getElementById("ageInput").value = data.age
            document.getElementById("nameInput").value = data.name
            document.getElementById("genderInput").value = data.gender
            document.getElementById("emailInput").value = data.email
        })
        .catch(err =>{
            if(err.status){
              err.fullError.then(e=> console.log(e.detail))
            }
            else{console.log("Network error"); }
         });
        
}

function request(URL, method, body) {
    function makeOptions(method, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json"
            }
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return fetch(URL, makeOptions(method, body));
}

//Add user
document.getElementById("addUserButton").onclick = function() {
    const user = {
        "age" : document.getElementById("ageInput").value,
        "name" : document.getElementById("nameInput").value,
        "gender" : document.getElementById("genderInput").value,
        "email" : document.getElementById("emailInput").value
    }
    request('http://localhost:3333/api/users/', "POST", user)
        .then(handleHttpErrors)
        .catch(err =>{
            if(err.status){
              err.fullError.then(e=> console.log(e.detail))
            }
            else{console.log("Network error"); }
         });
}

//Edit user
document.getElementById("editUserButton").onclick = function() {
    let userId = document.getElementById("myInput").value
    const user = {
        "age" : document.getElementById("ageInput").value,
        "name" : document.getElementById("nameInput").value,
        "gender" : document.getElementById("genderInput").value,
        "email" : document.getElementById("emailInput").value
    }
    request('http://localhost:3333/api/users/' + userId, "PUT", user)
}

//Delete user
document.getElementById("deleteUserButton").onclick = function() {
    let userId = document.getElementById("myInput").value
    request('http://localhost:3333/api/users/' + userId, "DELETE")
}