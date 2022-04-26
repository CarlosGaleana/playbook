const StudentController = require('./../../lib/controllers/StudentController')
describe("Unit Test for StudentController class", () => {
    test('Use of Students method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(StudentController.Students()).not.toBeUndefined();
    });
    test('Use of haveCertification method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(StudentController.haveCertification()).not.toBeUndefined()//verifica que el valor no sea undefine
    });
    test('Use of Credits method',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        expect(StudentController.Credits()).not.toBeUndefined()//verifica que el valor no sea undefine
    });
})