const fizzBuzz = (num) => {

if(!num) return "0";
if (num == 1) return "1"
if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz"
if (num % 3 == 0) return "Fizz"
if (num % 5 == 0) return "Buzz"

return num.toString()
}

console.log(fizzBuzz())
console.log(fizzBuzz(1))
console.log(fizzBuzz(3))
console.log(fizzBuzz(4))
console.log(fizzBuzz(5))
console.log(fizzBuzz(6))
console.log(fizzBuzz(7))
console.log(fizzBuzz(8))

module.exports = fizzBuzz