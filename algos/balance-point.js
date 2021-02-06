// balance Point of array. This is un-optimized way.

const balance = (arr) => {
    let len = arr.length
    let rsum = 0
    let j = len - 1

    for (; j >= 2; j--) {
        let i = 0
        let lsum = 0
        rsum += arr[j]
        for (; i < j - 1; ++i) {
            lsum += arr[i]
        }
        if (lsum === rsum) {
            return `balance index is ->${j - 1}`
        }
    }
    return -1
}
const r = balance([2, 3, 3, -1])
alert(r)

/***
 * Optimised with linear complexity
 */

// balance point - optimized

const balance = (arr) => {
    let len = arr.length
    let lsum = 0
    let sum = 0
    let i = 0
    let j = 0
    for (; i < len; i++) {
        sum += arr[i]
    }

    for (; j < len; j++) {
        sum -= arr[j]
        if (lsum === sum) {
            return j
        }

        lsum += arr[j]
    }
    return -1
}

const r = balance([11, 1, 1, 1, 1, 14])
alert(r)
