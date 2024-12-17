const addition = require("./session")

describe("calculator tests", () => {
    describe("addition tests", () => {
        test("shall return 42", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 73 for 42 and 31", () => {
            expect(addition(41, 32)).toBe(73);
        })
    })
})