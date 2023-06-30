 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // create a new, empty string called dupesRemoved
    let removeDupe = '';
     // loop through the string we want to remove dupes from 
    for(let i = 0; i < chars.length; i++){
        if(!removeDupe.includes(chars[i])) {
             // if no, add it 
            removeDupe += chars[i];
             //console.log(chars[i])
        }
    }
    return removeDupe
}

console.log(removeDupeChars(password));
