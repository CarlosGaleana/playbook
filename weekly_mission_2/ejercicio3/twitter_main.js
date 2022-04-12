import Twitter from './twitter_logger.js'
const twitter1 = new Twitter({user: "carlo", username: "carlogilmar", bio: "...", age: 23},"Data","Tesla")
console.log("User: " + twitter1.getUser())
console.log("Trending topic with hashtag"+twitter1.getUserHashtag()) 