import Uber from './uber_logger.js'
const uber1 = new Uber({user: "carlo", username: "carlogilmar", bio: "...", age: 23},"...")
console.log("User: " + uber1.getUser())
console.log("Travel: "+uber1.getTravel()) 