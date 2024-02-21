//1.A function with 4 parameters
// Define a function called myFunction with four parameters: param1, param2, param3, and param4
function myFunction(param1, param2, param3, param4) {
    // Concatenate the four parameters with spaces in between and return the result
    return param1 + " " + param2 + " " + param3 + " " + param4; 
}
// Call the myFunction with four arguments: "Enzo", "dit", "this", and "javascript"
let result = myFunction("Enzo", "dit" , "this" , "javacript");
// Output the result to the console
console.log(result);

//2.Arrow functions
// What is an Arrow Function?
// An arrow function is a compact way to write functions in JavaScript. It provides a shorter syntax compared to traditional function expressions.

// const: This is a keyword used to declare a constant variable named add. Once a value is assigned to add, it cannot be reassigned.
// add: This is the name of the function.

//=>: This is called the "arrow" or "fat arrow" and it separates the parameters from the function body.
     //(parameter) => expresion  
const add = (a, b) => a + b;
// Output the add result to the console
console.log(add("Enzo", " De Vittorio")); 

//3.Callback function

const fetchData = (callback) => {
    const data = {name: "Enzo", age: "21"};
    callback(data);
}; 

const processData = (data) => {
    console.log(data);
};

fetchData(processData)


//4.async-await

async function takeData() {
    try {
        // Fetch data from an API
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        // Handle errors
        throw new Error('Failed to fetch data');
    }
}

// Usage:
async function getData() {
    try {
        const data = await takeData();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

// Call the async function
getData();

//5.Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
     const success = true; // Simulate success or failure
        if (success) {
            // Resolve the promise with a successful result
            resolve("Data successfully fetched");
        } else {
            // Reject the promise with an error
            reject(new Error("Failed to fetch data"));
        }
    }); 


// Consume the promise
myPromise
    .then((result) => {
        // Handle the resolved value (success)
        console.log("Resolved:", result);
    })
    .catch((error) => {
        // Handle the rejected reason (error)
        console.error("Rejected:", error.message);
    });

//6.Nested for loops

// Define a two-dimensional array
const number = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Iterate over the rows of the number
for (let i = 0; i < number.length; i++) {
    // Iterate over the elements in each row
    for (let j = 0; j < number[i].length; j++) {
        // Access each element and perform some task
        console.log(number[i][j]);
    }
}

//7.Nested if statemant
//We have a variable num initialized with the value 2.
let num = 2;
//The outer if statement checks if the value of num is greater than 0.
if (num > 0) {
    console.log("positive");
//Since the value of num (2) is greater than 0, the condition in the outer if statement evaluates to false. Hence, the code inside the else block is executed.
} else {
//Inside the else block, there is another if statement that checks if the value of num is less than 0.
    if (num < 0) {
        console.log("negative");
    } 
}

let num2 = -4;

if (num2 > 0) {
    console.log("positive");
} else {
    if (num2 < 0) {
        console.log("negative");
    } 
}