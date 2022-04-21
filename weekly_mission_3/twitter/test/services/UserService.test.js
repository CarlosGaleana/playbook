const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () =>{
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1,"CarlosGaleana","Carlos")
        expect(user.username).toBe("CarlosGaleana")
        expect(user.name).toBe("Carlos")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1,"CarlosGaleana","Carlos")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("CarlosGaleana")
        expect(userInfoInList[2]).toBe("Carlos")
        expect(userInfoInList[3]).toBe("Sin bio")
    });
    test("3. Update username", () =>{
        const user = UserService.create(1,"CarlosGaleana","Carlos")
        UserService.updateUserUsername(user,"carlog")
        expect(user.username).toBe("carlog")
    });
    test("4. Given a list of users give me the list of usernames", () =>{
        const user1 = UserService.create(1,"CarlosGaleana1","Carlos")
        const user2 = UserService.create(1,"CarlosGaleana2","Carlos")
        const user3 = UserService.create(1,"CarlosGaleana3","Carlos")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("CarlosGaleana1")
        expect(usernames).toContain("CarlosGaleana2")
        expect(usernames).toContain("CarlosGaleana3")
    });
})