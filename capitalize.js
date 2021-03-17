/***
 *  toUpperCase() & replace() -> returns the new string and does not modify original string
 *  join() -> returns new array
 */

let str = 'my name is mandeep'

str = str.split(' ')

let i = 0
let len = str.length
for (; i < len; i++) {
    let k = str[i][0].toUpperCase()
    str[i] = str[i].replace(str[i][0], k)
}

let newstr = str.join(' ')

alert(newstr)
