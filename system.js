/*
TODO
- add parentheses
- add option to delete
- add history? -> maybe like somewhere to the side
*/
let num1 = '';
let num2 = '';
let operation;
let result = 0;

function putNumberOnScreen (clickedButton, displayParagraph = document.getElementById('displayText')){
    if (typeof clickedButton === 'number' && typeof num1 === 'string'){
        num1 += String(clickedButton);
        displayParagraph.textContent = String(num1);
    }
    else if (typeof clickedButton === 'number' && typeof num1 === 'number') {
        num2 += String(clickedButton);
        displayParagraph.textContent += String(clickedButton);
    }
    else {
        if(clickedButton !== '=') {
            displayParagraph.textContent += String(clickedButton);
        };
        switch (clickedButton) {
            case '=':
                switch (operation) {
                    case '+':    
                        result = num1 + Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = '';
                        num2 = '';
                        result = 0;
                        break;
                    case '-':    
                        result = num1 - Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = '';
                        num2 = '';
                        result = 0;
                        break;
                    case '*':    
                        result = num1 * Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = '';
                        num2 = '';
                        result = 0;
                        break;
                    case '/':    
                        result = num1 / Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = '';
                        num2 = '';
                        result = 0;
                        break;
                }
                break;
            case '*':
                num1 = Number(num1);
                operation = '*';
                break;
            case '+':
                num1 = Number(num1);
                operation = '+';
                break;
            case '-':
                num1 = Number(num1);
                operation = '-';
                break;
            case '/':
                num1 = Number(num1);
                operation = '/';
                break;
            case 'square':
                num1 = Number(num1);
                result = num1*num1;
                displayParagraph.textContent = String(result);
                num1 = '';
                break;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const myButton0 = document.getElementById("zero");
    const myButton1 = document.getElementById("square");
    const myButton2 = document.getElementById("divide");
    const myButton3 = document.getElementById("multiply");
    const myButton4 = document.getElementById("one");
    const myButton5 = document.getElementById("two");
    const myButton6 = document.getElementById("three");
    const myButton7 = document.getElementById("plus");
    const myButton8 = document.getElementById("four");
    const myButton9 = document.getElementById("five");
    const myButton10 = document.getElementById("six");
    const myButton11 = document.getElementById("minus");
    const myButton12 = document.getElementById("seven");
    const myButton13 = document.getElementById("eight");
    const myButton14 = document.getElementById("nine");
    const myButton15 = document.getElementById("equals");

    myButton0.addEventListener("click", function() {
        putNumberOnScreen(0);
    });
    myButton1.addEventListener("click", function() {
        putNumberOnScreen('square');
    });
    myButton2.addEventListener("click", function() {
        putNumberOnScreen('/');
    });
    myButton3.addEventListener("click", function() {
        putNumberOnScreen('*');
    });
    myButton4.addEventListener("click", function() {
        putNumberOnScreen(1);
    });
    myButton5.addEventListener("click", function() {
        putNumberOnScreen(2);
    });
    myButton6.addEventListener("click", function() {
        putNumberOnScreen(3);
    });
    myButton7.addEventListener("click", function() {
        putNumberOnScreen('+');
    });
    myButton8.addEventListener("click", function() {
        putNumberOnScreen(4);
    });
    myButton9.addEventListener("click", function() {
        putNumberOnScreen(5);
    });
    myButton10.addEventListener("click", function() {
        putNumberOnScreen(6);
    });
    myButton11.addEventListener("click", function() {
        putNumberOnScreen('-');
    });
    myButton12.addEventListener("click", function() {
        putNumberOnScreen(7);
    });
    myButton13.addEventListener("click", function() {
        putNumberOnScreen(8);
    });
    myButton14.addEventListener("click", function() {
        putNumberOnScreen(9);
    });
    myButton15.addEventListener("click", function() {
        putNumberOnScreen('=');
    });
    
});
