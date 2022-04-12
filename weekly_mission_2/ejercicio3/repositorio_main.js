import repo from './repositorio_logger.js'

const repo1 = new repo("Carlos","Galeana","Spanish",100,999,150,10,5)
console.log("Nombre del repo:" + repo1.getName())
console.log("Issues totales: " + repo1.getTotalIssues())
console.log(repo1.getGeneralInfo())