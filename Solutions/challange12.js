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



// ANS FROM MY LECTURER AT SCRIMBA
function removeDupesFromArray(arr){
    // create a new arr to hold unique items 
    // for each item in recipe arr
        // if the item is NOT yet in the unique arr, push it in
        // if it is in the unique arr, move on to the next item (do nothing)
    // return the unique arr 
    
    let uniqueArr = []
    arr.forEach(word => {
        if(!uniqueArr.includes(word)) {
            uniqueArr.push(word)
        }
    });
    return uniqueArr

    
}

console.log(removeDupesFromArray(eggScrambleRecipe));

// OR from my tutor

function remDuplicateArr(arr) {
 // create a new object to keep track of duplicates 
//     // use filter to loop thorugh each item in the arr
//         //for each item in arr
//             // look up the item in the lookup table
//             // if the item does NOT exist in the lookup, add it and return true
//         // return false
    
    const trackDupes = {}
    return arr.filter(item => {
       /*  if(!trackDupes[item]){
            trackDupes[item] = true
            return true
        }
        return false
 */     
        // let's use tenary operator instead
        return !trackDupes[item] ? trackDupes[item] = true : false
    })

}

console.log(remDuplicateArr(eggScrambleRecipe))
