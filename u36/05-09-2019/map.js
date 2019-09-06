var myDiv = document.getElementById("myDiv");

var names = ["Lars", "Peter", "Jan", "Ian"];

function makeList() {
    var list = names.map(person => "<li>" + person + "</li>");

    list.unshift("<ul>");
    list.push("</ul>");

    myDiv.innerHTML = list.join("");;
}

makeList();

function addPerson(person) {
    person.preventDefault();
    let newName = document.getElementById("inputName").value;
    names.push(newName);
    makeList();
}

var btn = document.getElementById("mySubmitBtn");

btn.addEventListener("click", function(person) {
    addPerson(person);
});

//Remove first and last
var btnRemoveFirst = document.getElementById("removeFirst");
var btnRemoveLast = document.getElementById("removeLast");

function removeFirst() {
    names.preventDefault();
    names.shift();
    makeList();
}

function removeLast() {
    names.preventDefault();
    names.pop();
    makeList();
}

btnRemoveFirst.addEventListener("click", function() {
    removeFirst();
});

btnRemoveLast.addEventListener("click", function() {
    removeLast();
});