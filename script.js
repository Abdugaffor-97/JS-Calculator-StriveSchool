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
    let previousinput = "";
    let currentinput = "";
    const input = document.querySelector("#user-input");

    // When Function buttons clicked
    // Event handler 'click' is going to call this function
    const numButtonPressed = function (event) {
        const numValue = event.target.value;
        console.log(numValue);

        // When a button pressed and its value was 0 then we de following!
        if (input.value === "0") {
            input.value = numValue;
            // console.log(input.value);
        } else {
            // Assign new value to the #input
            input.value += numValue;
        }
        previousinput = input.value;
    };

    const funcButtonPressed = function (event) {
        const funcValue = event.target.value;
        input.value = "";
        currentinput = input.value;

        console.log(currentinput);
        console.log(previousinput);

        switch (funcValue) {
            case "+":
                input.value = "";
                input.value = previousinput + "+" + currentinput;
                // input.value = sum(previousinput, parseFloat(input.value));
                break;

            case "C":
                input.value = "0";
                previousinput = "";
                currentinput = "";

            default:
                console.log("Default case");
        }
    };

    // // Grabbing  numButtons and funcButton from DOM
    const numButtons = document.querySelectorAll(".numButton");
    const funcButtons = document.querySelectorAll(".funcButton");
    // console.log(funcButtons);
    // console.log(numButtons);

    // Cycling the elements to attcach the single <input onclick='function()'/> an onckilck event handler
    for (let button of numButtons) {
        button.addEventListener("click", numButtonPressed);
    }

    for (let button of funcButtons) {
        button.addEventListener("click", funcButtonPressed);
    }
});
