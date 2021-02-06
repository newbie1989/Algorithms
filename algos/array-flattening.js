const flat = (arr) => {
    return arr.reduce((arr, item) => {
        if (Array.isArray(item)) {
            return arr.concat(flat(item))
        } else {
            return arr.concat(item)
        }
    }, [])
}

const r = flat([1, [2, 3], [4, [5, 6, [7, 8, [9, 10]]]]])

console.log(r)
