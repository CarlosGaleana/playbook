import Facebook from './facebook_logger.js'
const face1 = new Facebook({user: "carlo", username: "carlogilmar", bio: "...", age: 23},"...","...1")
console.log("User: " + face1.getUser())
console.log("Trending post with biography"+face1.getPostBiography()) 