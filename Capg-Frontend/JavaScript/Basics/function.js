
// 1. Named Function
function greet() {
    console.log("Hello");
}

greet();

// 2. Anonymous Function
let x = function() {
    console.log("Anonymous function");
};

x();
console.log(x);
console.log(x());


// 3. Function with Expression : storing the function inside A variable.
let add = function(a, b) {
    return a + b;
};

console.log(add(2, 3));


// 4. Nested Function : function inside function.
// closure object created only when inner func use property of outer function.
function outer() {
    let a = 10;
    function inner() {
        console.log("Inner function",a);
    }
    inner();
}
outer();

// 2nd way of writing nested function
function Parent(Parentmoney){
    function Child(Childmoney){
        let total = Parentmoney + Childmoney;
        return total;
    }
    console.log(Child(500));
}
Parent(1000);

// 3rd way of writing nested function

// for debugger go to live html page then inspect , go to sources and click on function.js file and click on line number where you want to put break point then refresh the page and you can see the code is executing line by line.

// debugger;
// function parent(Parentmoney){
//     function child(Childmoney){
//         let total = Parentmoney + Childmoney;
//         return total;
//     }
//     return child(500);
// }
// console.log(parent(1000));


debugger;
function Bank(interest){
    function RBI(rb_interest){
        let total = interest + rb_interest;
        function SBI(sbi_interest){
            let total1 = total + sbi_interest;
            return total1;
        }
        return SBI(200);
    }
    return RBI(300);
}
console.log(Bank(100));

// 5. Callback Function : passed as an argument in HOF.
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Bye!");
// }

// greet("K", sayBye);


// // 6. Higher-Order Function : accept another function as an argument and return that another function.
// function operation(a, b, func) {
//     return func(a, b);
// }

// function multiply(x, y) {
//     return x * y;
// }

// console.log(operation(2, 3, multiply));

// 5 + 6
function higherOrder(name, callback) {
    console.log("Hello " + name);
    callback(name);
}
function callback(name){
    return name;
}
higherOrder("K", callback);


// 7. Arrow Function

// another example of arrow function : implicit return
let arrowData = () => "this is arrow function"; // also a tiny function
console.log(arrowData());

// explicit retuen
let arrowData1 = () => {
    return "this is arrow function";
}
console.log(arrowData1());

// create function to find the sum of two numbers using arrow function
let sum = (a, b) => a + b;
console.log(sum(5, 3));

// create function to find the multiplication of two numbers using arrow function
let multi = (a, b) => a * b;
console.log(multi(5, 3));
 
// create function to compare two numbers using arrow function
let compare = (a, b) => a < b ? "a is smaller" : "b is greater";
console.log(compare(3, 5));

// create function to check even or odd number using arrow function
let evenOrOdd = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));


// create an anonymousfunction and declare it inside a variable and it should return table of 9 particular number.
let tableOf9 = function(num) {
    let table = "";
    for(let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    return table;
}
console.log(tableOf9(9));

// create a function to print welcome message using named function and it should accept name as a parameter.
function welcome(name) {
    return `Welcome ${name}`;
}
console.log(welcome("K"));


// create one higher order function which accepts a callback function and perform some operation.
function higherOrderFunction(callback) {
    let num1 = 10;
    let num2 = 5;
    return callback(num1, num2);
}
function divide(a, b) {
    return a / b;
}
console.log(higherOrderFunction(divide));


// Create a nested function GrandParent > Parent > child > grandchild and pass values to each other.

function GrandParent(grandParentMoney) {
    function Parent(parentMoney) {
        function Child(childMoney) {
            function GrandChild(grandChildMoney) {
                let totalMoney = grandParentMoney + parentMoney + childMoney + grandChildMoney;
                return totalMoney;
            }
            return GrandChild(100);
        }   
        return Child(50);
    }   
    return Parent(200);
}
console.log(GrandParent(500));
