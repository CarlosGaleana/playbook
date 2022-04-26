class ExplorerService {
    static Students(students){
        return students
    }
    static haveCertification(students){
        const studentshaveCertification = students.filter((student) => student.haveCertification == true);
        const emailInNode = studentshaveCertification.map((student) => student.email);
        return emailInNode
    }
    static Credits(students){
        const studentsInNode = students.filter((student) => student.credits>500);
        const usernamesInNode = studentsInNode.map((student) => student.name);
        console.log(usernamesInNode)
        return usernamesInNode
    }
}
module.exports = ExplorerService