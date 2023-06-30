
const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    let highestVotes = 0
    let winningItem = ''

    for(let food in obj){
        if(highestVotes < obj[food]) {
            highestVotes = obj[food]
            //winning item is the current ppty
            winningItem = food
        }
    }
    console.log(highestVotes, winningItem)
    return highestVotes, winningItem

}

console.log(findTheWinner(gameNightFood))

// OR

function findDWinner(obj){
    // to get only the highest number of votes
    const convertObjToArr = Object.values(obj)
    let maxNum = convertObjToArr[0]
    for(let i = 0; i < convertObjToArr.length; i++) {
        if(convertObjToArr[i] > maxNum){
             return maxNum = convertObjToArr[i]
        }
    }
    //console.log(convertObjToArr)
   return `The item with value ${obj[maxNum]} has the highest number of votes `
}

console.log(findDWinner(gameNightFood));