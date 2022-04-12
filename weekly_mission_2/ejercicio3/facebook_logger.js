export default class Facebook{
    constructor(user,post,biography){
        this.user = user
        this.post = post
        this.biography = biography
    }

    getUser(){
        return `User: ${this.user.user} Username: ${this.user.username} Biography: ${this.user.bio} Age: ${this.user.age}`  
    }
    getPostBiography(){
        return `This post ${this.post} with ${this.biography}`
    }
   }
   
