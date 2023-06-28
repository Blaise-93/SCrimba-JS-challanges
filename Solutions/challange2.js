const start = 'shh... '
function whisper(string) {
    if(string.endsWith("!")) {
        return start + string.toLowerCase().slice(0, string.length - 1)
    }
    else {
        return start + string.toLowerCase()
    }
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));


const txt = 'Kristine is my lovey!'
const removeSecondToLastLetter = txt.slice(0, txt.length - 2)
console.log(removeSecondToLastLetter)