//my solution

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if(!word.endsWith(":") && !word.startsWith(":")){
        return word.toLowerCase();
    } else if(word.endsWith(":") && word.startsWith(":")) {
        const slicedWord = word.slice(1, -1); //start and end position of what we want
        //does it exist in emoji object?
        if(emojis[slicedWord]){
            return emojis[slicedWord];
        } else {
            return slicedWord;
        }

   
    }
}


function emojifyPhrase(phrase){
     const wordArr = phrase.split(" ");
     return wordArr.map(words => (
        emojifyWord(words)
     )).join(" ");

}



 console.log(emojifyWord(":heart:"));
 console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));
