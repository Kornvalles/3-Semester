//a)
let domNodes = Array.from(document.getElementsByTagName("div"));
function colorDiv() {
    domNodes.forEach(element => {
        element.style.backgroundColor = "grey";
    });
}
colorDiv();
//b)
document.getElementById("myBtn").addEventListener("click",changeColorBtn);

function changeColorBtn() {
    document.getElementById("x1").style.backgroundColor = "red";
    document.getElementById("x2").style.backgroundColor = "green";
    document.getElementById("x3").style.backgroundColor = "purple";
}