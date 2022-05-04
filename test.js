const { multiply, add, divide, subtract, square } = require("./index")

test("adds sum of two number", () => {
    const sum = add(5, 8)
    expect(sum).toEqual(13)
})

test("multiplies two numbers", () => {
    const value = multiply(2, 5)
    expect(value).toEqual(10)
})

test("divides two number", () => {
    const quotient = divide(20, 10)
    expect(quotient).toEqual(2)
})

test("subtracts two numbers", () => { 
    const subtraction = subtract(10, 2)
    expect(subtraction).toEqual(8)
})

test("squares a number", () => { 
    const root = square(10,10)
    expect(root).toEqual(100)
})
