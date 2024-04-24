function toCelsius(){
    let fahrenhiet = prompt("Fahrenhiet: ")
    let valueF = ((fahrenhiet - 32)*5/9)
    document.getElementById("resultC").innerHTML = "From "+ fahrenhiet + "°F"+ " to " + valueF.toFixed(3) + "°C";
}
function toFahrenhiet(){
    let celsuis = prompt("Celsius: ")
    let valueC = ((celsuis *9/5)+ 32)
    document.getElementById("resultF").innerHTML = "From "+ celsuis + "°C"+ " to " + valueC.toFixed(3) + "°F";
}
toCelsius()
toFahrenhiet()
console.log(celsuis)
console.log("Exit")