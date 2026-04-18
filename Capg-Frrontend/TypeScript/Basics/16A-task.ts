// Q1: create a function type that accept two numbers and return a number
type calculation = (num1:number , num2:number) => number;

let sum:calculation = (a , b) => a + b;
let sub:calculation = (a , b) => a - b;
let mul:calculation = (a , b) => a * b;
let div:calculation = (a , b) => {
    if(b != 0) {
        return a / b;
    }
    else {
        return a;
    }
}

console.log(sum(7,7));
console.log(sub(7,7));
console.log(mul(7,7));
console.log(div(7,7));


// Q2: create a variable multiply using a function type and implement it using an arrow function
type multi = (num1:number , num2:number) => number;

let multiply:multi = (x , y) => x * y;
console.log(multiply(7 , 7));



// Q3: create a function type that accept a string and return void. store it in a variable called printMessage;
type voidReturn = (str:string) => void;

let printMessage:voidReturn = (str) => {
    console.log(str);
}
printMessage("Hello");
console.log(printMessage("Hello"));  // undefined



// Q4: create a function add with two overloaded signatures: 
// first will accept two number, second will accept two string

function add(num1:number , num2:number) : number;
function add(str1:string , str2:string) : string;

function add(a:any , b:any):any {
    return a + b;
}

console.log(add(7 , 7));
console.log(add("kushagra " , "varshney"));



// Q5: create a overloaded function and print: first accept string , second accept number and print these value

function printData(a:number): number;
function printData(a:string): string;

function printData(a : any) : any {
    console.log(a);
}
printData(7);
printData("kushagra");



// Q6: create a overloaded function getLength: first will accept string, second will accept array, return length

function getLength(a:string): string;
function getLength(a:number[]): number;

function getLength(a : any) : any {
    return a.length;
}

console.log(getLength("kushagra"));
console.log(getLength([1,2,3,4,5]));


// _____________________________________________________________________________________________________________

// Q1: create an interface person with: name(string) , age(number), then create one object using it.
interface Person {
    name:string;
    age:number;
}

let p1:Person = {
    name: "kushagra",
    age: 22,
}
console.log(p1);
console.log(typeof p1);


// Q2: create a variable status that only allows: "active" or "inactive", try assigning the wrong value and observe the error
type Status = "active" | "inactive";

function currentStatus(status: Status) {
    console.log(status);
}
currentStatus("active");
currentStatus("inactive");
// currentStatus("overactive");



// Q3: create an interface Car with: brand , model, then create 2 Car objects
interface Car {
    brand:string;
    model:string;
}

let bmw:Car = {
    brand: "BMW",
    model: "BMW b6"
}
console.log(bmw);

let mercedes:Car = {
    brand:"Mercedes",
    model: "maybach",
}
console.log(mercedes);



// Q4: create an interface User: name , role -> only "admin" or "user", create one object
type Role = "admin" | "user";

interface User {
    username: string;
    role: Role;
}

let user1:User = {
    username: "kushagra",
    role: "admin"
}
console.log(user1);



// Q5: create an interface Button: text type -> "primary" or "secondary"
type TextType = "primary" | "secondary";

interface Button {
    text: TextType
}

let btn1:Button = {
    text: "primary"
}
console.log(btn1);



// Q6: create an interface Order: id , status -> "pending" or "completed"
type OrderStatus = "pending" | "completed";

interface Order {
    id:number,
    status:OrderStatus
}

let order1:Order = {
    id: 101,
    status: "pending"
}
console.log(order1);