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

