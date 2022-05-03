'use strict'

const car = {
   
    Color: "White" ,

    Model: "Toyota" ,

    Type: "Camry" ,

    year: "2021" ,

}
// console.log(car);

let carString = JSON.stringify(car);

// console.log (carString);

localStorage.setItem("storecar", carString);

let unstorecar = localStorage.getItem("storecar");

let mycar = JSON.parse(unstorecar);

// console.log (mycar);

const myFirstCar = "My new car is a " + mycar.Color + " " + mycar.Model + " " + mycar.Type + " " + mycar.year + ".";

console.log (myFirstCar)
const section = document.getElementById ("uno");
const h2elm = document.getElementById('h2');
h2elm.textContent = myFirstCar;
section.appendChild(h2elm)

// let unstorecar = localStorage.getItem("storecar");

// let car = JSON.parse(unstorecar);

// console.log(car)

// let car = "The newist car is" + car.Color + "" + car.Model + "" + car.Type + "" + car.year ;

// const section = document.getElementById ("uno");
// const h2elm = document.createElement ('h2');
// h2elm.textContent = newCar;
// section.appendChild(h2elm);




// const Dulce = ["sweethearts", "Tootsie Roll", "Reeses", "Gummy Worms", "M&Ms", "Nerds"];

// let canadyString = JSON.stringify(Dulce);

// localStorage.setItem("myArray", candyString);

// let unstoredArray = localStorage.getItem("myArray");

// let newCandy = JSON.parse(unstoredArray);

// const h3elm = document.createElement('h3');
// h3elm.textContent = " The best Candy is: " + newCandy[2];
// section.appendChild(h3elm);