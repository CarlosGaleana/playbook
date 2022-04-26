const Reader = require('./../../lib/utils/Reader')
const StudentService = require('./../../lib/services/StudentService')

describe("Unit Test for StudentService class", () => {

    test('Use of Students method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const students = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo
        
        expect(StudentService.Students(students)).not.toBeUndefined();
    });
    test('Use of haveCertification method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const students = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo
        
        expect(StudentService.haveCertification(students)).not.toBeUndefined()//verifica que el valor no sea undefine
    });
    test('Use of Credits method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const students = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo
        expect(StudentService.Credits(students)).not.toBeUndefined()//verifica que el valor no sea undefine
    });
})