//a)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//console.log(boys);
//console.log(girls);
//b)
var all = boys.concat(girls);
//console.log(all);
//c)
var str = all.join();
//console.log(str);
var str2 = all.join("-");
//console.log(str2);
//d)
girls.push("Lone","Gitte");
//console.log(girls);
//e)
boys.unshift("Hans","Kurt");
//console.log(boys);
//f)
boys.shift();
//console.log(boys);
//g)
girls.pop();
//console.log(girls);
//h)
all.splice(2,2);
//console.log(all);
//i)
all.reverse();
//console.log(all);
//j)
all.sort();
console.log(all);
//k)
function mySort(arr) {
    var len = arr.length;
    while (len--) {
        if (arr[len].toLowerCase() < arr[len--].toLowerCase()) {
            arr[len] = arr[len--];
            arr[len--] = arr[len];
        }
    }
    return arr;
}
var x = all.map(mySort(all));
console.log(x);