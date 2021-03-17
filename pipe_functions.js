const add = (k) => k + 1
const mul = (k) => k * 2

const pipe = (...ops) => ops.reduce((prev, next) => (k) => next(prev(k)))

const final = pipe(add, mul)

const r = final(5)

alert(r)
