// Q: create a function which return the only string and having the 3 parameter & use default parameter as well as optional chaining.

function getMessage(name: string,
    age: number = 18,   // default parameter
    city?: string       // optional parameter
): string {

    // optional chaining used
    return `Name: ${name}, Age: ${age}, City: ${city?.toUpperCase()}`;
}
// Function calls
console.log(getMessage("Kartik"));
console.log(getMessage("Kartik", 22));
console.log(getMessage("Kartik", 22, "Thrissur"));


// Q: create a function which can overload the multiple function

// Function Overloads (multiple signatures)
function display(value: string): string;
function display(value: number): string;
function display(value: boolean): string;

// Single Implementation
function display(value: any): string {
    if (typeof value === "string") {
        return "String value: " + value;
    } else if (typeof value === "number") {
        return "Number value: " + value;
    } else if (typeof value === "boolean") {
        return "Boolean value: " + value;
    } else {
        return "Unknown type";
    }
}
// Function Calls
console.log(display("Hello"));
console.log(display(100));
console.log(display(true));
