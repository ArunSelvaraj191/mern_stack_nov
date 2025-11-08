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
