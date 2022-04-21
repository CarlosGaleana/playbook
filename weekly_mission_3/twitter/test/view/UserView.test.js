const UserView = require('./../../app/view/UserView')

describe("Tests for UserView", () =>{
    test("Resturn an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });
})