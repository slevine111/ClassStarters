const sales = [
  {
    amount: 8,
    productId: 3
  },
  {
    amount: 8,
    productId: 3
  },
  {
    amount: 8,
    productId: 4
  },
  {
    amount: 17,
    productId: 5
  },
  {
    amount: 10,
    productId: 4
  }
]

let productWhichMadeMostMoney = recordOfSales => {
  let amountOfSalesById = []
  let indexOfProductId
  recordOfSales.forEach(sale => {
    indexOfProductId = amountOfSalesById.findIndex(
      element => element.id === sale.productId
    )
    if (indexOfProductId === -1) {
      amountOfSalesById.push({ id: sale.productId, total: sale.amount })
    } else {
      amountOfSalesById[indexOfProductId].total += sale.amount
    }
  })

  let maxAmount = Math.max(
    ...amountOfSalesById.map(productRecord => productRecord.total)
  )
  return amountOfSalesById.find(
    productRecord => productRecord.total === maxAmount
  )
}

console.log(productWhichMadeMostMoney(sales))
