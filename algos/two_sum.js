const twoSum = (arr, k) => {
    /* This is brute force with quardatic timme
     let result = []
    let i = 0
    for (; i < arr.length -1; i++) {
      let j = i + 1;
      let num1 = arr[i]
      for (; j < arr.length; j++) {
        let num2 = arr[j]
        const sum = num2 + num1
        if(sum === k){
        result.push([i,j, '|'])
        }
      }
    }
  alert(result) */

    /***
     * This is linear time solution, well.... not really as it uses indexof()
     */
    let counterPart = []
    let result = []
    let i = 0
    for (; i < arr.length; i++) {
        let num = arr[i]
        if (counterPart.indexOf(num) !== -1) {
            result.push([num, k - num, '|'])
        } else {
            counterPart.push(k - num)
        }
    }
    return result
    //alert(result)
}

const r = twoSum([4, 1, 2, 3, 1, 5, 0, 9, 8], 9)

console.log(r)
/***
 * Actual Linear Time!!
 *
 */
const twosum = (arr, k) => {
    const result = []
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        let cp = k - val

        if (map[val] !== undefined) {
            result.push([val, cp])
        } else {
            map[cp] = i
        }
    }

    console.log(result)

    console.log(map)
}

twosum([-3, -1, 4, 2, 3, 2, 1, 0, 5], 3)
