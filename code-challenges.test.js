// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { objectExpression } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe("capName", () => {
//   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
//     expect(capName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

// Good Fail!
// ReferenceError: capName is not defined

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function that takes in an array
// Iterate over the different objects by using .map((object) because were iterating over the objects
// Use string interpolation for the name in the object and occupation
// Using .split("") we are individually seperating the elements
// We must map over again to slice the (0,1) which is the first elements index and the second elements first index (I believe)
// Slice the first letter of each word for the names by using object.name because we can use dot notation like you said to access the key value pairs
// Capitalize it using .toUpperCase() method and join them back

const capName = (array) => {
  return array.map((object) => `${object.name.split("").map((firstName) => firstName.slice(0, 1).toUpperCase() + firstName.slice(1)).join("")} is ${object.occupation}.`
  )
}
console.log((capName(people)
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe("remDivBy3", () => {
//   it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
//     expect(remDivBy3(hodgepodge1)).toEqual([2, 0, -1, 0])
//     expect(remDivBy3(hodgepodge2)).toEqual([2, 1, -1])
//   })
// })

// Good Fail!
//     ReferenceError: remDivBy3 is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

//PSUEDO CODE:
// Create a function and pass in an array
// I think we should filter out the strings and boolean values to only leave us with the integers. 
// Then we iterate over the array using the .map which returns the same values inputted, but % by 3
// Console log

const remDivBy3 = (array) => {
  return array.filter((value) => typeof value === "number").map((value) => value % 3)
}
console.log(remDivBy3(hodgepodge1))
console.log(remDivBy3(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// describe("sumOfNumCubed", () => {
//   it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
//     expect(sumOfNumCubed(cubeAndSum1)).toEqual(99)
//     expect(sumOfNumCubed(cubeAndSum2)).toEqual(1125)
//   })
// })

// Good Fail!
// ReferenceError: sumOfNumCubed is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function and pass in an array
// Cube each number 
// I believe using .reduce() which takes in an array of numbers and returns a single value, will be used for this
// Then we will take the value and the next value and add them together, remeber the reduce method will only output a single value. 
// Console log both function names

const sumOfNumCubed = (array) => {
  return array.map((value) => value ** 3).reduce((value, nextValue) => value + nextValue)
}
console.log(sumOfNumCubed(cubeAndSum1))
console.log(sumOfNumCubed(cubeAndSum2))