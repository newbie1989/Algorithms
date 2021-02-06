//Prime Factors of a number

const isprime = (n) => {
    if (n === 1) {
        return false
    }
    let i = 2

    while (i < n) {
        if (n % i == 0) {
            return false
        }
        i++
    }
    return true
}

const facs = (n) => {
    let i = 1
    let arr = []
    while (i <= n) {
        if (n % i === 0 && isprime(i)) {
            arr.push(i)
        }
        i++
    }

    alert(arr)
}

facs(30)
