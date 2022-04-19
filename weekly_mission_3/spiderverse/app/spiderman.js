class spiderman {
    constructor (name,age,actor,movies,studio) {
      this.name = name
      this.age = age
      this.actor = actor
      this.movies = movies
      this.studio = studio
    }
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Hey, I'm  ${this.actor} from ${this.studio} studio`
      }
  }
  
// Esta línea nos permite exportar nuestra clase
module.exports = spiderman