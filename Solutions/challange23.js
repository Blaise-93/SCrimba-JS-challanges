const podcasts = require("./module/welcome")

function sortByDuration(data, flightLength){
     // Check if flight is greater than 60 minutes
    if(flightLength > 60) {
        data.sort((a, b) => a.duration - b.duration)
    } else {
        data.sort((a, b) => b.duration - a.duraton)
    }
    // loop through my sorted array
     data.forEach(({title, duration}, index) => {
       console.log(`${index + 1}. ${title}, ${duration} minutes`)
     })
}


sortByDuration(podcasts, 60)
