// 1. check Prime
// Question: How would you verify a prime number?

// Answer: a prime number is only divisible by itself and 1.
// So, i will run a while loop and increase by 1. 
//(look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)

function isPrime(n){
    let divisor = 2

    while (n > divisor){
        if (n % divisor == 0) {
            return false 
        }
        else 
        divisor++
    }
    return true 
}

console.log('isPrime(137)',isPrime(137));
//true
console.log('isPrime(237)', isPrime(237));
// false

// 2. Prime Factors
// Question: How could you find all prime factors of a number?

// Answer: Run a while loop. start dividing by two and 
//if not divisible increase divider until u r done.

function primeFactors(n) {
    let factors = []
    let divisor = 2 

    while(n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor)
            n = n / divisor 
        }
        else {
            divisor++
        }
    }
    return factors 
}
console.log('primeFactors(69)' , primeFactors(69));
//[3, 23]

// 3. Fibonacci
// Question: How do get nth Fibonacci number?

// Answer: I create an array and start from iterate through.

// Fibonacci series is one of the most popular interview question for beginners
// so, you have to learn this one.

function fibonacci(n){
    let fibo = [0,1]

    if (n<=2) return 1

    for (let i = 2; i <=n; i++){
        fibo[i] = fibo[i-1]+fibo[1-2]
    }
    return fibo[n]
}
console.log('fibonacci(12)',fibonacci(12))
//144

//Recursive Answer

function fib(n) {
    if (n <= 1)
        return n;
    else
        return fib(n - 1) + fib(n - 2);
}
console.log('fib(12', fib(12))
//144

// 4. Greatest Common Divisor
// Question: How would you find the greatest common divisor of two numbers?

function GCD(a,b){
    let divisor = 2 
    let greatestDivisor = 1

    if (a < 2 || b < 2)
        return 1 

    while (a >= divisor && b >= divisor){
        if (a % divisor && b % divisor == 0){
            greatestDivisor = divisor
        }
        divisor++
    }
    return greatestDivisor
}

console.log('greatestCommonDivisor(14, 21)', greatestCommonDivisor(14, 21))
//7
console.log('greatestCommonDivisor(69, 169)', greatestCommonDivisor(69, 169))
//1

//recursive answer 
function greatestCommonDivisor(a, b) {
    if (b == 0)
        return a;
    else
        return greatestCommonDivisor(b, a % b);
}

// 5. remove Duplicate
// Question: How would you remove duplicate members from an array?

// Answer: will start a while looping and keep an object/ associated array. 
//If i find an element for the first time i will set its value as true (that will tell me element added once.). 
//if i find a element in the exists object, i will not insert it into the return array.

function removeDuplicates(arr){
    let exists = {}
    let outArr = []
    let el 

    for (let i = 0; i < arr.length; i++){
        el = arr[i]
        if (!exists[el]){
            outArr.push(el)
            exists[el] = true 
        }
    }
    return outArr
}

console.log('removeDuplicate([1,3,3,3,1,5,6,7,8,1])',
    removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]))
//[1, 3, 5, 6, 7, 8]

// 6. merge two sorted array
// Question: How would you merge two sorted array?

// Answer: I will keep a pointer for each array and (read the code. and be careful about this one.)

function mergeSortedArray(a, b) {
    var merged = [],
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;

    if (a.length == 0)
        return b;
    if (b.length == 0)
        return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
    to insert: aElm exists and bElm doesn't exists
    or both exists and aElm < bElm
    this is the critical part of the example            
    */
    while (aElm || bElm) {
        if ((aElm && !bElm) || aElm < bElm) {
            merged.push(aElm);
            aElm = a[i++];
        } else {
            merged.push(bElm);
            bElm = b[j++];
        }
    }
    return merged;
}


mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]); 
console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]))
// [1, 2, 2, 3, 5, 6, 9, 29]