
function panic(string) {
   const words = string.toUpperCase().split(" ").join(" 😱 ") + "!"
   return words
} 

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

