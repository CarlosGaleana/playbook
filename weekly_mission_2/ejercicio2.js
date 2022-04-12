const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
//Imprime el nombre (propiedad name) de cada explorer en la lista
console.log("Nombre de explorers:");
explorers.forEach(name => console.log(name.name));
//Imprime el stack de cada explorer, usa FOR EACH
console.log("Stack:");
explorers.forEach(stack => console.log(stack.stack));
 //Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
 console.log("Lista de stack:");
var array = explorers.map(function(obj){
  var stack = {};
  stack= obj.stack;
  return stack;
});
console.log(array);
//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stack = explorers.filter(stack => stack.stack.includes("js"));
console.log("Lista con stackk js");
console.log(stack);
//Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Primer explorer CDMX");
const found = explorers.find(element => element.city == "CDMX");
console.log(found);
//Obtén la suma de todos los exercises_completed, usa REDUCE
const result_of_reduce = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log("Resultado de reduce: ")
console.log(result_of_reduce)
//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const areSomeTrue = explorers.some((b) =>  b.missions.frontend.isFinished === true)
console.log("Resultado validacion: si algun ejercicio de frontend es true: " + areSomeTrue) //true
//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const areAllStr = explorers.every((name) =>  name.missions.onboarding.isFinished === true) // every
console.log("Resultado validacion every: Todos han terminado el onboarding: " + areAllStr)
