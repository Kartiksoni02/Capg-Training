// console.log("hello typescript")
// console.log("this is my second atatement ");
// let a = "hello";
// a=30;
// console.log(a);
// type inference
// let username = "abc";
// let age =30;
// let skill = null;
// let city = undefined;
// let userData = Symbol("Unique");
// let Sal = 1000000n;
// let Isqualified = false;
// console.log(username);
// console.log(age);
// console.log(skill);
// console.log(city);
// console.log(userData);
// console.log(Sal);
// console.log(Isqualified);
// type annotation
// let username2:string = "abc";
// let age2:number=30;
// let skill2:null=null;
// let city2:undefined=undefined;
// let userData2:symbol=Symbol("Unique");
// let Sal2:bigint= 1000000n;
// let Isqualified2:boolean = false;
// console.log(username2);
// console.log(age2);
// console.log(skill2);
// console.log(city2);
// console.log(userData2);
// console.log(Sal2);
// console.log(Isqualified2);
// function demo(a:number , b:number){
//     console.log("Demo...");
//     console.log(a + b);
// }
// demo(10 , 20);
// create a function with three parameter and all the parameter should parameter should be of the string type
// and the last parameter should be optional
// optional is made by adding ? after 
// function stringOptional(a:string, b:string, c?:string){
//     console.log("a + b + c");
// }
// stringOptional("a" , "b" , "c");
// create a function which returns only number and which is having 3 argument last one is optional and 2nd should have one default value
// function sum(a:number, b:number = 10, c:number):number{
//     if(c != undefined){
//         return a + b + c;
//     }
//     else{
//         return a + b;
//     }
// }
// console.log(12, 15);
// create a function which returns only boolean value which is having the 3 parameters.
// function isTrue(cond1:boolean , cond2:boolean , cond3:boolean):boolean {
//     return cond1 && cond2 && cond3;
// }
// console.log(isTrue(true , false , true));
// function overloading in ts
// function Demo(a:number, b:number):number;
// function Demo(a:string, b:string):string;
// function Demo(a:any, b:any):any{
//     return a+b;
// }
// Demo(10, 20);
// Demo("Kartik", "Soni");
// object
// let Demo : {
//     name: String,
//     age: number,
//     city?: String,
//     isMarreied: boolean;
// } = {
//     name: "abc",
//     age: 24,
//     city: "xyz",
//     isMarreied: true
// };
// console.log(Demo);
// Demo.gender = "male"   // with this structure, we can't add a new property in existing obj.
// let Demo2 : {
//     name: String,
//     age: number,
//     city: String,
//     isMarreied?: boolean;
// };
// Demo2 = {
//     name:"kartik",
//     age:22,
//     city:"LA"
// };
// console.log(Demo2);
// object is nothing but a type, mainly used with non-primituve data type
// let Person:object;
// Person = {
//     userName : "Kartik"
// }
// console.log(Person);
// Special DataTypes
// 1. any : will give error in run time , not in compile time
// let a:any;
// a="abc";
// a=46;
// a=true;
// a={};
// a=40;
// console.log(a.toUpperCase()); // last a= 40 value will be assigned and will thorw error.
// 2. unknown : error in compile time
// let b:unknown;
// b= "abc";
// b= true;
// b= {};
// b= "abc";
// b= 46;
// console.log(b.toUpperCase());
// narrowing
// if(typeof b == "string"){
//     console.log(b.toUpperCase());
// } else{
//     console.log("not a validd type");
// }
// 3. void 
// create a function with 3 parameters , console all the parameters and make sure function should not return anything.
// function noReturn(num1:number, str1:string, bool1:boolean):void{
//     console.log(num1);
//     console.log(str1);
//     console.log(bool1);
//     // return "something";
// // when we use void as return type of function, then we cant return anything from the function.
//     return undefined;
//     // with void, we can only return undefined.
// }
// console.log(noReturn(1, "kartik", true));
// 4. never
function neverType(num1, str1, bool1) {
    console.log(num1);
    console.log(str1);
    console.log(bool1);
    // throw new Error("404: data not found...");
}
neverType(7, "Kartik", true);
export {};
// create function that does not return anything apart from undefined.
// create a function that never execute.
// create object with 4 properties and 1 property has nested object.
