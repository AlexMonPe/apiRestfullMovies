//const {sum} = require('./sum')
const fizzBuzz = require('./fizzBuzz')

// test('basic', ()=> {
//     expect(sum(0,0)).toBe(0)
// })

// test('basic again', ()=> {
//     expect(sum(1,2)).toBe(3)
// })
beforeAll()

test('arg 1', ()=>{
    expect(fizzBuzz(1)).toBe("1")
})
test('arg 3', ()=>{
    expect(fizzBuzz(3)).toBe("Fizz")
})
test('arg 4', ()=>{
    expect(fizzBuzz(4)).toBe("4")
})
test('arg 5', ()=>{
    expect(fizzBuzz(5)).toBe("Buzz")
})
test('arg 15', ()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})