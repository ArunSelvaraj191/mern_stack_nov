// const axios = require("axios");
// import axios from "axios";
// alert("Welcome to my Extertnal File!");
// console.log("Hello World");

// // name = "Arun";
// var name = "Kumar";
// let age = 27;
// const country = "India";
// name = "Arun Kumar";
// age = 29;
// // country = "USA"; // This will throw an error because 'country' is a constant

// console.log("My name is", name, ", age is", age, "and I live in", country);

const sampleFunction = () => {
  var name = "Arun"; // String
  let age = 26; // Number
  let isStudent = false; // Boolean
  let isArray = [1, 2, 3, 4, 5]; // Array kindof object
  let isObject = { key1: "value1", key2: "value2" }; // Object
  let isUndefined; // Undefined
  let isNull = null; // Null kindof object

  console.log(
    "Name of data type ::",
    typeof name,
    typeof age,
    typeof isStudent,
    typeof isArray,
    typeof isObject,
    typeof isUndefined,
    typeof isNull
  );
  //   console.log("My name is", name, ", age is", age, "and I live in", country);
  //   console.log(`My name is ${name}, age is ${age} and I live in ${country}`);
};

// console.log("Before calling sampleFunction", age);

// sampleFunction();

// function functionName() {}

// const arrowFunction = () => {};

const operatorsFunction = () => {
  // Arithmetic Operators
  let a = 10;
  let b = 5;
  console.log("Addition:", a + b, "Arun" + "Kumar"); // 15
  console.log("Subtraction:", a - b); // 5
  console.log("Multiplication:", a * b); // 50
  console.log("Division:", a / b); // 2
  console.log("Modulus:", a % b); // 0

  // Assignment Operators
  //   let x = 10;
  //   x += 5; // x = x + 5 => x = 10 + 5 = 15
  //   x -= 5; // x = x - 5 => x = 10 - 5 = 5
  //   console.log("Assignment:", x); // 10

  // Comparison Operators
  let x = "10";
  let y = 10;

  console.log("Equal to:", x === y); // true
  //   console.log("Not equal to:", x != y);

  //Practice x > y, x < y, x >= y,  x <= y, x && y, x || y
};

// operatorsFunction();

function conditionalStatements() {
  let mark = 100;
  //   if (mark >= 90) {
  //     console.log("Grade A");
  //   } else if (mark >= 75) {
  //     console.log("Grade B");
  //   } else {
  //     console.log("Grade C");
  //   }

  console.log(
    "Using Ternary Operator:",
    mark >= 90 ? "Grade A" : mark >= 70 ? "Grade B" : "Grade C"
  );

  // Practice what is switch case and ternary operator advanced example
}

conditionalStatements();

const loopsFunction = () => {
  // For Loop
  const x = 1;
  for (
    let i = 10;
    i >= x; // 10 >= 10
    i-- // for(initialization; condition; increment/decrement){  }
  ) {
    console.log("For Loop Iteration:", i);
  }
};
// loopsFunction();

const handleAlert = () => {
  alert("Button Clicked!");
};

const changeText = () => {
  // const heading = document.getElementById("title"); // Selecting the element by id
  const heading = document.getElementById("title"); // Selecting the element by id
  console.log("heading :::", heading);
  heading.innerText = "DOM Manipulation Successful!"; // Changing the text content
  heading.style.color = "green";
};

// Enquire this

// const btn = document.getElementById("btn");
// const msg = document.getElementById("msg");

// btn.addEventListener("click", () => {
//   msg.innerText = "DOM Manipulation Successful!";
// });

// Callback

// const fetData = (callback) => {
//   console.log("Fetching Data...");
//   setTimeout(() => {
//     const data = { id: 1, name: "Arun Kumar", age: 27 };
//     callback(data);
//   }, 3000);
// };

// const displayData = (data) => {
//   console.log("Data received:", data);
// };

// fetData(displayData);

// Promises

// const fetData = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching Data...");
//     let sucess = true; // change to false to test rejection
//     setTimeout(() => {
//       if (sucess) {
//         const data = { id: 1, name: "Arun Kumar", age: 27 };
//         const jsonstring = JSON.stringify(data);
//         const jsonparse = JSON.parse(jsonstring);
//         console.log("JSON Stringify:", typeof jsonstring);
//         console.log("JSON Parse:", typeof jsonparse);
//         resolve(jsonparse);
//       } else {
//         reject("Error: Unable to fetch data");
//       }
//     }, 3000);
//   });
// };

// fetData()
//   .then((data) => console.log("Data received:", data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Fetch attempt completed."));

// const loadUSerData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log("USer Data :::", data))
//     .catch((error) => console.log("Error fetching user data:", error))
//     .finally(() => console.log("User data fetch attempt completed."));
// };

// loadUSerData();

const loadUserDataAxios = async () => {
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("Axios User Data :::", response.data);
    })
    .catch((error) =>
      console.log("Error fetching user data with Axios:", error)
    )
    .finally(() => console.log("Axios user data fetch attempt completed."));
};

loadUserDataAxios();
