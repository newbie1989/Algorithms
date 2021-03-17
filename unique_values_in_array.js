const unique = (arr) => {
    if (arr.length === 0) {
        return 0
    }

    let p1 = 0
    let p2 = 1

    for (; p2 < arr.length; p2++) {
        if (arr[p2] !== arr[p1]) {
            p1++
            arr[p1] = arr[p2]
        }
    }

    return p1 + 1
}

let r = unique([-2])

alert(r)
