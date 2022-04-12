//Repositorio
export default class repo{
    constructor(nam,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
        this.nam= nam
        this.author= author
        this.language= language
        this.numberOfCommits= numberOfCommits
        this.stars= stars
        this.forks= forks
        this.issues_open= issues_open
        this.issues_close= issues_close
       }
    getName(){
        return this.nam
    }
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
