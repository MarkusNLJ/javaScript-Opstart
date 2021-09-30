console.log("----------||Exercise 1||----------")
let names = ["Hassan", "Simon", "Markus", "Alek", "Jasmin", "Mette"]
console.log(names)
console.log("Only names with 'a'")
let namesWithA = names.filter(name=> name.toLowerCase().includes('a'))
//let namesWithA = names.filter(name=> name.toLowerCase().indexOf('a') > -1) - works aswell.
console.log(namesWithA)

console.log("ReversedNames")
let reversedNames = names.map(name => name.split("").reverse().join(""))
console.log(reversedNames)


console.log("----------||Exercise 2||----------")

const myFilter = function (list, callback){
    let newNames = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i].toLowerCase().includes(callback)){
            newNames.push(list[i])
    }
}
    return newNames;
}
function returnChar(char){
    return char;
}
console.log("myFilter names with m")
console.log(myFilter(names, returnChar('m')))

const myMap = function(list, callback){
    let li = [];
    for (let i = 0; i < list.length; i++) {
            li.push(callback + list[i] + callback)
    }
    return li;
}

function listMaker(map){
    return map
}
console.log("Added '#' on both sides")
console.log(myMap(names, listMaker('#')))

console.log("----------||Exercise 3||----------")
console.log("----------||Exercise 4||----------")
/*
setTimeout(() => {console.log("I was printed by the VERY FIRST statements in the code, but delayed 4 seconds.")}, 4000);
setTimeout(() => {console.log("I was delayed 3 seconds before I printed this.")}, 3000);
setTimeout(() => {console.log("I was delayed 2 seconds before I printed this.")}, 2000);
setTimeout(() => {console.log("I am the VERY first thing you will see.")}, 500);
setTimeout(() => {console.log("I should be printed by the VERY LAST statement in the code.")}, 1000);
*/

console.log("----------||Exercise 5||----------")

const boys = ["Peter", "lars", "Ole"];
const girls = ["Janne", "hanne", "Sanne"];

const all = boys.concat(girls)
console.log(all)
console.log(all.join(","))
console.log(all.join("-"))
all.unshift("Gitte")
console.log(all)
all.shift()
console.log(all) //remove first -Gitte
all.push("Sanne")
console.log(all)
all.pop()
console.log(all) //remove last - Sanne
all.splice(all.length/2-1,2)
console.log(all)
console.log(all.reverse())
console.log(all.sort(name=> name.length))
console.log(all.map(name => name.toUpperCase()))
console.log(all.filter(name=> name.includes("i") || name.includes("l")))

console.log("----------||Exercise 6||----------")
//Done - count.html
console.log("----------||Exercise 7||----------")
var allNames = ["Lars", "Peter", "Jan", "Bo"];

var allNamesJoined = allNames.join(", #")
console.log("#" +allNamesJoined)

const numbers = [2, 3, 67, 33];
console.log(numbers.reduce((previousValue, currentValue) => previousValue + currentValue))

const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
]
var member = members.values();

var sum = (accumulator, member) => accumulator + member.age;
var avg = members.reduce(sum, 0) / members.length;
console.log(avg);
