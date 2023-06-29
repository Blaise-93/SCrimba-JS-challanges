const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDuplicatInArray(arr){
    // using spreads and set constructor ES6+
    return [...new Set(arr)]
}

function removeDuplicateArr(array) {
    //create empty object to hold each items
    let obj = {}
    //create an empty array to hold words that aren't duplicated 
    let removeDuplicate = []
    // run a for loop of the array to determine the truthy of the array in our obj
    for (let index = 0; index < array.length; index++) {
        obj[array[index]] = true  
    }
    // check the truthy of every key in the new obj and push it as non duplicated words
    for (let key in obj){
        removeDuplicate.push(key)
    }
    return removeDuplicate
}

//console.log(removeDuplicatInArray(eggScrambleRecipe ))
console.log(removeDuplicateArr(eggScrambleRecipe )) // using traditional 6 style-loop