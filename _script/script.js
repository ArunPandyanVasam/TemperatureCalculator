
function getCelsiusToFahrenheit() {
    let celsius = parseFloat(document.getElementById('inputNum').value);
    let fahrenheit = (celsius * 9/5) + 32;
    displayResult(`${fahrenheit.toFixed(2)}`);
}

function getFahrenheitToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('inputNum').value);
    let celsius = (fahrenheit - 32) * 5/9;
    displayResult(`${celsius.toFixed(2)}`);
}

function getFeetToMeters() {
    let feet = parseFloat(document.getElementById('inputNum').value);
    if (feet>0) {
        let meters = feet * 0.3048;
        displayResult(`${meters.toFixed(2)}`);
    }
    else {
        displayResult("Please Enter a Positive Number");
    }
    
}

function getMetersToFeet() {
    let meters = parseFloat(document.getElementById('inputNum').value);
    if (meters>=0) {
        let feet = meters / 0.3048;
        displayResult(`${feet.toFixed(2)}`);
    }
    else {
        displayResult("Please Enter a Positive Number");
    }
    
}

function getInchesToCentimeters() {
    let inches = parseFloat(document.getElementById('inputNum').value);
    if (inches>0) {
        let centimeters = inches * 2.54;
        displayResult(`${centimeters.toFixed(2)}`);
    }
    else {
        displayResult("Please Enter a Positive Number");
    }
    
}

function getCentimetersToInches() {
    let centimeters = parseFloat(document.getElementById('inputNum').value);
    if (centimeters>0) {
        let inches = centimeters / 2.54;
        displayResult(`${inches.toFixed(2)}`);
    }
    else {
        displayResult("Please Enter a Positive Number");
    }
    
}

function getPoundsToKilograms() {
    let pounds = parseFloat(document.getElementById('inputNum').value);
    if (pounds>0) {
        let kilograms = pounds * 0.453592;
        displayResult(`${kilograms.toFixed(2)}`);
    }
    else {
        displayResult("Please Enter a Positive Number");
    }
    
}

function getKilogramsToPounds() {
    let kilograms = parseFloat(document.getElementById('inputNum').value);
    if (kilograms>0) {
        let pounds = kilograms / 0.453592;
        displayResult(`${pounds.toFixed(2)}`);
    }
    else {
        displayResult("Please Enter a Positive Number");
    }
    
}

function displayResult(output) {
    document.getElementById('result').textContent = output;
  }

  function makeClear() {
    document.getElementById('inputNum').value = '';
    document.getElementById('result').textContent = '';
  }