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

    if (A < 2 || B < 2)
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