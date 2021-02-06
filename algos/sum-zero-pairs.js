/**
This patters includes initializing two pointers using while loop
O(n) complexity
*/

function sum_zero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [left, right]
        }

        if (sum > 0) {
            right--
        } else {
            left++
        }
    }
    return -1
}

let r = sum_zero([-4, -2, -1, 0, 1, 14])

alert(r)
