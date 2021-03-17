const items = [{
    val: 60,
    weight: 10
  },
  {
    val: 40,
    weight: 5
  },
  {
    val: 70,
    weight: 14
  },
  {
    val: 80,
    weight: 20
  }
]

items.map(item => {
  item.cpk = item.val / item.weight // cost per kilo
})


let maxW = 28
let result = []

//console.log(items)

items.forEach(item => {
  if (maxW >= item.weight) {
    result.push(item)
    maxW -= item.weight
  } else {
    if (maxW > 0) {
      item.val = maxW * (item.cpk)
      item.weight = maxW
      result.push(item)
      maxW = 0
    }

  }
})

console.log(result)
