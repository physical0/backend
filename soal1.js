function generatePrimesUpTo(n) {
    let primes = new Array(n + 1).fill(true);
  
    primes[0] = primes[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    let primeNumbers = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

const primeNumbersUpTo1000 = generatePrimesUpTo(1000);
console.log("Prime numbers up to 1000:", primeNumbersUpTo1000);
