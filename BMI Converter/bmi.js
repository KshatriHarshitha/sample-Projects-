document.getElementById('convertBtn').addEventListener('click', function () {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = `Please enter valid height and weight values to calculate your BMI`;
        return;
    }

    var bmi = claculateBmi(height, weight);
    document.getElementById('result').innerHTML = `Your BMI is: ` + bmi.toFixed(2);
});
function claculateBmi(height, weight) {
    return weight / ((height / 100) * (height / 100));
}