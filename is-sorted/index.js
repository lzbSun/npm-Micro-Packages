const defaultCompare = (a, b) => a - b

const isSorted = (array, compare = defaultCompare) => {
  if (!Array.isArray(array)) throw new TypeError(`Expected Array, got ${typeof array}`)

  for (let i = 1, len = array.length ; i < len; ++i) {
    if (compare(array[i - 1], array[i]) > 0 ) return false
  }
  return true
}

module.exports = isSorted