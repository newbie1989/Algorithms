/***
 * This checks if a2 array has square of all elements in a1 array with same frequency
 */
const same = (a1, a2) => {
    if (a1.length !== a2.length) {
        return false
    }
    let o2 = {}
    let o1 = {}
    for (let val of a1) {
        val = val * val
        o1[val] = o1[val] > 0 ? ++o1[val] : 1
    }
    for (let val of a2) {
        o2[val] = o2[val] > 0 ? ++o2[val] : 1
    }
    for (let i in o1) {
        if (o1[i] !== o2[i]) {
            return false
        }
    }
    return true
}

let r = same([2, 2], [4, 4])
alert(r)
