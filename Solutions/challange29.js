//My solution 
const slotMachine = document.querySelector('.emoji-slots-game'); 
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr){
   return arr.filter(food => {
        return food.group === `food fruit`
   })
}

function getRandomFruits(){
    fetch(food)
         .then(response => response.json())
         .then(result => makeFruitArray(result)) 
         .then(data => {
            console.log(data)
            data.forEach(({htmlCode}) => {
                const random = Math.floor(Math.random() * data.length)
                 return slotMachine.innerHTML += ` ${htmlCode}`
            })
           
        })
        .catch(err => err)
}

 getRandomFruits()
// write your fetch request here 