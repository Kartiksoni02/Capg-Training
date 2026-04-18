

day="mon"
switch(day){
    case "mon":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday");
        break;
    case "wed":
        console.log("Wednesday");
        break;
    case "thu":
        console.log("Thursday");
        break;
    case "fri":
        console.log("Friday");
        break;
    case "sat":
        console.log("Saturday");
        break;
    case "sun":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



let marks = 84;

switch (true) {
    case (marks < 35):
        console.log("Fail");
        break;

    case (marks >= 35 && marks < 70):
        console.log("Pass");
        break;

    case (marks >= 70):
        console.log("Distinction");
        break;

    case (marks >= 80):
        console.log("First Class");
        break;

    case (marks >= 90):
        console.log("Topper");
        break;

    default:
        console.log("Invalid marks");
}

// Rest parameters
function Demo(a, b, c, ...d) {
    console.log(a, b, c, d); // Individual values
    console.log(d);       // Array of all arguments passed after 'd'
}
Demo(1, 2, 3, 4, 5, 6, 7, 8);

function Demo(a,b, ...c){
    console.log(a,b,c);
}
Demo(1,2,3,4,5,6);

// spread in arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1];  
arr2[3] = 10; 

console.log(arr1);
console.log(arr2);

/// spread in function call
function sum(a, b, c) {
    return a + b + c;
}
let nums = [1, 2, 3];

console.log(sum(...nums));