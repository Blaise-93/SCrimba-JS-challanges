const shoppingCart = require('./module/candy')


// my soln => However I think might have a bit slow performance since we mapped it prior to reducing it, but
//it is more understandable/readable .
function total(arr) {
    let totalPrice = arr.map(item => item.price).reduce((accumulator, currentPrice) => accumulator + currentPrice)
    return totalPrice.toFixed(2)
} 
 // OR
function sum(arr) {
    let totalPrice = arr.reduce((accumulator, currentPrice) => {
        return accumulator + currentPrice.price
    }, 0)
    return totalPrice.toFixed(2)
}


console.log(total(shoppingCart));
console.log(sum(shoppingCart))