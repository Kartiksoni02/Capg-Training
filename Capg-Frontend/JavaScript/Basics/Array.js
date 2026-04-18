
let arr = [1,45,6,7,78,845,7,8]


arr.unshift(20,30);
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2,3,7,5,6)
console.log(arr);

console.log(arr.reverse());

let arr2 = ["k","a","r","t","i","k"];
let newarr = arr2.join(",");
console.log(newarr);

let data = [20,40,50,60];
console.log(data.toString());

// convert string into array , reverse it , convert back to string
let initial = "Hey you"
let reverse = "";
let reverse1 = "";
for (let i=initial.length-1; i>=0 ; i--){
    reverse += initial[i];
    reverse1 += initial.at(i);
}
console.log(reverse);
console.log(reverse1);

// find max element from array

let maxNum = (array) =>{
    let maxEle = array[0];
    for(let num of array){
        if(maxEle < num){
            maxEle = num;
        }
    }
    return maxEle;
}

let arr1 = [4, -5, 3256, 15, 10, 1200];
console.log("Max Element is : " + maxNum(arr1));


// 2nd way
let maxN = (array) =>{
    let maxEle = Number.MIN_SAFE_INTEGER;
    for(let num of array){
        if(maxEle < num){
            maxEle = num;
        }
    }
    return maxEle;
}

let ar1 = [4, -5, 3256, 15, 10, 1200];
console.log("Max Element is : " + maxNum(ar1));


// Find even odd from array

let oddEven = [0, 10, 12 , 15, 355, 400];
let evn = [] , odd = []
for(let i = 0; i < oddEven.length; i++){
    if(oddEven[i] % 2 == 0){
        evn.push(oddEven[i]);
    }
    else{
        odd.push(oddEven[i]);
    }
}
console.log(evn);
console.log(odd)


let Data = ["k","f","d","s","e","A"];
Data.forEach((ele, index, array) =>{
    console.log(ele);
    console.log(index);
    console.log(array)
});
console.log()
console.log(Data)

// let data = [20, 40, 50, 60];
let result = data.map((ele) => {
    return ele * 2;
});
console.log(result);    // Output: [40, 80, 100, 120]

// let data = [20, 40, 50, 60];
let result1 = data.map((ele) => {
    if (ele > 40) {
        return ele;
    } else {
        return 0;
    }
});
console.log(result1);    // Output: [0, 0, 50, 60]

// let data = [20, 40, 50, 60];
let res = data.filter((ele) => {
    return ele > 40;
});
console.log(res);    // Output: [50, 60]

// combined map + filter
// let data = [20, 40, 50, 60];
// Step 1: Filter values > 40
let filtered = data.filter(ele => ele > 40);
// Step 2: Multiply by 2
let resu = filtered.map(ele => ele * 2);
console.log(resu);    // Output: [100, 120]

// let data = [20, 40, 50, 60];
let SumOfArr = data.reduce((acc, ele) =>{
    return acc + ele;
});
console.log(SumOfArr);

// 2nd
let SumOfArray = data.reduce((acc, ele) =>{
    return acc + ele;
}, 30);
console.log(SumOfArray);


