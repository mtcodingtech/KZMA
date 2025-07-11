// function greet(){
//     console.log("hi")
//     return "hello"
// }

// // greet();
// console.log(greet())


// ***********************

// let user = function(){
//     console.log("hello")
// }
// console.log(user())

// ************************

// (function(){
//     console.log("first")
// })()

// ************************


// let greet = myFunc();

// function myFunc() {
//     console.log('hi')
// }


// *************************

// function greet() {
//     return "hello"
// }

// let greet1 = () => "hello";
// console.log(greet1())

// *************************

function sum(num1 = 1, num2 = 2){
    console.log(num1, num2)
    return num1 + num2
}
console.log(sum(10, 20))
console.log(sum(5, 12))
console.log(sum())
