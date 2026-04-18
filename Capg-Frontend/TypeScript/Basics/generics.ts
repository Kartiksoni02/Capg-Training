function Demo(a:string): string {
    return a;
}
console.log(Demo("hello"));

// generic with function
function user<T>(a:T): T{
    return a;
}

// let userData = <string>user("hello");       // both same
let userData = user<string>("hello");

// let userData1 = <number>user(23);
let userData1 = user<number>(23);

// let userData2 = <boolean>user(true);
let userData2 = user<boolean>(true);

// let userData3 = <null>user(null);
let userData3 = user<null>(null);


console.log(userData);
console.log(userData1);
console.log(userData2);
console.log(userData3);

// multiple generics type
function Person<T, L>(name: T, age: L): [T, L] {
    return [name, age];
}
let p1 = Person<string, number>("hello", 33);
console.log(p1);
p1.forEach((ele) => {
    console.log(ele);
})

// generics with interface
interface User<T> {
    userName:T;
    age: number;
    gender : string
}
console.log(User)

let user1 : User<string> ={
    userName: "ks",
    age: 22,
    gender: "male".
}
console.log(user1)

let user2 : User<number> = {
    userName: 101,
    age: 22,
    gender: "male",
}
console.log(user2);

// create the multiple type with the help of generics in interface and pass t type to the property ,some property 
// must be optional and property should be constant, we should not modify these property.

// Generic Interface with multiple types
interface ApiResponse<T, U> {
  readonly id: number;          // constant property (cannot be modified)
  data: T;                     // generic type T
  extraData?: U;               // optional generic type U
  readonly createdAt: Date;    // constant property
}

// Example 1: Using string and number
const response1: ApiResponse<string, number> = {
  id: 1,
  data: "Success",
  extraData: 100,
  createdAt: new Date()
};

// Example 2: Using object and boolean
const response2: ApiResponse<{ name: string }, boolean> = {
  id: 2,
  data: { name: "Kartik" },
  createdAt: new Date()
};

//  This will give error (readonly property)
// response1.id = 10;   // Error: Cannot assign to 'id' because it is a read-only property



// generic with class

class Laptop<T> {
    model: T;
    constructor(model: T) {
        this.model = model;
    }
}

let lapModel = new Laptop<string>("xyz");
console.log(lapModel);



