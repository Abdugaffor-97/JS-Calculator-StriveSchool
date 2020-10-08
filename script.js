window.addEventListener("DOMContentLoaded", function () {
    // Create function to perform operation
    const sum = function (num1, num2) {
        return num1 + num2;
    };

    const diff = function (num1, num2) {
        return num1 - num2;
    };

    const mul = function (num1, num2) {
        return num1 * num2;
    };

    const div = function (num1, num2) {
        return num1 / num2;
    };

    let operation = "";
    let previousResult = 0;
    const result = document.querySelector("#result");

    // When Function buttons clicked
    // Event handler 'click' is going to call this function
    const numButtonPressed = function (event) {
        const numValue = event.target.value;
        console.log(numValue);

        if (result.value === "0") {
            result.value = numValue;
        } else {
            result.value += numValue;
        }
    };

    const funcButtonPressed = function (event) {
        const funcValue = event.target.value;
        console.log(funcValue);
        // Evaluating which button pressed

        switch (funcValue) {
            case "=":
                switch (operation) {
                    case "+":
                        result.value = sum(
                            previousResult,
                            parseFloat(result.value)
                        );
                        break;
                    case "-":
                        result.value = diff(
                            previousResult,
                            parseFloat(result.value)
                        );
                        break;
                    case "*":
                        result.value = mul(
                            previousResult,
                            parseFloat(result.value)
                        );
                        break;
                    case "/":
                        result.value = div(
                            previousResult,
                            parseFloat(result.value)
                        );
                        break;
                    default:
                        console.log("Default Case");
                }
                break;
            case "C":
                // Returns everuthing to default
                result.value = 0;
                previousResult = 0;
                operation = "";
                console.log("Previous Result", previousResult);
                console.log("operation", operation);
                break;

            // if the case is neither '=' or 'c' it performs the default operation
            default:
                previousResult = parseFloat(result.value);
                console.log("previousResult", previousResult);

                operation = funcButtonPressed;
                console.log("operation", operation);

                result.value = "0";
        }
    };

    // Grabbing  numButtons and funcButton from DOM
    const numButtons = document.querySelectorAll(".numButton");
    const funcButtons = document.querySelectorAll(".funcButton");

    // Cycling the elements to attcach the single <input onclick='function()'/> an onckilck event handler
    for (let button of numButtons) {
        button.addEventListener("click", numButtonPressed);
    }

    for (let button of funcButtons) {
        button.addEventListener("click", funcButtonPressed);
    }
});
