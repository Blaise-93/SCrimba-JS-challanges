function countChars(str){
   const count = {}
   const name = str.toLowerCase().split(" ").join(" ")
   // loop through the letters of the string
   for(let i = 0; i < name.length; i++){
           // if the character is not the obj, add it, give it a value of 1
    if(!count[name[i]]) {
        count[name[i]] = 1
    } else {
        // if the character is already in the object, increment that char's value
        count[name[i]] += 1
    }
   }
   //successfully count the frquency of letter in a str
   return count
}

console.log(countChars("Peggy Porth"));
console.log(countChars("Hippopotamus"));
console.log(countChars("Mississippi"));