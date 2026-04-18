
let str = "hello";
console.log(str);

let str2 = "'hello'";
console.log(str2);

let str3 = '"hello"';
console.log(str3);

// use of backticks `
let str4 = `hello,
Kartik
this side`;
console.log(str4);

let a=10;
let b=20;
console.log(`The addition of two numbers is ${a+b}`);

let backticks = function(name, age, city){
    console.log(`My name is ${name}, and I am ${age} years old, and I live in ${city}.`)
}
backticks("Kartik", 22, "Hawaii")

// traditional for loop
let userName = "abc@123"
for(let  i=0; i<userName.length; i++){
    console.log(userName[i]);
    console.log(userName.at(i))
    console.log(userName.charAt(i))

}

// for space in terminal output
console.log()

// for of loop
for(let ch of userName){
    console.log(ch);
}

// WAP to reverse the string
result = "";
for(let i=userName.length-1; i >= 0; i--){
    result += userName[i];
}
console.log(result)



console.log()
// JS methods :

let string = "hello";
console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string.indexOf("o"));
console.log(string.indexOf("O"));
console.log(string.indexOf("K"));

console.log(string.charAt(2));  // l
console.log(string.charAt(-4)); // "" (empty string ❗)
console.log(string.charAt(6));  // "" (out of range ❗)

console.log()

console.log(string.at(2));   // l
console.log(string.at(-2));  // l (negative indexing ✅)
console.log(string.at(-6));  // undefined ❗
console.log(string.at(6));   // undefined ❗

console.log()

console.log(string.length); // 5

console.log()
let username = "kartik@123"
let userdata = username.slice(0,3);
console.log(userdata)

// no swap , if start > end , result will be empty string
console.log(string.slice(0,3));   // hel
console.log(string.slice(-3));    // llo (negative index ✅)
console.log(string.slice(3,1));   // "" (start > end ❗)
console.log(string.slice(10));    // "" (out of range ❗)

console.log()
//console.log(username.slice(-2,7)); // ""
console.log(username.slice(-7,7));  // hik

console.log()
// start > end , then swap
console.log(string.substring(0,3));  // hel
console.log(string.substring(3,1));  // el (auto swap ❗)
console.log(string.substring(-2,2)); // he (negative treated as 0 ❗)
console.log(string.substring(6,3))

console.log()

console.log(string.concat(" world")); // hello world

console.log()

console.log(string.split(""));   // ["h","e","l","l","o"]
console.log(string.split("l"));  // ["he","","o"]
console.log(string.split(" "));   // [ 'hello' ]
console.log(string.split(","));   // [ 'hello' ]
console.log(string.split("z"));  // ["hello"] ❗

console.log()

let s = "  hello  ";
let k = "  K  S   ";
console.log(s.trim());       // "hello"
console.log(s.trimStart());  // "hello  "
console.log(s.trimEnd());    // "  hello"
console.log(k.trim())       // K  S  ( no btw space removing here)

console.log()

console.log(string.replace('l',"x")); // hexlo (only first replace)
console.log(string.replace("z","x")); // hello (no change ❗)
console.log(string.replace("l"));  // undefined
console.log(string.replace("z"));  // hello

console.log()

console.log(string.replaceAll("l","x")); // hexxos

console.log()

console.log(string.includes("he")); // true
console.log(string.includes("HE")); // false
console.log(string.includes(""));   // true ❗

console.log()

console.log(string.startsWith("he")); // true
console.log(string.endsWith("lo"));   // true
console.log(string.startsWith(""));   // true ❗

