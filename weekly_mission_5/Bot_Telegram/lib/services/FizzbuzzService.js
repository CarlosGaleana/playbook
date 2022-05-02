class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            console.log("FIZZBUZZ")
            return explorer
        }
        else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            console.log("FIZZ")
            return explorer
        }
        else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            console.log("BUZZ")
            return explorer
        }
        else{
            explorer.trick = explorer.score;
            console.log(explorer.score)
            return explorer
        }
    }
    static applyValidationInNumber(number){
        if(number%5 === 0 && number%3 === 0){
            return "FIZZBUZZ"
        }
        else if(number%3 === 0){
            return "FIZZ"
        }
        else if(number%5 === 0){
            return "BUZZ"
        }
        else{
            return number
        }
    }
}
module.exports = FizzbuzzService