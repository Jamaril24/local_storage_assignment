'use strict'

const objct ={
    color: white 
    model: Toyota 
    year: 2022

}
const MyJSONobjct = JSON.stringify(objct);
localStorage.setItem("objct", MyJSONobjct);
let info = localStorage.getItem(objct);
let objct = JSON.parse(info);
console.log(objct.name);