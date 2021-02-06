// Sieve of Erratosthenes

const primes = (k) => {
    let booleans = [null, null]
    for (let i = 1; i <= k; i++) {
        booleans.push(true)
    }

    console.log(booleans)

    for (let j = 2; j <= k; j++) {
        for (let i = j + 1; i <= booleans.length - 1; i++) {
            if (i % j === 0) {
                booleans[i] = false
            }
        }
    }

    console.log(booleans)
    let result = []
    booleans.forEach((item, index) => {
        if (item) {
            result.push(index)
        }
    })

    alert(result)
}

primes(10)
