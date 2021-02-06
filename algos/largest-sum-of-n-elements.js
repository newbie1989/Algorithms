/***
 * BRUTE FORCE
 * O(n2)
 */

const maxsum1 = (arr, k) => {
    let sum = -Infinity

    for (let i = 0; i <= arr.length - 1 - k; i++) {
        let temp = 0
        for (let j = 1; j <= k; j++) {
            temp += arr[i + j]
        }

        if (temp > sum) {
            sum = temp
        }
    }

    return sum
}

let r = maxsum1([2, 1, 2, 3, 1, 2, 3, 5], 3)

console.log(r)

/***
 * SLIDING WINDOW PATTERN
 * O(n)
 */

const maxsum2 = (arr, k) => {
    let sum = 0
    let i = 0
    for (; i < k; i++) {
        sum += arr[i]
    }

    let temp = sum
    for (let j = k; j < arr.length; j++) {
        temp = temp - arr[j - k] + arr[j]
        i++
        console.log('temp is ', temp)
        if (temp > sum) {
            sum = temp
        }
    }
    console.log(sum)
}

let r = maxsum2([1, 2, 3, 0, 1, 10, 10, 30], 2)
