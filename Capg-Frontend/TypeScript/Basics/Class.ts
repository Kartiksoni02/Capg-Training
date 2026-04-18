class Demo {
    userName: string = "abc";
    age: number = 40;
    constructor(username:string) {
        this.userName = username;
    }
}
let userData = new Demo("John");
console.log(userData);

console.log(userData.age);

//

