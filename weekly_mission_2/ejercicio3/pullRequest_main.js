import PullRequest from './pullRequest_logger.js'
const PullRequest1 = new PullRequest("LaunchX","Main","finish","Backend")
console.log("Titulo:" + PullRequest1.gettitle())
console.log("Status: " + PullRequest1.getStatus())
console.log("Titulo y branchName"+PullRequest1.getTitleAndAuthor()) 