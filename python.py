# challange 6 solution via python 😊

emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}
#t = 't'.split()
def emojifyWord(word):
    if not word.endswith(":") and not word.startswith(":"):
        return word
    elif word.endswith(":") and word.startswith(":"):
        slicedWord = word[1 : -1]
        if emojis[slicedWord]:
            return emojis[slicedWord]
        return slicedWord


print(emojifyWord(":heart:"))

# 7 challange -> is_anagram?

def is_anagram(str1, str2):
    if len(str1) != len(str2):
        return False
    return sorted(str1) == sorted(str2)

print(is_anagram("allergy", "gallery"))
print(is_anagram("treasure", "measure"))
print(is_anagram("cider", "cried"))