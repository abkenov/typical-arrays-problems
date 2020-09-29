
exports.min = function min (array) {
  if (array === undefined || !array.length)
    return 0

  let min = Infinity

  for (let num of array) {
    if (num < min) {
      min = num
    }
  }

  return min
}

exports.max = function max (array) {
  if (array === undefined || !array.length)
    return 0

  let max = (-1) * Infinity

  for (let num of array) {
    if (num > max) {
      max = num
    }
  }

  return max
}

exports.avg = function avg (array) {
  if (array === undefined || !array.length)
    return 0

  let sum = 0

  for (let num of array) {
    sum += num
  }

  return sum / array.length
}
