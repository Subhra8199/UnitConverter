/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const elInput = document.getElementById("input-el")
const elBtn = document.getElementById("btn-el")
const elMf = document.getElementById("mf-el") 
const elLg = document.getElementById("lg-el") 
const elKp = document.getElementById("kp-el") 


elBtn.addEventListener("click", function(){
    
    elMf.innerHTML = length()
    elLg.innerHTML = volume()
    elKp.innerHTML = mass()
})

function length(){
    let numOne = 3.2
    let x = (elInput.value * numOne).toFixed(2)
    let y = (elInput.value / numOne).toFixed(2)
    let z = `${elInput.value} meters = ${x} feet | ${elInput.value} feet = ${y} meters`
    return z
   }
function volume(){
    let numTwo = 0.264
    let a = (elInput.value * numTwo).toFixed(2)
    let b = (elInput.value / numTwo).toFixed(2)
    let c = `${elInput.value} meters = ${a} feet | ${elInput.value} feet = ${b} meters`
    return c
   
}
function mass(){
    let numThree = 2.204
    let p = (elInput.value * numThree).toFixed(2)
    let q = (elInput.value / numThree).toFixed(2)
    let r = `${elInput.value} meters = ${p} feet | ${elInput.value} feet = ${q} meters`
    return r
   
}

