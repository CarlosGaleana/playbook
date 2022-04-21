const User = require('./../models/user')

class UserView{
    static createUser(user){
        if (user == null || user == undefined){
            class error {
                constructor(){
                    this.error = "payload no existe"
                }
            }
            
            return new error()
        }
        else
            return new User(user.id,user.username,user.name,"Sin bio")
    }
    static getInfo(user){
        let user2= [user.id,user.username,user.name,user.bio] 
        return user2
    }
    static updateUserUsername(user,x){
        user.username =x
    }
    static getAllUsernames([user1,user2,user3]){
        return [user1.username,user2.username,user3.username]
    }
}
module.exports = UserView