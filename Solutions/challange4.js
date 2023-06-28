

function capitalizeWord(word){
    //return word[0].toUpperCase().slice(0, 100)
    return word.charAt(0).toUpperCase() + word.slice(1)
   
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    //const words = capitalizeWord()
    const newStrArr = str.split(' ')
    //map the new word via array pattern
    return  newStrArr.map(word => capitalizeWord(word)).join(' ')

}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

