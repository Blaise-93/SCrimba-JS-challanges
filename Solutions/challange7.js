function isAnagram(str1, str2){
    const word1 = str1.split('').sort().join('')
    const word2 = str2.split('').sort().join('')
    return word1 === word2
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("cider", "cried"))

