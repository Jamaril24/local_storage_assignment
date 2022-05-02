'use strict'

const car = {
   
    Color: "White" ,

    Model: "Toyota" ,

    Type: "Camry" ,

    year: "2021" ,

}
console.log(car)

let carString = JSON.stringify(car);

console.log (carString);

localStorage.setItem("storecar", carString);

let unstorecar = localStorage.getItem("storecar");

let mycar = "The newist car is" + mycar.Color + "" + mycar.Model + "" + mycar.Type + "" + mycar.year ;

const section = document.getElementById ("uno");

const h2elm = document.createElement ('h2');
h2elm.textContent(newCar);
section.appendChild(h2elm)


