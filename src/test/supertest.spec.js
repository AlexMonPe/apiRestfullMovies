const fizzBuzz = require("./fizzBuzz");
const supertest = require('supertext')
const server = require('../../index')

const app = supertest(server)

// beforeAll(() => console.log("beforeAll tests!!"));
// afterAll(() => console.log("afterall tests!"));
// afterEach(() => console.log("after each one test"));
// beforeEach(() => console.log("before each one test"));

//test.only or .skip for test only one test or skip it.
afterAll( async ()=>{
server.close()
})

describe("test to fetch api", () => {
  test.only("health check is ok", async () => {
    const res = await app.get('/echo');
    expect(res).toBe('test get works!!')
  });
});

test("arg 1", () => {
  expect(fizzBuzz(1)).toBe("1");
});
test("arg 3", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});
test("arg 4", () => {
  expect(fizzBuzz(4)).toBe("4");
});
test("arg 5", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});
test("arg 15", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});
