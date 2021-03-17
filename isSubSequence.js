function sub(s1, s2) {
    let i = 0
    let j = 0

    while (j <= s2.length) {
        let a1 = s1[i]
        let a2 = s2[j]

        if (a1 == a2) {
            i++
        }
        j++
    }
    if (i > s1.length && j > s2.length) {
        return true
    }
    return false
}

let r = sub('axy', 'adxry')

alert(r)
