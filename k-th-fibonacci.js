// Find k-th Fibonacci number using recurssion. Time complexity is exponential (for recursion)
// Use dynamic prog. for linear complexity.

const fibo = (k) => {
  if (k === 1) {
    return 0
  }
  if (k === 2) {
    return 1
  }

  return fibo(k - 1) + fibo(k - 2)
}

alert(fibo(7))

/***
 * Dynamic programming Solution
 * this avoids re-calulation of values
 */

const fibo = (k) => {
  let result = [1, 1]
  for (let i = 2; i < k; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result[k - 1]
}

const r = fibo(3)

alert(r)
