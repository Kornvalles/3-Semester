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

//console.log(averageAge)

//this
//7
//apply & call
function f1() {
   return this.name + ": " + this.phone;
}
var a = {number : 2}
var b = {name : 'Mikkel', phone : 31675555}

//console.log(f1.call(a))
console.log(f1.apply(b))

/*------------------------------------------------------------------------------------------*/
//bind
function f2() {
    return this.forEach(element => {
        console.log(element.name + ": " + element.phone)
    });
}

var all = [{ name: "Lars", phone: 1234567 }, { name: "Peter", phone: 675843 },
{ name: "Jan", phone: 98547 }, { name: "Bo", phone: 79345 }];

var g1 = f2.bind(all)

g1();