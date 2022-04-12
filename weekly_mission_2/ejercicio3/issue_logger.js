export default class Issue{
    constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }
    getTitleAndAuthor(){
      return this.title + this.author
    }
    getGeneralInfo(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
