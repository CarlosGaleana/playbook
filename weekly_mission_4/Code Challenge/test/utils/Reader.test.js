const Reader = require('./../../lib/utils/Reader')

describe("Unit Test for Reader class", () => {

    test('Use of readJsonFile method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo
        expect(explorers).not.toBeUndefined()//verifica que el valor no sea undefine
    });
})