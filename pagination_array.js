let arr = [1, 2, 3, 4, 5]
let k = 2 // pagenum

let len = arr.length
let perpage = 3

let totalpages = Math.ceil(len / perpage)
//console.log(totalpages)
let end = k * perpage
let start = end - perpage
console.log('start is', start)
let elms = arr.slice(start, end)

console.log(elms)
