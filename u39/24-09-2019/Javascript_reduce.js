//a)
var all = ["Lars", "Peter", "Jan", "Bo"];
var str = all.join(", #")

//console.log(str)

//b)
var numbers = [2, 3, 67, 33];

function sumNumbers(number, sum) {
    return sum + number
}

var sum = numbers.reduce(sumNumbers)

//console.log(sum)

//c)
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

var averageAge = members.reduce(function(total, member, index, array) {
    if(index === array.length -1) {
        return (total + member.age) / array.length
    } else {
        return total + member.age
    }
}, 0)

console.log(averageAge)

//7
