export default class PullRequest{
    constructor(title,branchName,status,repositoryNameAssociated){
        this.title =title
        this.branchName = branchName
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    gettitle(){
        return this.title
    }
    getStatus(){
      return this.status
    }
    getTitleAndAuthor(){
      return `This repository ${this.title} was created by ${this.branchName}`
    }
   }
   
