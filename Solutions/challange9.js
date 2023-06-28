function isPalindrome(str) {
    originalStr = str.split('').join('')
    reversedStr = str.split('').reverse().join('')
    return originalStr === reversedStr // if true, then the str is palindrome, else not palindrome
}


// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
