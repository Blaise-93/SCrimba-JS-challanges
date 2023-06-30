const products = require('../Solutions/module/candy')
const items = require('../Solutions/module/itemArr')

function sortProducts(data){
    //will return the objects in the array based on least expensive to the most expensive price
    /*
        a - b sorts numbers in ascending order and 
        b - a sorts numbers in descending order 
    */ 
    return data.sort((a, b) => a.price - b.price)
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);

// Eg 2: descending order via price
function sortProduct(data) {
    return data.sort((a, b) => b.price - a.price)
}

const listBCheapest = sortProduct(items);
console.log(listBCheapest);