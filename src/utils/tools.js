export const sortByPrice = order => {
  return function innerSort(a, b) {
    const item1 = a.offer.displayPrice.amount
    const item2 = b.offer.displayPrice.amount

    let comparison = 0
    if (item1 > item2) {
      comparison = 1
    } else if (item1 < item2) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}
