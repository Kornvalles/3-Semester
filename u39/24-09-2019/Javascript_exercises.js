//1)
//filter()
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function checkName(name) {
    return name.startsWith('L');
}

console.log(names.filter(checkName))

//map()
function reverseString(name) {
    var splitString = name.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

var reversed = names.map(reverseString);

console.log(reversed);