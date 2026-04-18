let promise = new Promise((resolve, reject) => {
    let isMarried = false;
    if (isMarried) {
        resolve("Kartik is single");
    }
    else {
        reject("kartik is mingle");
    }
});
// promise.then(() => {
//     console.log("promise is resolved");
// }).catch(() => {
//     console.log("promise is rejected");
// }).finally(() => {
//     console.log("promise is settled");
// })
promise.then((msg) => {
    console.log("The marital status is : ", msg);
}).catch((msg) => {
    console.log("The marital status is : ", msg);
}).finally((msg) => {
    console.log("promise is settled");
})
// console.log(promise)


// fetch method


// let responseObj = fetch("https://jsonplaceholder.typicode.com/posts");   // this fetch will always return the promise obj, and to handle this obj we need to use the mths of the promise like .then() or .catch()
// console.log(responseObj);

// responseObj.then((response) => response.json()).then((data) => console.log(data));
// .then((response) => response.json())
//  .then((res) => console.log(res));


// another way to do asynchronous task
// async function fetchData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(response);

//     let data = await response.json();
//     console.log(data);

//     data.forEach((ele) => {
//         document.writeln(ele.title);
//     })
// }

// fetchData();


// BOM : Browser Object Model
function fun() {
    let name = "ks"
}
console.log(fun());

