const podcasts = require("./module/podcast");

let awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
    return data.reduce((acc, current) => {
        //return acc.concat(current.hosts) OR
        return [...acc, ...current.hosts]
    }, [])

   /*  OR  another approach:
   return data.map(item => item.hosts).flat() */
}

function assignAwards(data){
    
    let awardedHosts  = getHosts(podcasts)
    return awardedHosts.map((item) => {
        const random = Math.floor(Math.random() * awards.length)
        console.log(random)
        return `${awards[random]} ${item}`
    })


}



console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));
