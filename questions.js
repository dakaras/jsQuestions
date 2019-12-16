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

console.log(isPrime(137));
//true
console.log(isPrime(237));
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
console.log(primeFactors(69)); 
//[3, 23]