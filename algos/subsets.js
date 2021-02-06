function subsets(arr) {
    let result = [[]]
    let temp = []

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i]
        temp = [...result]
        for (let j = 0; j < result.length; j++) {
            let subset = result[j]
            subset = [...subset, number]
            result[j] = subset
        }

        result = [...result, ...temp]
    }
    console.log(result)
}

subsets([1, 2, 3])
