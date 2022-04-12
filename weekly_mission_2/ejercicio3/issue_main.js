import issue from './issue_logger.js'

const issue1 = new issue("LaunchX","Backend","finish",100,999,"Carlos",10,5)
console.log("Titulo y autor:" + issue1.getTitleAndAuthor())
console.log("Información general: " + issue1.getGeneralInfo())