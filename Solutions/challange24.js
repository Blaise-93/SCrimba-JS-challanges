const postData = require("./module/posts")

function calcAverageLikes(data){
    // accumulator -> initial value, while looping, we use 
    //currentValue to determine the post likes
  const totalLikes = data.reduce((accumulator, currentValue) => {
        //console.log(accumulator)
        return accumulator + currentValue.likes
  }, 0)
  const avLikesByIggy = totalLikes/data.length
  return avLikesByIggy.toFixed(0.1)
} 
 
// OR from tutor, Mrs Treasure Porth
function calcAvLikes(data){
    // reduce to single total
    const total = data.reduce((acc, curr)=> {
        // add curr.likes to acc
        return acc += curr.likes
    }, 0);
    // divide the total by data.length to get the avg 
    return total / data.length;
  } 


console.log(calcAverageLikes(postData))
console.log(calcAvLikes(postData))
