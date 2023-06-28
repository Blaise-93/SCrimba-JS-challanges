const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]


function reverseString(str) {
    return str.split('').reverse().join(" ")
}


function reverseStringsInArray(arr) {
    const newArr = arr.map(message => ( reverseString(message)))
    return newArr
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));