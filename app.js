'use strict'

const dulce = ["snickers", "Reese ", "Jolly ranchers", "sweet hearts", "twix"];

const dulceArray = JSON.stringify(dulce);

console.log(dulceArray);

localStorage.setItem("dulceStored", dulceArray);

let unstoreddulce = localStorage.getItem("dulceStored");

let newdulce = JSON.parse(unstoreddulce);

document.write(newdulce)