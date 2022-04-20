// function factorial(n) {
//     let product = n;
//     if (n === 1 || n === 0) {
//         return 1;
//     }
//     while (n > 1) {
//         product *= n - 1;
//         n--;
//     }
//     return product;
// }

// console.log(factorial(5));

//I got a bit of help on Google with this code. It didn't come super natural to me like other code and thats fine
//I kept trying to do(without first declaring a product variable)
//product = product * (n * (n - 1)), and this kept giving me a value of 2 for any arguments passed thru
//Realized I have to declare a variable and give it an initial value of n
//lets run a value of 4 through this function on a piece of paper

//recursion 

// function factorial(n) {
//     let product = n;
//     if (n === 1 || n === 0) {
//         return 1;
//     } else {
//         product *= factorial(n - 1);
//     }
//     return product;
// }

// console.log(factorial(5));

//this is kind of using recursion but we could make it even simpler than this!

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
