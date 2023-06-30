const podcasts = require('./module/data1')

function getFreePodcasts(data){
    //loop through the array via filter mtd
    return data.filter(podcast => {
        //paid? check whether it is not paid
        if(podcast.paid === false){
            return podcast
        }
    })
    //map the returned filtered array 
    .map(({title, rating, paid}) => {
        const podTitle = `${title}`
        const ratingStatus = `${rating}`
        const isPaid = `${paid}`
            return {
                title: podTitle,
                rating: ratingStatus,
                paid: isPaid 
            }
}) 

}

console.log(getFreePodcasts(podcasts))
