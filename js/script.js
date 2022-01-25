document.getElementById('inputKg').addEventListener('input', function (e) {
    var kg = e.target.value;
    console.log(kg);
    document.getElementById('inputG').value = (kg * 1000).toFixed(10);
    document.getElementById('inputMg').value = (kg * 1000000).toFixed(10);
    document.getElementById('inputPound').value = (kg * 2.20462).toFixed(10);
    document.getElementById('inputOunce').value = (kg * 35.274).toFixed(10);
    document.getElementById('inputTonne').value = (kg * 0.001).toFixed(10);
    document.getElementById('inputStone').value = (kg * 0.157473).toFixed(10);
});

document.getElementById('inputG').addEventListener('input', function (e) {
    var gram = e.target.value;
    console.log(gram);
    document.getElementById('inputKg').value = (gram * 0.001).toFixed(10);
    document.getElementById('inputMg').value = (gram * 1000).toFixed(10);
    document.getElementById('inputPound').value = (gram * 0.00220462).toFixed(10);
    document.getElementById('inputOunce').value = (gram * 0.03527396195).toFixed(10);
    document.getElementById('inputTonne').value = (gram / 1000000).toFixed(10);
    document.getElementById('inputStone').value = (gram * 0.00015747).toFixed(10);
});

document.getElementById('inputMg').addEventListener('input', function (e) {
    var mg = e.target.value;
    console.log(mg);
    document.getElementById('inputKg').value = (mg / 1000000).toFixed(10);
    document.getElementById('inputG').value = (mg * 0.001).toFixed(10);
    document.getElementById('inputPound').value = (mg * 0.0000022046).toFixed(10);
    document.getElementById('inputOunce').value = (mg * 0.000035274).toFixed(10);
    document.getElementById('inputTonne').value = (mg / 1000000000).toFixed(10);
    document.getElementById('inputStone').value = (mg * 0.00000015747).toFixed(10);
});

document.getElementById('inputPound').addEventListener('input', function (e) {
    var pound = e.target.value;
    console.log(pound);
    document.getElementById('inputKg').value = (pound * 0.453592).toFixed(10);
    document.getElementById('inputG').value = (pound * 453.592).toFixed(10);
    document.getElementById('inputMg').value = (pound * 453592).toFixed(10);
    document.getElementById('inputOunce').value = (pound * 16).toFixed(10);
    document.getElementById('inputTonne').value = (pound * 0.000453592).toFixed(10);
    document.getElementById('inputStone').value = (pound * 0.071429).toFixed(10);
});

document.getElementById('inputOunce').addEventListener('input', function (e) {
    var ounce = e.target.value;
    console.log(ounce);
    document.getElementById('inputKg').value = (ounce * 0.0283495).toFixed(10);
    document.getElementById('inputG').value = (ounce * 28.3495).toFixed(10);
    document.getElementById('inputMg').value = (ounce * 28349.5).toFixed(10);
    document.getElementById('inputPound').value = (ounce * 0.0625).toFixed(10);
    document.getElementById('inputTonne').value = (ounce / 35274).toFixed(10);
    document.getElementById('inputStone').value = (ounce * 0.0044643).toFixed(10);
});

document.getElementById('inputTonne').addEventListener('input', function (e) {
    var tonne = e.target.value;
    console.log(tonne);
    document.getElementById('inputKg').value = (tonne * 1000).toFixed(10);
    document.getElementById('inputG').value = (tonne * 1000000).toFixed(10);
    document.getElementById('inputMg').value = (tonne * 1000000000).toFixed(10);
    document.getElementById('inputPound').value = (tonne * 2204.6).toFixed(10);
    document.getElementById('inputOunce').value = (tonne * 35274).toFixed(10);
    document.getElementById('inputStone').value = (tonne * 157.47).toFixed(10);
});

document.getElementById('inputStone').addEventListener('input', function (e) {
    var stone = e.target.value;
    console.log(stone);
    document.getElementById('inputKg').value = (stone / 0.15747).toFixed(10);
    document.getElementById('inputG').value = (stone / 0.00015747).toFixed(10);
    document.getElementById('inputMg').value = (stone / 0.00000015747).toFixed(10);
    document.getElementById('inputPound').value = (stone * 14).toFixed(10);
    document.getElementById('inputOunce').value = (stone * 224).toFixed(10);
    document.getElementById('inputTonne').value = (stone / 157.47).toFixed(10);
});
