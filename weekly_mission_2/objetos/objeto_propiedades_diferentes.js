// Un objeto es un conjunto de valores key-value
const explorer = {
    firstName: 'Carlo',
    lastName: 'Gilmar',
    age: 27,
    country: 'Mexico',
    city: 'CDMX',
    skills: [
      'JavaScript',
      'TypeScript',
      'CoffeeScript',
      'Elm'
    ]
  }
  console.log(explorer)
  
  // Acceder a una propiedad del objeto
  const commander = {
    firstName: 'Carlo',
    lastName: 'Gilmar',
    age: 27,
    country: 'Mexico',
    city: 'CDMX',
    skills: [
      'JavaScript',
      'TypeScript',
      'CoffeeScript',
      'Elm'
    ],
  }
  
  // Acceder a las propiedades del objeto usando .
  console.log(commander.firstName)
  console.log(commander.lastName)
  console.log(commander.age)
  
  // Acceder a las propiedades del objetvo con []
  console.log(commander['firstName'])
  console.log(commander['lastName'])
  console.log(commander['age'])
  console.log(commander['age'])
  