const Reader = require('./../../lib/utils/Reader')
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit Test for ExplorerService class", () => {

    test('Use of applyValidationInExplorer method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        const explorer1 = {name: "Explorer1", score: 1}
        expect(FizzbuzzService.applyValidationInExplorer(explorer1).trick).toBe(1)
    });
  
    
})