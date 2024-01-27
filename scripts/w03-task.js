/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add(number1, number2){
    return number1 + number2;
}
function addNumbers (){
    const addend1 = parseFloat(document.getElementById('add1').value);
    const addend2 = parseFloat(document.getElementById('add2').value);
    // Perform addition
    const sum = add(addend1, addend2); // Call the add function with the two arguments

    // Assign the sum to the HTML form element with ID of sum
    document.getElementById('sum').value = sum;
}
// Add an event listener to the addNumbers button to call the addNumbers function when clicked
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(a, b) {
    return a - b;
};

// Define the subtractNumbers function expression
const subtractNumbers = function() {
    // Get the values of the two input fields
    const num1 = parseFloat(document.getElementById("subtract1").value);
    const num2 = parseFloat(document.getElementById("subtract2").value);

    // Call the subtract function with the two arguments and assign the return value to the difference input field
    document.getElementById("difference").value = subtract(num1, num2);
};

// Add an event listener to the subtractNumbers button to call the subtractNumbers function when clicked
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (a, b) => a * b;

// Define the multiplyNumbers arrow function
const multiplyNumbers = () => {
    // Get the values of the two input fields
    const num1 = parseFloat(document.getElementById("factor1").value);
    const num2 = parseFloat(document.getElementById("factor2").value);

    // Call the multiply arrow function with the two arguments and assign the return value to the product input field
    document.getElementById("product").value = multiply(num1, num2);
};

// Add an event listener to the multiplyNumbers button to call the multiplyNumbers function when clicked
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(a, b) {
    return a / b;
}

// Function Declaration for divideNumbers
function divideNumbers() {
    // Get the values of the two input fields
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);

    // Check if the divisor is not zero
    if (divisor !== 0) {
        // Call the divide function with the two arguments and assign the return value to the quotient input field
        document.getElementById("quotient").value = divide(dividend, divisor);
    } else {
        // If divisor is zero, display an error message
        alert("Cannot divide by zero!");
    }
}

// Add an event listener to the divideNumbers button to call the divideNumbers function when clicked
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
// Add an event listener to the Get Total Due button
document.getElementById("getTotal").addEventListener("click", function() {
    // Get the value entered by the user in the subtotal field
    const subtotalInput = document.getElementById("subtotal").value;

    // Check if the input value is a valid numeric amount
    if (!isValidNumericAmount(subtotalInput)) {
        alert("Please enter a valid numeric amount for the subtotal.");
        return; // Exit the function if the input is not valid
    }

    // Convert the input value to a numeric value
    const subtotal = parseFloat(subtotalInput);

    // Get the value of the membership checkbox
    const isMember = document.getElementById("member").checked;

    // Apply a 20% discount to the subtotal amount if the user is a club member
    const discount = isMember ? 0.2 * subtotal : 0;

    // Calculate the total amount due
    const total = subtotal - discount;

    // Output the total to the total span in the specified format with two decimals
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
});

// Function to check if a value is a valid numeric amount
function isValidNumericAmount(value) {
    // Use a regular expression to check if the value consists of digits and an optional decimal point
    return /^\d+(\.\d+)?$/.test(value);
}

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
// Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
// Use the filter() method to find all odd numbers in the numbersArray
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);

// Assign the result to the HTML element with an ID of "odds"
document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */
// Use the filter() method to find all even numbers in the numbersArray
const evenNumbers = numbersArray.filter(number => number % 2 === 0);

// Assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */
// Use the reduce() method to sum the elements of the numbersArray
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById("sumOfArray").textContent = sum;

/* Output Multiplied by 2 Array */
// Use the map() method to multiply each element in the array by 2
const multipliedArray = array.map(element => element * 2);

// Assign the result to the HTML element with an ID of "multiplied"
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */
// Use the map() method to multiply each element in the array by 2
const multipleArray = array.map(element => element * 2);

// Use the reduce() method to sum the elements of the multiplied array
const sumOfMultiplied = multipleArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
