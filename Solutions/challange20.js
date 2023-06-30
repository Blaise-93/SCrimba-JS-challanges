
const shoppingCart = require('./module/candy')

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    // loop through and filter out except the item type with 'savory', then sum uo via reduce
    let savoryTotalPrice = arr.filter(item => item.type ==="savory").reduce((acc, currentprice) => {
        return acc + currentprice.price
    }, 0)
    //convert to 2 decimal places
    return savoryTotalPrice.toFixed(2)
}

console.log(totalSavory(shoppingCart));

