const tape = require('tape')
const tapSpec = require('tap-spec')
const sorted = require('../index')

const array = [3, 45, 23, 78, 12]
const array2 = [3, 5, 23, 78, 112]
const compare = (a, b) => b - a

tape.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

tape('returns array is not sorted', t => {
  t.plan(1)

  const actual = sorted(array)
  t.equal(actual, false)
})

tape('returns array is sorted', t => {
  t.plan(1)
  const actual = sorted(array2)

  t.equal(actual, true)
})

tape('returns array is not sorted width compare function', t => {
  t.plan(1)
  const actual = sorted(array2, compare)
  t.equal(actual, false)
})

tape('throw on non-array inputs', t => {
  t.plan(1)
  t.throws(() => {
    sorted('jasonx')
  })
})