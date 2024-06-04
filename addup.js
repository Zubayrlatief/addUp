   
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var resultDisplay = document.getElementById("result");
    num1Input.addEventListener("input", performAddition);
    num2Input.addEventListener("input", performAddition);

    function performAddition() {
        var num1 = parseFloat(num1Input.value) || 0; 
        var num2 = parseFloat(num2Input.value) || 0;
        var result = num1 + num2;
        resultDisplay.textContent = "Result: " + result;
    }
