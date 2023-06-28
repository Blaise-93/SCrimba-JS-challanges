function awardBonuses(){
    //loop through 1 - 100
    for(let i = 0; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log( `${i} - JACKPOT! 1 Million and a Yacht!`)
        }else if(i % 5 === 0){
           console.log( `${i} - $100,000 bonus! ` )
        }else if(i % 3 === 0) {
            console.log( `${i} - Vacation! `)
        }
        else if(i % 3 || i % 5 === 0) {
            console.log( `${i} - :( `)
        }
    }
}
//`${i}`
awardBonuses()

