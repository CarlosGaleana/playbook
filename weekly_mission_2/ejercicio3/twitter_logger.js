export default class Twitter{
    constructor(user,trending_topic,hashtag){
        this.user = user
        this.trending_topic = trending_topic
        this.hashtag = hashtag
    }
    getUser(){
      return `User: ${this.user.user} Username: ${this.user.username} Biography: ${this.user.bio} Age: ${this.user.age}`  
    }
    getUserHashtag(){
      return `This repository ${this.trending_topic} with ${this.hashtag}`
    }
   }