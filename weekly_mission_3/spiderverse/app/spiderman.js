class spiderman {
    constructor (name,age,actor,movies,cinema) {
      this.name = name
      this.age = age
      this.actor = actor
      this.movies = movies
      this.cinema = cinema
    }
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Hey, I´m  ${this.name} from ${this.cinema} studio`
      }
  }
  
// Esta línea nos permite exportar nuestra clase
module.exports = spiderman