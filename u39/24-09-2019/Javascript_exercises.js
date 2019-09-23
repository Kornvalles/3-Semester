//1)
//filter()
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function checkName(name) {
    return name.includes('a');
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

//2)
//a)
function myFilter(array, callback) {
    var newArray = []
    array.forEach(element => {
        if(callback(element)) {
            newArray.push(element)
        }
    });
    return newArray
}

console.log(myFilter(names,checkName));
//b)
function myMap(array, callback) {
    var newArray = []
    array.forEach(element => {
        newArray.push(callback(element))
    });
    return newArray
}

console.log(myMap(names,reverseString))