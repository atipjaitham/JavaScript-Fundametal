function toCelsius(fahrenhiet){
    let valueF = ((fahrenhiet - 32)*5/9)
    return valueF.toFixed(2) + "°C";
}
function toFahrenhiet(celsuis){
    let valueC = ((celsuis *9/5)+ 32)
    return valueC.toFixed(2) + "°F";
}
function display(elementID, value){
    document.getElementById(elementID).innerHTML ="<b>" + value + "</b>"
}
toCelsius(32)
toFahrenhiet(90)
display("toCelsius",toCelsius(100))
display("toFahrenheit",toFahrenhiet(90))