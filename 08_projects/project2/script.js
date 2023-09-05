

const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let w = Number(document.getElementById('weight').value)
    let h = Number( document.getElementById('height').value)
    const result = document.querySelector('#results');
    h = h / 100;
    if (w > 0 && h > 0) {
        const BMI = (w) / (h * h);
        result.style.color = "white"
        if (BMI < 18.6)
            result.style.backgroundColor = "orange"
        else if (BMI >= 18.6 && BMI <= 24.9)
            result.style.backgroundColor = "green"
        else
            result.style.backgroundColor = "red"
        result.innerText = BMI.toFixed(2)
    }
    else {
        result.style.backgroundColor = "red"
        result.style.color = "white"
        result.innerText = "Error"
    }
})