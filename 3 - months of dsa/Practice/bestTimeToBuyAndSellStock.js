function bestTimeToBuyAndSellStock_II(arr) {
  let profit = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > profit) {
        profit = arr[j] - arr[i];
      }
    }
  }

  return profit;
}

function bestTimeToBuyAndSellStock(arr) {
  let profit = 0;
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - min > profit) {
      profit = arr[i] - min;
    }

    if (min > arr[i]) min = arr[i];
  }

  return profit;
}
let prices = [7, 1, 5, 3, 6, 4];

console.log(bestTimeToBuyAndSellStock(prices));
