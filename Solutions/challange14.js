
const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];
const studentScoresPerClass = [60, [50,55, 30], [40, 30, 67], 83, [80, 78, 50], 89, 88,70]

function sumArray(arr){
  /*
     for non- nested array; use reduce method below ;
     arr.reduce((accumulator, total) => accumulator + total)
                OR
 */

    // declare total variable 
    let total = 0
    // loop through the array and check if there are nested array
    arr.forEach(item => {
           // console.log(Array.isArray(item))
        //yes? => then loop thru again to sum the total
        if(item.constructor === Array) {
            item.forEach(num => {
                return total += num
            })
        } else { 
        // nope? then it is a single number, sum the total
            return total += item            
         }
        }) 
        // return the total
       return total
       
}

console.log(sumArray(studentCount));
console.log(sumArray(studentScoresPerClass))





console.log(sumArray(studentCount));