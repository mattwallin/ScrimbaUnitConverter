const inputEl = document.getElementById("input-el")
const metricEl = document.getElementById("metric-el")
const imperialEl = document.getElementById("imperial-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const lengthMultiplier = 3.281
const volumeMultiplier = 0.264
const massMultiplier = 2.204

imperialEl.addEventListener("click", function() {
    render("imperial")
})

metricEl.addEventListener("click", function(){
    render("metric")
})

function render(convert) {
    let measure = inputEl.value
    if(convert === "imperial") {
        lengthEl.textContent = `${measure} meters = ${roundMulti(measure, lengthMultiplier)} feet`
        volumeEl.textContent = `${measure} liters = ${roundMulti(measure, volumeMultiplier)} gallons`
        massEl.textContent = `${measure} kilos = ${roundMulti(measure, massMultiplier)} lbs`

    }
    else if(convert === "metric") {
        lengthEl.textContent = `${measure} feet = ${roundDivide(measure, lengthMultiplier)} meters`
        volumeEl.textContent = `${measure} gallons = ${roundDivide(measure, volumeMultiplier)} liters`
        massEl.textContent = `${measure} lbs = ${roundDivide(measure, massMultiplier)} kilos`
    }
    inputEl.value=""
}

function roundMulti(measure, multiplier) {
    return Number.parseFloat(measure * multiplier).toFixed(3)
}

function roundDivide(measure, multiplier) {
    return Number.parseFloat(measure / multiplier).toFixed(3)
}