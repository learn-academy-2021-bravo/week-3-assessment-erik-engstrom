// ASSESSMENT 3: Coding practical questions with Jest

// const { LOGICAL_OPERATORS } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// The testing method starts by adding the function name to the describe line  
describe ("fibonacci", () => {
  //declare the variables to be used
  let input1 = 6
  let input2 = 10
  // write a test for what you are looking to return in plain words
  test ("return an array of numbers that add the previous 2 indexes to make the 3rd index", () => {
  // next is what you expect the function to return when evaluated
    expect(fibonacci(input1)).toEqual("[1, 1, 2, 3, 5, 8]")
    expect(fibonacci(input2)).toEqual("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]")
  })
})

// b) Create the function that makes the test pass.
// set initial conditions
let n1 = 0, n2 = 1, nextTerm;
// Define function to return fibonacci sequence
const fibonacci= (num) => {
  //write a for loop to go over the length of the input and add the terms 
  for (let i = 1; i <= num; i++){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    return n1;
  }  
};



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// The testing method starts by adding the function name to the describe line
describe ("oddSorted", () => {

  //declare the variables to be used
  var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

  var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// write a test for what you are looking to return in plain words
test ("return a new array of only odd numbers sorted from least to greatest", () => {
  // next write what you expect the function to return when evaluated
    expect(oddsSorted(fullArr1)).toEqual("[-9, 7, 9, 199]")
    // Excpected output: [-9, 7, 9, 199]
    expect(oddsSorted(fullArr2)).toEqual("[-823, 7, 23]")
    //  // Expected output: [-823, 7, 23]



// // b) Create the function that makes the test pass.

// write a function that returns only odd numbers in order from least to greatest.
const oddsSorted = (arr) =>{
  // use the .filter method to evaluate over the array to return a new array not the same length.
  arr.filter(arr => 
  //write a condition where only odd numbers are returned and sorted in ascending order
    if (arr % 3 === 0 && arr !== "" && arr !== true && arr !== false && arr !== null){
      arr.sort(function(a, b){return a - b});
    }
  }
}
// Can't get the test to pass but I think I'm on the right path...

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// The testing method starts by adding the function name to the describe line  
describe ("addArray", () => {
  //declare the variables to be used
  var numbersToAdd1 = [2, 4, 45, 9]
  var numbersToAdd2 = [0, 7, -8, 12]
  var numbersToAdd3 = []
  
  // write a test for what you are looking to return in plain words
  test ("return an array of numbers that accumulate the sum, an empty array should return an empty array", () => {
  // next write what you expect the function to return when evaluated
    expect(addArray(numbersToAdd1)).toEqual("[2, 6, 51, 60]")
    // Excpected output: [2, 6, 51, 60]
    expect(addArray(numbersToAdd2)).toEqual("[0, 7, -1, 11]")
    //  // Expected output: [0, 7, -1, 11]
    expect(addArray(numbersToAdd3)).toEqual("[]")
    // Expected output: []
  })
})



// b) Create the function that makes the test pass.

// Define a function that takes in one argument
const addArray = (array) =>{
// was thinking about using .map() method here but I found the .reduce() to maybe work better in this case.
  array.reduce(function(r, a) {
  if (r.length > 0)
    a += r[r.length - 1];
  r.push(a);
  return r;
}, []);
}
// I may have messed up the logic of the reduce method. Can't get the test to pass but once again feel like i'm pretty close. 