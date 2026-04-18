// Array

// let arr = [40, true, "hello"];
// let arr2: number[] = [30, 50, 60, 60];
// let arr3: string[] = ["abc","xyx"];
// let arr4:(number|boolean)[]=[40,50,60,70,70,true,60,false]
// let arr5 : (number | string) [] = [1,5,3,"Ho", "Jingle"]
// arr5.push("nestle")
// console.log(arr5);

// const newArr:readonly number[] = [1, 2, 3];

// let arrr3: readonly number[]=[1,2,3,4]
// // arrr3.push(5)


// Array of the object
// let arrayData:{name:string}[] = [
//     {name:"abc"},
//     {name: "xyz"},
//     {name: "pqr"}
// ]

//tuple will resyrict the length of an array
// let arr6:[string, number, boolean, string] =["abc", 40, true,"gym"] 
// arr4.push(78)
// console.log(arr4);


// type alias, here num and str are alias

// type num = number;
// let age:num = 21;
// console.log(age);

// type str = string;
// let naam:str = "kartik";
// console.log(naam);


// Primitive : Define a type alias Username that represents a simple string.
// type Username = string;

// Object : Create a type Car with two peoperties : brand (string) and year (number).
// type Car = {
//   brand: string;
//   year: number;
// };

// Optional Property : Define a Profile type where bio is an optional string and id is a number.
// type Profile = {
//   id: number;
//   bio?: string;
// };

// Function: Create a type alias MathOp for a function that take two numbers and returns a number.
// type MathOp = (a: number, b: number) => number;

// Array: Define a type alias PriceList that represents an array of numbers.
// type PriceList = number[];



// Interface

interface User{
    readonly userName: string;
    age: number;
    skills: string[];
    details?: () => {};
}

let user: User



// splitting of the interface

interface Clg {
    camp: string;
}

interface Clg {
    fees?: number;
}

interface Clg {
    stream?: string;
}

let LPU: Clg = {
    camp: "Punjab",
};
console.log(LPU);

// inheritance in interface

interface Machine {
    price ?: string;
    warranty ?: number;
}

interface Projector extends Machine {
    brand ?: string;
    resolution : string;
}

let abc: Projector = {
    resolution: "abc",
};
