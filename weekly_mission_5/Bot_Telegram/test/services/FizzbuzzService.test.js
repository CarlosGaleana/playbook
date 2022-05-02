const Reader = require('./../../lib/utils/Reader')
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit Test for FizzbuzzService class", () => {

    test('Use of applyValidationInExplorer method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorer1 = {name: "Explorer1", score: 1}
        expect(FizzbuzzService.applyValidationInExplorer(explorer1).trick).toBe(1)
    });
    test('Use of applyValidationInNumber method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(FizzbuzzService.applyValidationInNumber(1)).toBe(1)
        expect(FizzbuzzService.applyValidationInNumber(3)).toBe("FIZZ")
        expect(FizzbuzzService.applyValidationInNumber(5)).toBe("BUZZ")
        expect(FizzbuzzService.applyValidationInNumber(15)).toBe("FIZZBUZZ")
    });
})