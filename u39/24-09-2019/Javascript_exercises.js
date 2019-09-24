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
        if (callback(element)) {
            newArray.push(element)
        }
    });
    return newArray
}

console.log(myFilter(names, checkName));

//b)
function myMap(array, callback) {
    var newArray = []
    array.forEach(element => {
        newArray.push(callback(element))
    });
    return newArray
}

console.log(myMap(names, reverseString))

//4
//a)
var numbers = [1, 3, 5, 10, 11];
//var result = [4, 8, 15, 21, 11];

function mergeNumbers(number, i, array) {
    var result = []
    if (i < array.length - 1) {
        result.push(number + array[i + 1])
    } else {
        result.push(number)
    }
    return result
}

console.log(numbers.map(mergeNumbers))

//b)
function makeMyNav(array) {
    function createNav(name) {
        return "<a href=””>" + name + "</a>"
    }
    var navStr = array.map(createNav)
    navStr.unshift("<nav>")
    navStr.push("</nav>")
    return navStr
}

console.log(makeMyNav(names).join(""))

//c)
var namesWithPhone = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];
function makeMyTable(array) {
    function makeTable(Obj) {
        return "<tr>\n<td>" + Obj.name + "</td>\n" + "<td>" + Obj.phone + "</td>\n</tr>\n"
    }
    var table = array.map(makeTable)
    table.unshift("<table>\n<tr>\n<th>name</th>\n<th>phone</th>\n</tr>\n")
    table.push("</table>")
    return table
}

console.log(makeMyTable(namesWithPhone).join(""))

//d)
document.getElementById("myNav").innerHTML = makeMyNav(names).join(" ")
document.getElementById("myTable").innerHTML = makeMyTable(namesWithPhone).join(" ")

//e)
document.getElementById("filterButton").onclick = function () {

    function filterNames(name) {
        return name.name.includes('a')
    }

    function filterNames2(name) {
        return name.includes('a')
    }

    var filteredNames2 = names.filter(filterNames2);
    var filteredNames = namesWithPhone.filter(filterNames);

    document.getElementById("myNav").innerHTML = makeMyNav(filteredNames2).join(" ");
    document.getElementById("myTable").innerHTML = makeMyTable(filteredNames).join(" ");

}