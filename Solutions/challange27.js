const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

// My solution :)

function isAnagramInArray(anagram, arr){
    // text.split('').sort().join('')
   
    return arr.map(words => {
        let anagram1 = anagram.toLowerCase().split("").sort().join("").trim()
        //console.log(anagram1)
        let anagram2 = words.split("").sort().join("").trim()
        //console.log(anagram2)
    console.log(anagram1 === anagram2)
        if(anagram1 === anagram2){
            return  `Is anagram '${anagram2} to ${anagram}`
        }
         else {
            return `Not anagram to ${anagram1}`
         }
    })
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));

// My tutor answer
function sortPhrase(phrase){
    return phrase.toLowerCase().split('').sort().join('').trim();
}

function isAnagramsInArray(anagram, arr){
    // use .filter()
    // use sortPhrase() to sort both the input phrase and the current phrase in the array
    // compare the two words to return true or false
    return arr.filter(item => {
        const word1 = sortPhrase(anagram);
        const word2 = sortPhrase(item);
        
        return word1 === word2;
    })
}

console.log(isAnagramsInArray("Bob Ziroll Scrimba Teacher", anagrams));
