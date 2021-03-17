/***
 * Pivot : Can be any value ; if it's starting element then choose partI as last element index
 * and loop from end towards pivot checking all elements greater than pivot and then swap.
 *
 * If pivot is last element, then choose partI as starting element index and then loop
 * towards pivot checking for elements smaller than pivot before swapping.
 */

const partition = (arr, li, ri) => {
    let partI = li
    let pivot = arr[ri]

    let i = li
    for (; i < ri; i++) {
        if (arr[i] < pivot) {
            ;[arr[i], arr[partI]] = [arr[partI], arr[i]]
            partI++
        }
    }

    ;[arr[partI], arr[ri]] = [arr[ri], arr[partI]]
    return partI
}

const quicksort = (arr, li, ri) => {
    if (li < ri) {
        let partI = partition(arr, li, ri)

        quicksort(arr, li, partI - 1)
        quicksort(arr, partI + 1, ri)
    }
    return arr
}

let values = [0, -1, 1, -2]

const r = quicksort(values, 0, values.length - 1)
alert(r)
