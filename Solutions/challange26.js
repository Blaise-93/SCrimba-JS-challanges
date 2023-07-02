const podcasts = require("./module/data2.js")


//my solution
function createDescriptionsFor(data){

    return data.map((podcast) => {
        //console.log(podcast)  
        const title = `${podcast.title}`    
        const duration = `${podcast.duration}`
        const hosts = `${podcast.hosts}`
        const genre = `${podcast.genre}`
        //OR const {title, duration, hosts, genre} = podcast
        
        return  {
                ...podcast,
                // I went ahead for the stretch goal instead, 
                // for only one host, we can use indexing to access it => ${hosts[0]}
                description: `${title} is a ${duration} minutes ${genre} hosted by ${hosts}`
            }
                
    })
}

console.log(createDescriptionsFor(podcasts))
