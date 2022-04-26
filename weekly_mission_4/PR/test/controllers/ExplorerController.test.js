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
    test('Use of getExplorersAmonutByMission method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(ExplorerController.getExplorersAmonutByMission("node")).toBe(10)//verifica que el valor no sea undefine
    });
})