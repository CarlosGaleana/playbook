//Repositorio
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   //Issue
   const Issue = {
    title: "LaunchX",
    repositoryNameAssociated: "carlogilmar",
    status: "JavaScript",
    numberOfComments: 100,
    labels: 199,
    author: "Carlos",
    dateCreated: 10,
    lastUpdated: 10,
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Nombre del repo:" + Issue.repositoryNameAssociated)
   console.log("Titulo y autor: " + Issue.getTitleAndAuthor())
   console.log(Issue.getGeneralInfo())


   //PullRequest
const PullRequest = {
    title: "LaunchX",
    branchName: "carlogilmar",
    dateCreated: 02,
    status: 100,
    repositoryNameAssociated: 199,
    getStatus: function(){
      return this.status
    },
    getTitleAndAuthor: function(){
      return `This repository ${this.title} was created by ${this.branchName}`
    }
   }
   
   console.log("Titulo:" + PullRequest.title)
   console.log("Status: " + PullRequest.getStatus())
   console.log("Titulo y branchName"+PullRequest.getTitleAndAuthor()) 
//Twitter
const Twitter = {
  user : {user: "carlo", username: "carlogilmar", bio: "...", age: 23},
  trending_topic: "Data",
  hashtag: "Tesla",
  getUser: function(){
    return this.user
  },
  getUserHashtag: function(){
    return `This repository ${this.trending_topic} with ${this.hashtag}`
  }
 }
 
 console.log("User: " + Twitter.getUser())
 console.log("Trending topic with hashtag"+Twitter.getUserHashtag()) 

 //Facebook
 const Facebook = {
  user : {user: "carlo", username: "carlogilmar", bio: "...", age: 23},
  post: "Data",
  biography: "Tesla",
  getUser: function(){
    return this.user
  },
  getPostBiography: function(){
    return `This repository ${this.post} with ${this.biography}`
  }
 }
 
 console.log("User: " + Facebook.getUser())
 console.log("Trending post with biography"+Facebook.getPostBiography()) 

 //Uber
 const Uber = {
  profile : {user: "carlo", username: "carlogilmar", bio: "...", age: 23},
  travel: "Data",
  getUser: function(){
    return this.user
  },
  getTravel: function(){
    return `This travel ${this.travel}`
  }
 }
 
 console.log("User: " + Uber.getUser())
 console.log("Travel: "+Uber.getTravel()) 