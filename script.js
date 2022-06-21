const meter = document.getElementById("meter")
const feet = document.getElementById("feet")
const liter = document.getElementById("liter")
const gallon = document.getElementById("gallon")
const kilo = document.getElementById("kilo")
const pound = document.getElementById("pound")

const meterToFeet = document.getElementById("meterToFeet")
const feetToMeter = document.getElementById("feetToMeter")

const literToGallon = document.getElementById("literToGallon")
const gallonToLiter = document.getElementById("gallonToLiter")

const kiloToPound = document.getElementById("kiloToPound")
const poundToKilo = document.getElementById("poundToKilo")

const input = document.getElementById("input")
const btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    meter.textContent = input.value
    feet.textContent = input.value
    liter.textContent = input.value
    gallon.textContent = input.value
    kilo.textContent = input.value
    pound.textContent = input.value

    meterToFeet.textContent = (input.value * 3.281).toFixed(3)
    feetToMeter.textContent = (input.value / 3.281).toFixed(3)
    literToGallon.textContent = (input.value * 0.264).toFixed(3)
    gallonToLiter.textContent = (input.value / 0.264).toFixed(3)
    kiloToPound.textContent = (input.value  * 2.204).toFixed(3)
    poundToKilo.textContent = (input.value / 2.204).toFixed(3)
})