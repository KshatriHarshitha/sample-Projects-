document.getElementById('convertBtn').addEventListener('click', function () {
    const fahrenheitInput = document.getElementById('fahrenheitInput').value;
    const celsius = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById('result').innerText = `${fahrenheitInput}°F  is equal to  ${celsius.toFixed(2)}°C`;
});