let promise = new Promise((resolve,reject) => {
    const name = "Oskar";
    if(2 >5) {
    resolve(`Hello ${name}`);
    }
    else {
    reject("Nothing happens");
    }
});
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message + " because 2 is smaller than 5");
})