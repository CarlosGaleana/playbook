const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {

    test('Create an User object',() => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1,"carlosgaleana","Carlos","Bio")
        //Aqui validas los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (Valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlosgaleana")
        expect(user.name).toBe("Carlos")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add getters',() => {
        const user = new User(1,"carlosgaleana","Carlos","Bio")
        expect(user.getUsername).toBe("carlosgaleana")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    test('Add setters',() => {
        const user = new User(1,"carlosgaleana","Carlos","Bio")
        user.setUsername = "Galeana"
        expect(user.username).toBe("Galeana")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})