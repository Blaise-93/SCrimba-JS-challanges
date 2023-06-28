
// my solution
function altCaps(str){
    let newStr = ' '
     for(let word of str) {
        if(word % 2 === 0) {
            newStr += word
        } else {
            newStr += word.toUpperCase()
        }
     }
    return newStr
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));