const ExplorerController = require('./../../lib/controllers/ExplorerController')
describe("Unit Test for ExplorerController class", () => {

    test('Use of getExplorersByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.getExplorersByMission("node")).not.toBeUndefined;
    });
    test('Use of getExplorersUsernamesByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.getExplorersUsernamesByMission("node")).not.toBeUndefined;
    });
    test('Use of getExplorersUsernamesByMission_String method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.getExplorersUsernamesByMission_String("node")).not.toBeUndefined;
    });
    test('Use of getExplorersAmonutByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.getExplorersAmonutByMission("node")).toBe(10)//verifica que el valor no sea undefine
    });
    test('Use of applyFizzbuzz method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.applyFizzbuzz(1)).toBe(1)
        expect(ExplorerController.applyFizzbuzz(3)).toBe("FIZZ")
        expect(ExplorerController.applyFizzbuzz(5)).toBe("BUZZ")
        expect(ExplorerController.applyFizzbuzz(15)).toBe("FIZZBUZZ")
    });
    test('Use of filterByStact method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.filterByStact("javascript")).not.toBeUndefined()//verifica que el valor no sea undefine
    });
})