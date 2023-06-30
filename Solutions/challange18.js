const products = require('./module/candy')

function getSaleItems(data){
    //loop through via filter
    return data.filter(shoppingCart => {
        //check the conditions
        if(shoppingCart.item == "🍬") {
            return shoppingCart
        } 
        else if(shoppingCart.item == "🍫") {
            return shoppingCart
        }
        else if(shoppingCart.item == "🍭") {
            return shoppingCart
        }
    })
    // map the destructured item, price
    .map(({item, price}) => {
        const pickedItem = `${item}`
        const itemPrice =  `${price}`

        return {
            item : pickedItem,
            price: itemPrice
        }
    } )
};

// OR  

// Refactored code by ME:) 
function getSalesItems(data){
    // filter the data by product.type -- only sweet
    return data
    .filter(product => product.type === "sweet")
    // loop through the data using map 
    .map(({item, price}) => {
        // for every candy, return a new object with only item and price
        return {
            item,
            price
        }
    });
};


console.log(getSaleItems(products))
console.log(getSalesItems(products))