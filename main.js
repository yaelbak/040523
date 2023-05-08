
//1. 
localStorage.setItem("userName", "john")
sessionStorage.setItem("userName", "john")

let userNameLocalStorage = localStorage.getItem("userName")
console.log("User name from local storage: " + userNameLocalStorage)

let userNameSessionStorage = sessionStorage.getItem("userName")

console.log("User name from session storage: " + userNameSessionStorage)

//2.

 function logMassage(count) {
    console.log('this massage has been logged ' +count +' times.')
}

let count = 1
const interval = setInterval(() => {
    logMassage(count);
    count++;
    if (count > 3) {
        clearInterval(interval)
    }
}, 3000)

//3.
function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === "number") {
          resolve(number**2)  
        } else {
            reject("Eror: Input is not a valid number")
        }
    })
}

console.log(calculateSquare(10))
