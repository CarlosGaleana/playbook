export default class Uber{
    constructor(profile,travel){
        this.profile = profile
        this.travel = travel
    }
    getUser(){
        return `User: ${this.profile.user} Username: ${this.profile.username} Biography: ${this.profile.bio} Age: ${this.profile.age}`  
    }
    getTravel(){
      return `This travel ${this.travel}`
    }
   }
   
