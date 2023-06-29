
const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
 
}



console.log(sumArray(studentCount));