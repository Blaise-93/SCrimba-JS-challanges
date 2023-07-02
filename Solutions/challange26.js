const podcasts = require("./module/data2.js")


//my solution
function createDescriptionsFor(data){

    return data.map((podcast) => {
        //console.log(podcast)  
        const title = `${podcast.title}`    
        const duration = `${podcast.duration}`
        const hosts = `${podcast.hosts}`
        const genre = `${podcast.genre}`
        //console.log(hosts)
        
        return  {
                ...podcast,
                description: `${title} is a ${duration} minutes ${genre} hosted by ${hosts}`
            }
                
    })
}

console.log(createDescriptionsFor(podcasts))
