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

 
"""  challange 9 -> ispalindrome? """
def is_palindrome(string):
    return string == string[:: -1] # via slice method 
# Test your function
print(is_palindrome("abba"))
print(is_palindrome("civic"))
print(is_palindrome("octopus"))
print(is_palindrome("pumpkins"))
print(is_palindrome("madam"))

# challange 14
student_count = [50,53,61,67,60,70,78,80,80,81,90,110]
def sum_total(arr):
    total = 0
    for num in arr:
        total += num
    return  total

print(sum_total(student_count))

# challange 15

game_night_food = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

def find_winner(obj):
    highest_vote = 0
    winning_team = ''
    for food in obj:
        if highest_vote < obj[food]:
            highest_vote = obj[food]
            winning_team = food
    print(highest_vote, winning_team)
    return highest_vote


print(find_winner(game_night_food))