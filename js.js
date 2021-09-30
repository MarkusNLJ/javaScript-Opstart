
    console.log("-------|| OPG 1, 2 & 3 ||-------")
// Function Declaration
    function add(n1, n2){
        return n1 +n2;
    }
// Function Expression
    const sub = function(n1,n2){
        return n1 - n2
    }
// Callback example
    const cb = function(n1,n2, callBack){
        if(typeof callBack === "function") { // Tjekker om callBack er en funktion.
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callBack(n1, n2);
        }
        try {
            throw new Error("Whoops!")
        } catch (e){
            console.error(e.name + ": " + e.message)
        }
    };

    console.log("1. " + add(1,2)) // This will return 3
    console.log("2. " + add) // This will return which function we're calling
    console.log("3. " + add(1,2,3)) // This will also return 3
    console.log("4. " + add(1)) // This will return NaN
    console.log("5. " + cb(3,3,add)) // This will return 3 + 3 = 6
    console.log("6. " + cb(4,3,sub)) // This will return 4 + 3 = 1
    console.log("7. " + cb(3,3,add())) // This will crash add() becomes NaN
    console.log("8. " + cb(3,"hh",add)) // This will return 3 + hh = 3hh
    console.log("9. " + cb("37",7,sub)) // This will return 30

    console.log("-------|| OPG 4 & 5 ||-------")

    const cb2 = function(n1,n2, callBack) {
        if (typeof callBack === "function") { // Tjekker om callBack er en funktion.
            return "Result from the two numbers: " + n1 + "*" + n2 + "=" + callBack(n1, n2);
        }
        return "something went wrong";
    };

    function mul(n1, n2){
        return n1 * n2;
    }

    function div(n1, n2){
        return n1 / n2;
    }
    console.log("Multiply: " + cb2(2,3,mul))
    console.log("Divide: " + cb2(6,2,div))

    console.log("-------|| Filter, Map & forEach OPG 1||-------")

    let names = ["Lars", "Jan", "Peter", "Bo", "Fredrik"]
    let result = names.filter(name => name.length <= 3)
    names.forEach(name => console.log(name))
    console.log("_________________")
    result.forEach(name => console.log(name))

    console.log("-------|| Filter, Map & forEach OPG 2||-------")

    let map = names.map(name => name.toUpperCase())
    console.log(map)

    console.log("-------|| Filter, Map & forEach OPG 3||-------")

    let li = names.map(function (name){
        return "<li>" + name + "</li>";
    }).join('');

    //let liV2 = names.map((name)=>´<li>${name}</li>´).join("")
    //console.log(liV2)
    // DOM idk what it does yet :/
    /*
    var dom = document.querySelector('#dom');
    dom.innerHTML = '<ul>' + names.map(function (name){
        return "<li>" + name + "</li>";
    }).join('') + '</lu>';
    */

    console.log("<ul>" +li +"</ul>")
    console.log("-------|| Filter, Map & forEach OPG 4||-------")
    var cars = [
        { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
        { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
        { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
        { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
        { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];

    //var sorted = cars.sort((a, b)=>{return a.price - b.price}) - sort by number
    /* var sorted = cars.sort((a, b)=>{
        if (a.make < b.make){
            return -1
        } if (a.make > b.make){                                  - sort by text
            return 1
        }
        return 0
    })
    console.log(sorted)
    */
    console.log("New Cars :D")
    var newCars = cars.filter(cars => cars.year > 1999)
    console.log(newCars)
    console.log("Volvos :))")
    var volvos = cars.filter(cars => !cars.make.localeCompare('Volvo'))
    console.log(volvos)
    console.log("Cheap cars ;)")
    var cheapCars = cars.filter(cars=> cars.price < 5000)
    console.log(cheapCars)

    let sql = cars.map(function (car){
        return 'INSERT INTO cars (id,year,make,model,price) VALUES (' + car.id + "," + car.year  + "," + "'" + car.make + "'" + "," + "'" + car.model + "'" + "," + car.price + ");";
    }).join('\n');
    console.log(sql)

    const person = {
        name: "Markus",
        age: new Date(2021, 11, 4),
        gender: "male",
    }
    person.mail = "mark4615@stud.kea.dk"
    for (prop in person) {
        console.log(prop) // Viser kun hvad en person består af "Keys"
    }
    for (prop in person) {
        console.log(prop, person[prop]) // Viser den specifike persons values
    }