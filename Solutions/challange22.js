const mediaData = require('./module/scrimflix')

// my solution 

function getUniqueTags(data){
    // loop through the nexted array of objects via map and flatten it
    return data.map(podcast => podcast.tags).flat()
}

function uniqueTags() {
    //declare the tags const and assign the mediadata to the function
    const tags = getUniqueTags(mediaData)
    //create a unique tag
    let uniquetag = []
    //use for loop and includes srting method to extract the unique tags
    tags.forEach(words => {
        //console.log((words))
        if(!uniquetag.includes(words)) {
            uniquetag.push(words)
        }    
    }) 
    // return the new created unique tags array
    return uniquetag
}
console.log(uniqueTags())


// OR the same method but different pattern (simpler) -> from my tutor at scrimba


function getUniqueTagx(arr) {
    const tags = arr.map(podcast => podcast.tags).flat()
    let uniquetags = []
    tags.forEach(tags => {
        if(!uniquetags.includes(tags)){
            uniquetags.push(tags)
        }
        
    } )
    return uniquetags
}

console.log(getUniqueTagx(mediaData))