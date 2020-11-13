const output = document.querySelector('.screen');
let temp = 123;
let leftOprand = 0;
let operator = "";

output.innerText = leftOprand;

buttonRows = document.querySelectorAll('.button-row')

let i = 0;

for (i = 0; i<6; i++) {
    buttonRows[i].addEventListener('click', function(event) {
        switch (event.target.innerText) {
            case "C":
                output.innerText = 0;
                leftOprand = 0;
                operator = "";
                break;
            case "÷":
            case "×":
            case "-":
            case "+":
                if (operator !== "") {
                    if (operator === "÷") {
                        operator = event.target.innerText;
                        output.innerText = leftOprand / output.innerText;
                        leftOprand = output.innerText;
                    }
                    else if (operator === "×") {
                        operator = event.target.innerText;
                        output.innerText = leftOprand * output.innerText;
                        leftOprand = output.innerText;
                    }
                    else if (operator === "-") {
                        operator = event.target.innerText;
                        output.innerText = leftOprand - output.innerText;
                        leftOprand = output.innerText;
                    }
                    else if (operator === "+") {
                        operator = event.target.innerText;
                        output.innerText = leftOprand + output.innerText;
                        leftOprand = output.innerText;
                    }
                }
                else {
                    operator = event.target.innerText;
                    leftOprand = output.innerText;
                }
                output.innerText = 0;
                break;
            case "←":
                output.innerText = Math.floor(output.innerText / 10);
                break
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                console.log(event.target.innerText);
                output.innerText = output.innerText * 10 + parseInt(event.target.innerText);
                break;
            case "=":
                console.log(leftOprand);
                console.log(output.innerText)
                if (operator === "+") {
                    output.innerText = parseInt(leftOprand) + parseInt(output.innerText);
                }
                else if (operator === "-") {
                    output.innerText = leftOprand - output.innerText;
                }
                else if (operator === "×") {
                    output.innerText = leftOprand * output.innerText;
                }
                else if (operator === "÷") {
                    output.innerText = leftOprand / output.innerText;
                }
                leftOprand = Math.floor(output.innerText);
                operator = "";
                break;
        }
    });
}