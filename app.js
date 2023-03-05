let number = 1

function printNumber(number) {
  if (number > 10) return

  console.log(number)
  number++
  printNumber(number)
}

printNumber(number)
