function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operator) {
        case '+':
          result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').innerText = result;

    if (result > 5) {
        document.getElementById('result1').style.color = 'red'

         }
    if (result < 5 ) { 
        document.getElementById('result1').style.color = 'green'
    }
}