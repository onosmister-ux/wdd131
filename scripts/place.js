const temperature = 10
const windSpeed = 5

function calculateWindChill(temp, speed){
return 13.12 + (0.6215 * temp) - (11.37 * speed ** 0.16) + (0.3965 * temp * speed ** 0.16)
}

let windChill = "N/A"

if (temperature <= 10 && windSpeed > 4.8){
windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C"
}

document.getElementById("windChill").textContent = windChill

document.getElementById("year").textContent = new Date().getFullYear()

document.getElementById("lastModified").textContent = document.lastModified
