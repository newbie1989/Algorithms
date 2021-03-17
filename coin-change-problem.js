// Coin change 
const change = (coins, k) => {

  let amount = []
  for (let i = 0; i <= k; i++) {
    amount[i] = 0
  }

  amount[0] = 1

  for (let i = 0; i < coins.length; i++) {
    let coinval = coins[i]

    for (let j = 1; j <= k; j++) {
      console.log('amount array', amount)
      let currentamount = amount[j]
      if (coinval <= j) {
        amount[j] += amount[j - coinval]
      }

    }

  }
  console.log(amount)

}

change([1, 2, 3], 4)

