console.log("hi");

// asynchronous task, 5000 is miliseconds (5 sec),i.e, after this time asynchrous task will be performed.
setTimeout((a,b) => {
    console.log(a+b);
    console.log("how are you");
},5000,30,40)

console.log("hello");   // this will be performed first

// Create a timer function which executes only once, ie after 5 sec, which takes two argumentto perform maths operation, take user input
function calculate(a, b) {
    let sum = a + b;
    let product = a * b;

    console.log("Sum = " + sum);
    console.log("Product = " + product);
}
// Take user input
// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
// Timer function (runs only once after 5 sec)
setTimeout(function() {
    calculate(num1, num2);
}, 5000);

// clearTimeout(a)
// clearInterval()

let tid = setInterval (() =>{
    document.writein("welcome to asynchronous");
},3000);
clearInterval(tid);


