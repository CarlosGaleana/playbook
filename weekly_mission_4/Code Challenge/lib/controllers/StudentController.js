const Reader = require('./../utils/Reader');
const StudentService = require('./../services/StudentService');

class StudentController {
    static Students(){
        const students = Reader.readJsonFile("visualpartners.json")
        return StudentService.Students(students)
    }
    static haveCertification(){
        const students = Reader.readJsonFile("visualpartners.json")
        return StudentService.haveCertification(students)
    }
    static Credits(){
        const students = Reader.readJsonFile("visualpartners.json")
        return StudentService.Credits(students)
    }
}
module.exports = StudentController
