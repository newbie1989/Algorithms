let num = 123
let result = 0
while (num >= 10) {
  let temp = num % 10

  result += temp
  num = num - temp
  num = num / 10
}
result += num
alert(result)
